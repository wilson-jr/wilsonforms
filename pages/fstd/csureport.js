function csureport() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code> \
  [float=left][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float] <br>\
  [float=right][size=85]Город Лос-Сантос, СА<br>\
  район Веспуччи, Сан-Андреас авеню<br>\
  Судебно-медицинская лаборатория<br>\
  +1 (212) 6789 807[/size][/float]<br>\
  [b][size=125][color=#004080]Los Santos Police Department[/color][/b][/size]<br>\
  [b][size=100][color=#004080]Forensic Analysis Report System[/color][/b][/size]<br>\
  <br>\
  [adp]FOR OFFICIAL USE ONLY[/adp][br]<br>\
  [br][center][borderb=black][size=125][b]CRIME SCENE INVESTIGATION NARRATIVE[/b][/size][/borderb][/center]<br>\
  [br][float=left][size=85][b]Ответственный эксперт[/b] [/size]<br>\
  [size=85]"+document.getElementById('forensicFullName').value+"[/size]<br>\
  <br>\
  [size=85][b]Для связи[/b] [/size]<br>\
  [size=85]"+document.getElementById('phoneNumber').value+"[/size][/float]<br>\
  <br>\
  [float=right][size=85][b]Ответственный офицер[/b] [/size]<br>\
  [center][size=85]"+document.getElementById('officerFullName').value+"[/size][/center]<br>\
  <br>\
  <br>\
  <br>\
  [center][size=85][b]No. отчёта[/b][/size][/center]<br>\
  [center][size=85]"+document.getElementById('reportNumber').value+"[/size][/center][/float]<br>\
  [br]<br>\
  [br]<br>\
  [br]<br>\
  [br]<br>\
  [center][borderb=black][size=125][b]DEAD BODY INSPECTION CARD[/b][/size][/borderb][/center]<br>\
  [br][size=90][b]Тип смерти:[/b][/size]<br>\
  [warning][color=#000000][size=85]Укажите тип инцидента, исходя из имеющихся в вашем распоряжении сведений, заменив обозначение (–) на (✓).[/size][/color][/warning]<br>\
  [tab][tr][td][size=85][b]Насильственная смерть[/b][/size][/td][td][size=85]"+document.getElementById('deathType_1').value+"[/size][/td][td][size=85][b]Несчастный случай[/b][/size][/td][td][size=85]"+document.getElementById('deathType_2').value+"[/size][/td][td][size=85][b]Подозрительная смерть[/b][/size][/td][td][size=85]"+document.getElementById('deathType_3').value+"[/size][/td][td][size=85][b]Инцидент, связанный с преступной группировкой[/b][/size][/td][td][size=85]"+document.getElementById('deathType_4').value+"[/size][/td][/tr][/tab]<br>\
  <br>\
  [br][size=90][b]Характер смерти:[/b][/size]<br>\
  [warning][color=#000000][size=85]Классификация характера смерти по установленным в ходе осмотра предварительным обстоятельствам. Отметьте (✓).[/size][/color][/warning]<br>\
  [tab][tr][td][size=85][b]Несчастный случай[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_1').value+"[/size][/td][td][size=85][b]Суицид[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_2').value+"[/size][/td][td][size=85][b]Убийство[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_3').value+"[/size][/td][td][size=85][b]Естественная смерть[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_4').value+"[/size][/td][td][size=85][b]Не установлен[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_5').value+"[/size][/td][td][size=85][b]Расследуется[/b][/size][/td][td][size=85]"+document.getElementById('deathMethod_6').value+"[/size][/td][/tr][/tab]<br>\
  <br>\
  [br][size=90][b]Детали и установленные обстоятельства:[/b][/size]<br>\
  [warning][color=#000000][size=85]Установленные в ходе осмотра места тела трупа обстоятельства, связанные с обстоятельствами наступления смерти лица.[/size][/color][/warning]<br>\
  [tab][tr][td][size=85][b]Личные данные жертвы:[/b][/size][/td][td][size=85]"+document.getElementById('victimFullName').value+"[/size][/td][td][size=85]"+document.getElementById('victimAge').value+"[/size][/td][td][size=85]"+document.getElementById('victimSex').value+"[/size][/td][td][size=85]"+document.getElementById('victimRace').value+"[/size][/td][/tr]<br>\
  [tr][td][size=85][b]Место обнаружения трупа:[/b][/size][/td][td][size=85]"+document.getElementById('sceneCounty').value+"[/size][/td][td][size=85]"+document.getElementById('sceneArea').value+"[/size][/td][td][size=85]"+document.getElementById('sceneRoad').value+"[/size][/td]<br>\
  [tr][td][size=85][b]Время обнаружения трупа:[/b][/size][/td][td][size=85]"+document.getElementById('bodyFind_date').value+"[/size][/td][td][size=85]"+document.getElementById('bodyFind_time').value+"[/size][/td][/tr]<br>\
  [tr][td][size=85][b]Время транспортировки трупа:[/b][/size][/td][td][size=85]"+document.getElementById('bodyTransportation_date').value+"[/size][/td][td][size=85]"+document.getElementById('bodyTransportation_time').value+"[/size][/td][/tr][/tab]<br>\
  <br>\
  [br][size=90][b]Комментарии судебно-медицинского эксперта:[/b][/size]<br>\
  [warning][color=#000000][size=85]Дополнительные сведения, комментарии и обстоятельства, изложенные экспертом в ходе работы на месте преступления.[/size][/color][/warning]<br>\
  [tab][tr][td][size=85][b]Осмотр тела, его положения, характера травм:[/b][/size][/td][td][size=85]"+document.getElementById('commentObserveBody').value+"[/size][/td][/tr]<br>\
  [tr][td][size=85][b]Осмотр места преступления:[/b][/size][/td][td][size=85]"+document.getElementById('commentObservePlace').value+"[/size][/td]<br>\
  [tr][td][size=85][b]Иные обстоятельства:[/b][/size][/td][td][size=85]"+document.getElementById('commentObserveOther').value+"[/size][/td][/tr][/tab]<br>\
  <br>\
  [br][size=90][b]Фотографические материалы:[/b][/size]<br>\
  [warning][color=#000000][size=85]Фотофиксация тела трупа  в исходном положении, произведенная экспертом на месте преступления.[/size][/color][/warning]<br>\
  [spoiler]"+document.getElementById('photo').value+"[/spoiler]<br>\
  [br][right][size=85][img]"+document.getElementById('sign').value+"[/img][/size][/right]<br>\
  [hr][/hr][size=85][center]© 2022 FARS. Forensic Science & Technical Division[/center][/size]<br>\</code>";
}