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
</head>
<body class="wrapper">
  <style>
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */
    body { font-family: 'Roboto', sans-serif; }
    .wrapper { max-width: 1000px; position: relative; margin: 50px auto;}
    .content { border: 1px solid black; padding: 5px;}
  </style>
  <!-- <input type="text" class="form-control" placeholder="" name="" /> -->
  <form action="csureport_get.php" method="post">
    <div class="content">
      <div style="float:left;padding:0 10px">
        <img src="https://www.upload.ee/image/13524422/FSTD.png" class="postimage" alt="Логотип">
      </div>
      <div style="float:right;padding:0 10px">
        <span style="font-size:85%;line-height:116%">Город Лос-Сантос, СА<br>район Веспуччи, Сан-Андреас авеню<br>Судебно-медицинская лаборатория<br>+1 (212) 6789 807</span>
      </div>
      <strong class="text-strong"><span style="font-size:125%;line-height:116%"><span style="color:#004080">Los Santos Police Department</span></span></strong><br>
      <strong class="text-strong"><span style="font-size:100%;line-height:116%"><span style="color:#004080">Forensic Analysis Report System</span></span></strong><br>
      <br>
      <ooc style="border:1px solid grey;padding:5px">FOR OFFICIAL USE ONLY</ooc><br><br>
      <br>
      <div style="text-align:center">
        <div style="border-bottom: 1px solid black; padding:1px">
          <span style="font-size:125%;line-height:116%"><strong class="text-strong">CRIME SCENE INVESTIGATION NARRATIVE</strong></span>
        </div>
      </div>
      <br>
      <div style="float:left;padding:0 10px">
        <span style="font-size:85%;line-height:116%"><strong class="text-strong">Ответственный эксперт</strong> </span><br>
        <span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="ДОЛЖНОСТЬ ИМЯ ФАМИЛИЯ" id="rns" name="rns" /></span><br>
        <br>
        <span style="font-size:85%;line-height:116%"><strong class="text-strong">Для связи</strong> </span><br>
        <span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="ВАШ НОМЕР ТЕЛЕФОНА" id="pn" name="pn" /></span></div>
        <div style="float:right;padding:0 10px">
          <span style="font-size:85%;line-height:116%"><strong class="text-strong">Ответственный офицер</strong> </span>
          <div style="text-align:center"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="ДОЛЖНОСТЬ ИМЯ ФАМИЛИЯ" id="orns" name="orns" /></span></div>
          <br>
          <div style="text-align:center"><span style="font-size:85%;line-height:116%"><strong class="text-strong">No. отчёта</strong></span></div>
          <div style="text-align:center"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="N 00X/MM-DD" id="rn" name="rn" /></span></div></div>
          <br><br>
          <br><br>
          <br><br>
          <br>
          <div style="text-align:center">
            <div style="border-bottom:1px solid black;padding:1px">
              <span style="font-size:125%;line-height:116%"><strong class="text-strong">DEAD BODY INSPECTION CARD</strong></span>
            </div>
          </div>
          <br>
          <span style="font-size:90%;line-height:116%"><strong class="text-strong">Тип смерти:</strong></span>
          <div style="padding:5px;background-color:#ecd5d8;color:#bc2a4d">
            <span>
              <span style="color:#000000">
                <span style="font-size:85%;line-height:116%">Укажите тип инцидента, исходя из имеющихся в вашем распоряжении сведений, заменив обозначение (–) на (✓).</span>
              </span>
            </span>
          </div>
          <table border="0">
            <tbody>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Насильственная смерть</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathType_vd" name="deathType_vd" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Несчастный случай</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathType_acc" name="deathType_acc" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Подозрительная смерть</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathType_sd" name="deathType_sd" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Инцидент, связанный с преступной группировкой</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathType_iicg" name="deathType_iicg" /></span></td>
              </tr>
            </tbody>
          </table>
          <br><span style="font-size:90%;line-height:116%"><strong class="text-strong">Характер смерти:</strong></span>
          <div style="padding:5px;background-color:#ecd5d8;color:#bc2a4d"><span><span style="color:#000000"><span style="font-size:85%;line-height:116%">Классификация характера смерти по установленным в ходе осмотра предварительным обстоятельствам. Отметьте (✓).</span></span></span></div>
          <table border="0">
            <tbody>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;">
                <span style="font-size:85%;line-height:116%"><strong class="text-strong">Несчастный случай</strong></span>
                </td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_acc" name="deathManner_acc" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Суицид</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_suicide" name="deathManner_suicide" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Убийство</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_homicide" name="deathManner_homicide" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Естественная смерть</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_nd" name="deathManner_nd" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Не установлен</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_notinstalled" name="deathManner_notinstalled" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Расследуется</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" value="–" placeholder="–" id="deathManner_underinvestigation" name="deathManner_underinvestigation" /></span></td>
              </tr>
            </tbody>
          </table>
          <br>
          <span style="font-size:90%;line-height:116%"><strong class="text-strong">Детали и установленные обстоятельства:</strong></span>
          <div style="padding:5px;background-color:#ecd5d8;color:#bc2a4d">
            <span>
              <span style="color:#000000"><span style="font-size:85%;line-height:116%">Установленные в ходе осмотра места тела трупа обстоятельства, связанные с обстоятельствами наступления смерти лица.</span></span></span>
          </div>
          <table border="0">
            <tbody>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Личные данные жертвы:</strong></span></td><td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить Имя Фамилия" id="victimsID_namesurname" name="victimsID_namesurname" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить возраст" id="victimsID_age" name="victimsID_age" /></span></td><td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить пол" id="victimsID_sex" name="victimsID_sex" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить расу" id="victimsID_race" name="victimsID_race" /></span></td>
              </tr>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Место обнаружения трупа:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;">
                  <span style="font-size:85%;line-height:116%">
                    <select class="form-select" name="scene_place">
                      <option selected disabled>Выберите место</option>
                      <option value="Лос-Сантос">Лос-Сантос</option>
                      <option value="Палето-Бэй">Палето-Бэй</option>
                      <option value="Сэнди-Шорс">Сэнди-Шорс</option>
                      <option value="Округ Боун">Округ Боун</option>
                    </select>
                  </span>
                </td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Район" name="scene_area" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Трасса / Дорога" name="scene_road" /></span></td>
              </tr>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Время обнаружения трупа:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="МММ ДД, ГГГ" name="tdb_date" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="ЧЧ:ММ АМ/ПМ" name="tdb_time" /></span></td>
              </tr>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Время транспортировки трупа:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="МММ ДД, ГГГ" name="btt_date" /></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="ЧЧ:ММ АМ/ПМ" name="btt_time" /></span></td>
              </tr>
            </tbody>
          </table>
          <br>
          <span style="font-size:90%;line-height:116%"><strong class="text-strong">Комментарии судебно-медицинского эксперта:</strong></span>
          <div style="padding:5px;background-color:#ecd5d8;color:#bc2a4d">
            <span><span style="color:#000000"><span style="font-size:85%;line-height:116%">Дополнительные сведения, комментарии и обстоятельства, изложенные экспертом в ходе работы на месте преступления.</span></span></span>
          </div>
          <table border="0">
            <tbody>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Осмотр тела, его положения, характера травм:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить" name="comment_bodycheck" /></span></td>
              </tr>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Осмотр места преступления:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить" name="comment_placecheck" /></span></td>
              </tr>
              <tr>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><strong class="text-strong">Иные обстоятельства:</strong></span></td>
                <td style="padding:5px; border: 1px solid #dfdfdf; vertical-align: top;"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Заполнить" name="comment_other" /></span></td>
              </tr>
            </tbody>
          </table>
          <br><span style="font-size:90%;line-height:116%"><strong class="text-strong">Фотографические материалы:</strong></span>
          <div style="padding:5px;background-color:#ecd5d8;color:#bc2a4d">
            <span><span style="color:#000000"><span style="font-size:85%;line-height:116%">Фотофиксация тела трупа в исходном положении, произведенная экспертом на месте преступления.</span></span></span>
          </div>
          <div style="padding:3px;background-color:#fff;border:1px solid #d8d8d8;font-size:1em">
          <div style="text-transform:uppercase;border-bottom:1px solid #ccc;margin-bottom:3px;font-size:0.8em;font-weight:bold;display:block">
            <span onclick="if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') {  this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerHTML = '<b>SPOILER: </b><a href=\'#\' onClick=\'return false;\'>hide</a>'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerHTML = '<b>SPOILER: </b><a href=\'#\' onClick=\'return false;\'>show</a>'; }"><b>SPOILER: </b><a href="#" onclick="return false;">show</a></span>
          </div>
          <div class="quotecontent">
            <div style="display: none;"><input type="text" class="form-control" placeholder="Фото тела и скриншот /damages или /cdamages" name="photo_links" /></div>
          </div>
        </div>
        <br>
        <div align="right"><span style="font-size:85%;line-height:116%"><input type="text" class="form-control" placeholder="Подпись эксперта" name="sign" /></span></div>
        <div style="width:100%;border-bottom:1px solid silver"> </div>
        <span style="font-size:85%;line-height:116%"></span>
        <div style="text-align:center"><span style="font-size:85%;line-height:116%">© 2022 FARS. Forensic Science &amp; Technical Division</span></div>
      </div>
    </div><br>
    <button type="submit" class="btn btn-primary container-fluid" >Button</button>
  </form>
</body>
</html>