//Написание сценария

//Папка, в которой будет собираться проект
let project_folder = require("path").basename(__dirname);
//Папка c исходниками
let source_folder = "src";

let fs = require("fs");

let isBuild = process.argv.includes('--build'),
    isDev = !process.argv.includes('--build');

//Пути
let path = {
  //Пути вывода обработанных Gulp'ом файлов
  build:{
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  //Пути ввода файлов, файлы, которые Gulp должен обработать
  src:{
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/style.scss",
    js: source_folder + "/js/script.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.ttf",
  },
  //Файлы, которые нужно слушать постноянно
  watch:{
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  //Удаление этой папки каждый раз, после запуска Gulp
  clean:"./" + project_folder + "/"
}

//Настройка плагинов
let {src, dest} = require('gulp'),
  gulp = require('gulp'),
  //Плагин обновления страницы
  browsersync = require("browser-sync").create(),
  //Плагин-шаблонизатор, подключает отдельные html файлы, такие как header, footer и т.д., js файлы
  fileinclude = require("gulp-file-include"),
  //Плагин удаления папки dist перед компиляцией
  del = require("del"),
  //Позволяет не прописывать тег picture в html для браузеров, которые не подерживают webp
  webphtml = require("gulp-webp-html"),
  //---------------------CSS-------------------------------
  //Плагин sass 
  scss = require("gulp-sass")(require('sass')),
  //Плагин автодобавления префикса для разных браузеров в css (для display:flex - display:-webkit-box; display: -ms-flexbox;)
  autoprefixer = require("gulp-autoprefixer"),
  //Плагин, собирающий по файлу css все media запросы и составляющий из них один целый, который находится в конце файла
  group_media = require("gulp-group-css-media-queries"),
  //Плагин, очищающий css файл и сжимающий его для увеличения производительности
  clean_css = require("gulp-clean-css"),
  //Позволяет не прописывать теги для webp в css для браузеров, которые не подерживают webp
  webpcss = require("gulp-webp-css"),
  //----------------------------------------------------
  //Плагин, переименовывающий файл
  rename = require("gulp-rename"),
  //---------------------JS-------------------------------
  //Плагин, очищающий js файл и сжимающий его для увеличения производительности
  uglify = require("gulp-uglify-es").default,
  //----------------------------------------------------
  //-----------------------Images-----------------------------
  //Сжатие картинки (уменьшение веса без потери качества)
  imagemin = require("gulp-imagemin-fix"),
  //Конвертация картинки в формат webp для повышения производительности
  webp = require("gulp-webp"),
  //Создает svg спрайты, то есть собирает иконки в одно целое
  svgSprite = require("gulp-svg-sprite"),
  //---------------------------------------------------
  //-----------------------Fonts-----------------------------
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2"),
  fonter = require("gulp-fonter");
  //Ветвление
  ifPlugin = require("gulp-if");

function browserSync(params){
  browsersync.init({
    server:{
      baseDir: "./" + project_folder + "/"
    },
    port:3000,
    notify: false
  })
}

//-----Функции (выполняются автоматически)----------------------------------

//Отвечает за html 
function html(){
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml()) 
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

//Отвечает за css 
function css(){
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(
      webpcss()
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

//Отвечает за js
function js(){
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

//Отвечает за картинки 
function images(){
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel:3 // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

//Отвечает за шрифты (преобразует ttf шрифты в woff формат)
function fonts(){
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}

//Добавляет шрифты в css
function fontsStyle(params){
  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb(){
}

//Отвечает за удаление папки выходных данных перед компиляцией
function clean(params){
  return del(path.clean);
}

//---------Задачи (выполняются из консоли)----------------------------------

//Конвертирует в ttf 
gulp.task('otf2ttf', function(){
  return src([source_folder + '/fonts/*.otf'])
    .pipe(fonter({
      formats: ['ttf']
    }
    ))
    .pipe(dest(source_folder + '/fonts/'));
})

//Cоздает спрайты иконок
gulp.task('svgSprite', function(){
  return gulp.src([source_folder + '/iconsprite/*.svg'])
    .pipe(svgSprite({
      mode:{
        stack:{
          sprite: "../icons/icons.svg", //имя спрайта
          example: true  //Пример спрайта
        }
      },
    }
    ))
    .pipe(dest(path.build.img))
})

//---------------Поля настройки работы функций----------------------------

//Функция, которая следит за изменениями и обновляет страницу
function watchFiles(params){
  gulp.watch([path.watch.html],html);
  gulp.watch([path.watch.css],css);
  gulp.watch([path.watch.js],js);
  gulp.watch([path.watch.img],images);
}

//Разработка
let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
