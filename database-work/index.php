<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
<title>E-corp</title>
<link rel="stylesheet" href="css/style.css">
<?php
  //Подключение базы данных
  $servername = "localhost";
  $username = "user";
  $password = "1305";
  $dbname = "project_work";
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  //Массивы с атрибутами таблиц и их переводами
  $profession = [
    "table" => "profession",
    "tableName" => "Должности",
    "column" => ["idProfession", "name"],
    "columnName" => ["Номер должности", "Название"],
  ];
  $worker = [
    "table" => "worker",
    "tableName" => "Сотрудники",
    "column" => ["idWorker", "surname", "name", "birthday", "idProfession", "idTask"],
    "columnName" => ["Номер сотрудника", "Фамилия", "Имя", "Дата рождения", "Должность", "Задача"],
  ];
  $site = [
    "table" => "project",
    "tableName" => "Проекты",
    "column" => ["idProject", "domain", "idServer"],
    "columnName" => ["Номер проекта", "Домен", "Ip сервера"],
  ];
  $server = [
    "table" => "server",
    "tableName" => "Серверы",
    "column" => ["idServer", "ipServer", "password"],
    "columnName" => ["Номер сервера", "Ip-адрес", "Пароль"],
  ];
  $panel = [
    "table" => "panel",
    "tableName" => "Панели",
    "column" => ["idPanel", "login", "password", "idProject"],
    "columnName" => ["Номер панели", "Логин", "Пароль", "Проект"],
  ];
  $project = [
    "table" => "task",
    "tableName" => "Задачи",
    "column" => ["idTask", "name", "startDate", "finishDate", "idProject"],
    "columnName" => ["Номер задачи","Название", "Дата начала", "Дата окончания", "Проект"],
  ];
  $tables = [$profession, $worker, $site, $server, $panel, $project];
  //Выбор таблицы по параметру get из адресной строки
  if (isset($_GET["table"])){
    foreach($tables as $el) {
      if ($_GET["table"] == $el["tableName"]){
        $table = $el;
      }
    }
  }
  if (!$table) $table = $profession;
  function searchTable($column){
    global $tables;
    global $table;
    foreach ($tables as $el){
      if ($el == $table) continue;
      if ($el["column"][0] == $column) return $el;
    }
  }
  function getInputType($key){
    global $table;
    if (strpos($table["columnName"][$key], "Дата") === false){
      return "text";
    }else{
      return "date";
    }
  }
?>

<?php
//Получение форм
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if ($_POST["form"] == "form-delete"){
    //Удаление записи
    $sql = "DELETE FROM " . $table["table"] . " WHERE " . $table["column"][0] . " = " . $_POST["idDel"];
  }else if ($_POST["form"] == "form-add"){
    //Добавление записи
    $values = "";
    //Цикл преобразование введенных пользователем данных в формат с кавычками и запятыми
    foreach($table["column"] as $key => $el){
      if ($key == 1){
        $values .= "'" . $_POST[$el] . "'";
        continue;
      }else if ($key == 0) continue;
      $values .=  ", '" . $_POST[$el] . "'";
    }
    $sql = "INSERT INTO " . $table["table"] . " (" .
      implode(", ", $table["column"]) .  //Преобразовывает массив с атрибутами в строку
    ") VALUES (NULL, " .
      $values .
    ")";
  }else if ($_POST["form"] == "form-change"){ //Изменение записи
    $values = "";
    //Цикл преобразование введенных пользователем данных в формат с кавычками и запятыми
    foreach($table["column"] as $key => $el){
      if ($key == 1){
        $values .= $el . " = '" . $_POST[$el] . "'";
        continue;
      }else if ($key == 0) continue;
      $values .=  ", " . $el . " = " . "'" . $_POST[$el] . "'";
    }
    $sql = "UPDATE " . $table["table"] . " SET " .
      $values .
    " WHERE " .
      $table["column"][0] . " = " . $_POST[$table["column"][0]];
  }else if ($_POST["form"] == "form-search"){
    $searchId = $_POST["search"];
  }
  $conn->query($sql);
}?>

<header class="header">
  <div class="container">
    <menu class="header__menu menu">
      <?php foreach($tables as $el) {?>
        <a href="?table=<?php echo $el["tableName"];?>" class="menu__item <?php if ($el["tableName"] == $_GET["table"]) echo "checked";?>"><?php echo $el["tableName"];?></a>
      <?php } ?>
      <div class="notification">
        <button class="notification-button"><img src="img/notification.svg" alt="notifications"></button>
        <ul class="notification__body">
          <li>Пока уведомлений нет</li>
        </ul>
      </div>
    </menu>
  </div>
</header>

<div class="wrapper">
  <div class="container">
    <section class="search">
      <form id="form-search" method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>">
        <input type="search" name="search" placeholder="Поиск..."> <input type="text" name="form" value="form-search">
        <button type="submit"><img class="search-button" src="img/search.svg" alt="найти"></button>
      </form>
    </section>
    <section class="table">
      <?php
        //Запрос вывода содержимого страницы
        $sql = "SELECT * FROM " . $table["table"];
        //Фильтр вывода при поиске
        if ($searchId){
          $sql .= " WHERE ";
          foreach($table["column"] as $key => $el){
            if ($key == 0){
              $sql .= $el . " LIKE '%$searchId%'";
            }else{
              $sql .= " OR " . $el . " LIKE '%$searchId%'";
            }
          }
        }
        $result = $conn->query($sql);
      ?>
      <table>
        <thead>
          <tr>
            <?php foreach($table["columnName"] as $el) {?>
              <th><?php echo $el;?></th>
            <?php } ?>
          </tr>
        </thead>
        <tbody>
          <?php while($row = $result->fetch_assoc()) {?>
          <tr>
            <form id="form-change" method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>">
              <?php foreach($table["column"] as $key => $el) {
                if (!$relativeTable = searchTable($el)){?>
                  <td class="table__column"><?php echo $row[$el];?></td>
                  <td class="table__change-column">
                    <input type="<?php echo getInputType($key);?>" name="<?php echo $el;?>" value="<?php echo $row[$el];?>">
                  </td>
                <?php }else{
                  //Запрос к базе на вывод данных о связанной таблице для определенной записи
                  $sql = "SELECT * FROM " . $relativeTable["table"] . " WHERE " . $relativeTable["column"][0] . " = " . $row[$el];
                  $relativeResult = $conn->query($sql);
                  $relativeRow = $relativeResult->fetch_assoc();
                ?>
                <td class="table__column"><?php echo $relativeRow[$relativeTable["column"][1]];?></td>
                <?php 
                  //Запрос к базе на вывод данных о связанной таблице для списка записей
                  $sql = "SELECT " . $relativeTable["column"][0] . ", " . $relativeTable["column"][1] . " FROM " . $relativeTable["table"];
                  $relativeResult = $conn->query($sql);
                ?>
                <td class="table__change-column">
                  <select id="" name="<?php echo $el;?>">
                    <?php while($relativeRow = $relativeResult->fetch_assoc()) {?>
                      <option value="<?php echo $relativeRow[$relativeTable["column"][0]]; ?>" <?php if ($row[$el] == $relativeRow[$relativeTable["column"][0]]) echo "selected";?>><?php echo $relativeRow[$relativeTable["column"][1]];?></option>
                    <?php } ?>
                  </select>
                </td>
                <?php } ?>
              <?php } ?>
              <td class="table__change-submit">
                <input type="text" name="form" value="form-change">
                <button type="submit">Изменить</button>
              </td>
           </form>
            <td class="table__tools">
              <button class="change-button"><img src="img/pencil.svg" alt="change"></button>
              <form id="form-delete" method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>">
                <input type="text" name="idDel" value="<?php echo $row[$table["column"][0]];?>">
                <input type="text" name="form" value="form-delete">
                <button type="submit"><img src="img/delete.svg" alt="delete"></button>
              </form>
            </td>
          </tr>
          <?php } ?>
        </tbody>
      </table>
    </section>
    <section class="add">
      <form id="form-add" method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>">
        <div class="add__left-block">
        <?php foreach($table["column"] as $key => $el) {
          if (!$relativeTable = searchTable($el)){?>
            <div class="add__input-block">
              <label for=""><?php echo $table["columnName"][$key];?></label>
              <input type="<?php echo getInputType($key);?>" placeholder="<?php echo $table["columnName"][$key];?>" name="<?php echo $el;?>">
            </div>
          <?php }else{
            //Запрос к базе на вывод данных о связанной таблице для списка записей
            $sql = "SELECT " . $relativeTable["column"][0] . ", " . $relativeTable["column"][1] . " FROM " . $relativeTable["table"];
            $relativeResult = $conn->query($sql);
          ?>
          <div class="add__input-block">
            <label for=""><?php echo $table["columnName"][$key];?></label>
            <select id="" name="<?php echo $el;?>">
              <option value="0" selected>Выберите из списка</option>
              <?php while($relativeRow = $relativeResult->fetch_assoc()) {?>
                <option value="<?php echo $relativeRow[$relativeTable["column"][0]]; ?>"><?php echo $relativeRow[$relativeTable["column"][1]]; ?></option>
              <?php } ?>
            </select>
          </div>
        <?php }} ?>
        </div>
        <input type="text" name="form" value="form-add">
        <button type="submit"><img src="img/add.svg" alt="add"></button>
      </form>
    </section>
  </div>
</div>

<footer class="footer">
  <div class="container">
    <a target="_blank" href="https://github.com/Zarathustra5/Html/tree/master/database-work"><img src="img/github.svg" alt="github"></a>
  </div>
</footer>

<script src="js/main.js"></script>
<?php $conn->close();?>
