//alert("gg")
const authForm = document.getElementById("auth-form");
const filesSelector = document.getElementById("files");

let users;
let files;
let currentUser;
let isRoot = false;
let localStorage = window.localStorage;
let userId = localStorage.getItem("user");
let preSql = localStorage.getItem("preSql");
let db;

async function initDB() {
  const sqlPromise = initSqlJs({
      locateFile: file => `../js/lib/sql-wasm.wasm`
  });
  const dataPromise = fetch("./data/db.sqlite3").then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  db = new SQL.Database(new Uint8Array(buf));
  if (preSql) db.run(preSql);
  users = db.exec("select * from user")[0].values;
  files = db.exec("select * from files")[0].values;
  currentUser = db.exec(`select * from user where id = ${userId}`)[0].values[0];
  console.log(currentUser);
  if (authForm) authHandler();
  if (currentUser) showHomePage();
}
initDB();

function showHomePage() {
  let title = document.getElementById("title");
  if (title) title.innerHTML = `Добро пожаловать, ${currentUser[1]}`
  if (currentUser[1] == "root") isRoot = true;
  if (filesSelector) renderFiles();
}

function authHandler() {
  authForm.onsubmit = e => {
    e.preventDefault();
    const errorSelector = document.querySelector(".auth-form__error");
    errorSelector.classList.add("auth-form__error_active");
    const formData = new FormData(e.target);
    const login = formData.get("login");
    const password = formData.get("password");
    let credentials = {};
    credentials.login = login;
    credentials.password = password;
    users.forEach(el => {
      if (el[1] == credentials.login && el[2] == credentials.password) {
        localStorage.setItem("user", el[0]);
        window.location = "home.html"
      }
    });
  }
}

function renderFiles() {
  let code = "";
  files.forEach(el => {
    let fileOwner = db.exec(`select * from user where id = ${el[3]}`)[0].values[0];
    let fileGroup = db.exec(`select * from groups where id = ${el[4]}`)[0].values[0];
    let isInGroup = db.exec(`select * from members where user_id = ${currentUser[0]} and group_id = ${fileGroup[0]}`);
    let groups = db.exec(`select * from groups`)[0].values;
    let form = "";
    let isOwner = false;
    let currentUserRights = "";
    if (currentUser[0] == fileOwner[0]) {
      isOwner = true;
    }
    let obj = translateRights(el[2], isOwner, isInGroup);
    currentUserRights = obj.fileClass;
    if (isRoot) {
      currentUserRights = "rwx";
      form = `
        <form class="file-form" onsubmit="changeFileForm()">
          <label for="rights-input">Права на файл: </label>
          <input id="rights-input" name="rights" class="file-form__input" value="${el[2]}">
          <label for="owner-input">Владелец файла: </label>
          <select id="owner-input" name="owner" class="file-form__input">
      `;
      users.forEach(el => {
        let def = "";
        if (el[0] == fileOwner[0]) {
          def = "selected";
        }
        form += `<option value="${el[0]}" ${def}>${el[1]}</option>`
      });
      form += `
          </select>
          <label for="group-input">Группа файла: </label>
          <select id="group-input" name="group" class="file-form__input">
      `;
      groups.forEach(el => {
        let def = "";
        if (el[0] == fileGroup[0]) {
          def = "selected";
        }
        form += `<option value="${el[0]}" ${def}>${el[1]}</option>`
      });
      form += `
          </select>
          <input name="fileId" type="hidden" value="${el[0]}">
          <input type="submit" class="btn file-form__submit" value="Изменить">
        </form>
      `;
    }
    let btns = "";
    if (currentUserRights) {
      if (currentUserRights.indexOf("r") != -1) {
        btns += `<button class="btn-reverse">Чтение</button>`;
      }
      if (currentUserRights.indexOf("w") != -1) {
        btns += `<button class="btn-reverse">Запись</button>`;
      }
      if (currentUserRights.indexOf("x") != -1) {
        btns += `<button class="btn-reverse">Испольнение</button>`;
      }
      //classes += obj.fileClass.split("").sort().join("");
    }
    code += `
      <div class="file ${currentUserRights}">
        <svg><use href="#file"></use></svg>
        <p class="file__title">${el[1]}</p>
        <div class="file__rights">
          <span>${obj.rights} (${el[2]})</span>
          <span>${fileOwner[1]}</span>
          <span>${fileGroup[1]}</span>
        </div>
        <div class="file__buttons">
          ${btns}
        </div>
        ${form}
      </div>
    `;
  });
  filesSelector.innerHTML = code;
}

function translateRights(rights, isOwner, isInGroup) {
  if (rights) {
    rightsArr = rights.toString().split("");
    let newRights = "";
    let fileClass = "";
    for (let i = 0; i < rightsArr.length; i++) {
      let el = rightsArr[i];
      let res = "";
      if (el == "1") {
        res += "--x";
      } else if (el == "3") {
        res += "-wx";
      } else if (el == "4") {
        res += "r--";
      } else if (el == "5") {
        res += "r-x";
      } else if (el == "7") {
        res += "rwx";
      } else {
        res += "---";
      }
      if (i == 0 && isOwner) {
        fileClass += checkRights(res, fileClass, "r");
        fileClass += checkRights(res, fileClass, "w");
        fileClass += checkRights(res, fileClass, "x");
      }
      if (i == 1 && isInGroup.length > 0) {
        fileClass += checkRights(res, fileClass, "r");
        fileClass += checkRights(res, fileClass, "w");
        fileClass += checkRights(res, fileClass, "x");
      }
      if (i == 2) {
        fileClass += checkRights(res, fileClass, "r");
        fileClass += checkRights(res, fileClass, "w");
        fileClass += checkRights(res, fileClass, "x");
      }
      newRights += res;
    }
    let obj = {}
    obj.rights = newRights;
    obj.fileClass = fileClass;
    return obj; 
  }
}

function checkRights(res, fileClass, right) {
  if (res.indexOf(right) != -1 && fileClass.indexOf(right) == -1) {
    return right;
  } else {
    return "";
  }
}

function changeFileForm() {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rights = formData.get("rights");
  const owner = formData.get("owner");
  const group = formData.get("group");
  const fileId = formData.get("fileId");
  let preSql = "";
  preSql += `update files set rights = ${rights} where id = ${fileId};`;
  preSql += `update files set owner = ${owner} where id = ${fileId};`;
  preSql += `update files set group_id = ${group} where id = ${fileId};`;
  localStorage.setItem("preSql", preSql);
  console.log(owner);
  window.location.reload();
}
