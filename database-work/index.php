<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
<title>E-corp</title>
<link rel="stylesheet" href="css/style.css">
<?php
  // Init
  $servername = "";
  $username = "";
  $password = "";
  $dbname = "";
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  function getPrimaryKey($mas){
    foreach($mas as $key => $el){
      return $key;
    }
  }
  $profession = [
    "table" => "profession",
    "tableName" => "Должности",
    "column" => ["idProfession", "name"],
    "columnName" => ["Номер должности", "Название"],
  ];
  $worker = [
    "table" => "worker",
    "tableName" => "Сотрудники",
    "column" => ["idWorker", "surname", "name", "birthday", "idProfession", "idProject"],
    "columnName" => ["Номер сотрудника", "Фамилия", "Имя", "Дата рождения", "Номер должности", "Номер проекта"],
  ];
  $site = [
    "table" => "site",
    "tableName" => "Сайты",
    "column" => ["idSite", "domain", "idServer"],
    "columnName" => ["Номер сайта", "Домен", "Номер сервера"],
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
    "column" => ["idPanel", "login", "password", "idSite"],
    "columnName" => ["Номер панели", "Логин", "Пароль", "Номер сайта"],
  ];
  $project = [
    "table" => "project",
    "tableName" => "Проекты",
    "column" => ["idProject", "name", "startDate", "finishDate", "idSite"],
    "columnName" => ["Номер проекта", "Название", "Дата начала", "Дата окончания", "Номер сайта"],
  ];
  $tables = [$profession, $worker, $site, $server, $panel, $project];
  if (isset($_GET["table"])){
    foreach($tables as $el) {
      if ($_GET["table"] == $el["tableName"]){
        $table = $el;
      }
    }
  }
  if (!$table) $table = $profession;
?>

<header class="header">
  <div class="container">
    <menu class="header__menu menu">
      <?php foreach($tables as $el) {?>
        <a href="?table=<?php echo $el["tableName"];?>" class="menu__item <?php if ($el["tableName"] == $_GET["table"]) echo "checked";?>"><?php echo $el["tableName"];?></a>
      <?php } ?>
    </menu>
  </div>
</header>

<div class="wrapper">
  <div class="container">
    <section class="table">
      <?php
        $sql = "SELECT * FROM " . $table["table"];
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
              <?php foreach($table["column"] as $el) {?>
                <td class="table__column"><?php echo $row[$el];?></td>
                <td class="table__change-column">
                  <input type="text" name="<?php echo $el;?>" value="<?php echo $row[$el];?>">
                </td>
              <?php } ?>
              <td class="table__change-submit">
                <input type="text" name="form" value="form-change">
                <button type="submit">Изменить</button>
              </td>
           </form>
            <td class="table__tools">
              <button class="change-button"><img src="img/pencil.svg" alt="change"></button>
              <form id="form-delete" method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>">
                <input type="text" name="key" value="<?php $key = getPrimaryKey($row); echo $key;?>">
                <input type="text" name="id" value="<?php echo $row[$key];?>">
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
        <div>
        <?php foreach($table["column"] as $key => $el) { ?>
          <input type="text" placeholder="<?php echo $table["columnName"][$key];?>" name="<?php echo $el;?>">
        <?php } ?>
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

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if ($_POST["form"] == "form-delete"){
    $sql = "DELETE FROM " . $table["table"] . " WHERE " . $_POST["key"] . " = " . $_POST["id"];
  }else if ($_POST["form"] == "form-add"){
    $columns = "";
    foreach($table["column"] as $key => $el){
      if ($key == 0){
        $columns .=  $el;
        continue;
      }
      $columns .=  ", " . $el;
    }
    $values = "";
    foreach($table["column"] as $key => $el){
      if ($key == 1){
        $values .= "'" . $_POST[$el] . "'";
        continue;
      }else if ($key == 0) continue;
      $values .=  ", '" . $_POST[$el] . "'";
    }
    $sql = "INSERT INTO " . $table["table"] . " (" .
      $columns .
    ") VALUES (NULL, " .
      $values .
    ")";
  }else if ($_POST["form"] == "form-change"){
    $values = "";
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
  }
  $conn->query($sql);
  echo "<meta http-equiv='refresh' content='0'>";
}
?>

<script src="js/main.js"></script>
<?php $conn->close();?>
