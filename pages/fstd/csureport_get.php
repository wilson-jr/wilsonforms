<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Отчет медэксперта</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css" rel="stylesheet"/>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.js"></script>

</head>
<body class="wrapper">
  <style>
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */
    body { font-family: 'Roboto', sans-serif; }
    .wrapper { max-width: 1000px; position: relative; margin: 50px auto;}
    .content { border: 1px solid black; padding: 5px;}
  </style>
    <h2>Название темы</h2>
    <code>
      <p>Crime Scene Investiagtion <?php echo $_POST["rn"]; ?></p>
    </code>
    <h2>Код для вставки</h2>
    <div>
      <code>
        [float=left][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float]<br>
        [float=right][size=85]Город Лос-Сантос, СА<br>
        район Веспуччи, Сан-Андреас авеню<br>
        Судебно-медицинская лаборатория<br>
        +1 (212) 6789 807[/size][/float]<br>
        [b][size=125][color=#004080]Los Santos Police Department[/color][/b][/size]<br>
        [b][size=100][color=#004080]Forensic Analysis Report System[/color][/b][/size]<br>
        <br>
        [adp]FOR OFFICIAL USE ONLY[/adp][br]<br>
        [br][center][borderb=black][size=125][b]CRIME SCENE INVESTIGATION NARRATIVE[/b][/size][/borderb][/center]<br>
        [br][float=left][size=85][b]Ответственный эксперт[/b] [/size]<br>
        [size=85]<?php echo $_POST["rns"]; ?>[/size]<br>
        <br>
        [size=85][b]Для связи[/b] [/size]<br>
        [size=85]<?php echo $_POST["pn"]; ?>[/size][/float]<br>
        <br>
        [float=right][size=85][b]Ответственный офицер[/b] [/size]<br>
        [center][size=85]<?php echo $_POST["orns"]; ?>[/size][/center]<br>
        <br>
        <br>
        <br>
        [center][size=85][b]No. отчёта[/b][/size][/center]<br>
        [center][size=85]<?php echo $_POST["rn"]; ?>[/size][/center][/float]<br>
        [br]<br>
        [br]<br>
        [br]<br>
        [br]<br>
        [center][borderb=black][size=125][b]DEAD BODY INSPECTION CARD[/b][/size][/borderb][/center]<br>
        [br][size=90][b]Тип смерти:[/b][/size]<br>
        [warning][color=#000000][size=85]Укажите тип инцидента, исходя из имеющихся в вашем распоряжении сведений, заменив обозначение (–) на (✓).[/size][/color][/warning]<br>
        [tab][tr][td][size=85][b]Насильственная смерть[/b][/size][/td][td][size=85]<?php echo $_POST["deathType_vd"]; ?>[/size][/td][td][size=85][b]Несчастный случай[/b][/size][/td][td][size=85]<?php echo $_POST["deathType_acc"]; ?>[/size][/td][td][size=85][b]Подозрительная смерть[/b][/size][/td][td][size=85]<?php echo $_POST["deathType_sd"]; ?>[/size][/td][td][size=85][b]Инцидент, связанный с преступной группировкой[/b][/size][/td][td][size=85]<?php echo $_POST["deathType_iicg"]; ?>[/size][/td][/tr][/tab]<br>
        <br>
        [br][size=90][b]Характер смерти:[/b][/size]<br>
        [warning][color=#000000][size=85]Классификация характера смерти по установленным в ходе осмотра предварительным обстоятельствам. Отметьте (✓).[/size][/color][/warning]<br>
        [tab][tr][td][size=85][b]Несчастный случай[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_acc"]; ?>[/size][/td][td][size=85][b]Суицид[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_suicide"]; ?>[/size][/td][td][size=85][b]Убийство[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_homicide"]; ?>[/size][/td][td][size=85][b]Естественная смерть[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_nd"]; ?>[/size][/td][td][size=85][b]Не установлен[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_notinstalled"]; ?>[/size][/td][td][size=85][b]Расследуется[/b][/size][/td][td][size=85]<?php echo $_POST["deathManner_underinvestigation"]; ?>[/size][/td][/tr][/tab]<br>
        <br>
        [br][size=90][b]Детали и установленные обстоятельства:[/b][/size]<br>
        [warning][color=#000000][size=85]Установленные в ходе осмотра места тела трупа обстоятельства, связанные с обстоятельствами наступления смерти лица.[/size][/color][/warning]<br>
        [tab][tr][td][size=85][b]Личные данные жертвы:[/b][/size][/td][td][size=85]<?php echo $_POST["victimsID_namesurname"]; ?>[/size][/td][td][size=85]<?php echo $_POST["victimsID_age"]; ?>[/size][/td][td][size=85]<?php echo $_POST["victimsID_sex"]; ?>[/size][/td][td][size=85]<?php echo $_POST["victimsID_race"]; ?>[/size][/td][/tr]<br>
        [tr][td][size=85][b]Место обнаружения трупа:[/b][/size][/td][td][size=85]<?php echo $_POST["scene_place"]; ?>[/size][/td][td][size=85]<?php echo $_POST["scene_area"]; ?>[/size][/td][td][size=85]<?php echo $_POST["scene_road"]; ?>[/size][/td]<br>
        [tr][td][size=85][b]Время обнаружения трупа:[/b][/size][/td][td][size=85]<?php echo $_POST["tdb_date"]; ?>[/size][/td][td][size=85]<?php echo $_POST["tdb_time"]; ?>[/size][/td][/tr]<br>
        [tr][td][size=85][b]Время транспортировки трупа:[/b][/size][/td][td][size=85]<?php echo $_POST["btt_date"]; ?>[/size][/td][td][size=85]<?php echo $_POST["btt_time"]; ?>[/size][/td][/tr][/tab]<br>
        <br>
        [br][size=90][b]Комментарии судебно-медицинского эксперта:[/b][/size]<br>
        [warning][color=#000000][size=85]Дополнительные сведения, комментарии и обстоятельства, изложенные экспертом в ходе работы на месте преступления.[/size][/color][/warning]<br>
        [tab][tr][td][size=85][b]Осмотр тела, его положения, характера травм:[/b][/size][/td][td][size=85]<?php echo $_POST["comment_bodycheck"]; ?>[/size][/td][/tr]<br>
        [tr][td][size=85][b]Осмотр места преступления:[/b][/size][/td][td][size=85]<?php echo $_POST["comment_placecheck"]; ?>[/size][/td]<br>
        [tr][td][size=85][b]Иные обстоятельства:[/b][/size][/td][td][size=85]<?php echo $_POST["comment_other"]; ?>[/size][/td][/tr][/tab]<br>
        <br>
        [br][size=90][b]Фотографические материалы:[/b][/size]<br>
        [warning][color=#000000][size=85]Фотофиксация тела трупа  в исходном положении, произведенная экспертом на месте преступления.[/size][/color][/warning]<br>
        [spoiler]<?php echo $_POST["photo_links"]; ?>[/spoiler]<br>
        [br][right][size=85]<?php echo $_POST["sign"]; ?>[/size][/right]<br>
        [hr][/hr][size=85][center]© 2022 FARS. Forensic Science & Technical Division[/center][/size]
      </code>
    </div>
</body>
</html>