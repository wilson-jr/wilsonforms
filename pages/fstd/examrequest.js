function examrequest() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code>\
    [textarea][float=left][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float] <br>\
    [float=right][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float] <br>\
    [b][size=125][color=#004080]Los Santos Police Department[/color][/b][hr][/hr] <br>\
    [b][size=100][color=#004080]Forensic Analysis Report System[/color][/b] <br>\
    [color=#FFFFFF]![/color] <br>\
    Запрос на проведение криминалистического исследования <br>\
    [/textarea][textarea][tab][tr][td][b][size=85]Дата запроса:[/size][/b][/td] <br>\
    [td][size=85]"+document.getElementById('requestDate').value+"[/size][/td] <br>\
    [td][b][size=85]Код экспертизы:[/size][/b][/td] <br>\
    [td][size=85][url=https://lspd.gta-world.ru/viewtopic.php?t=6503][color=#0040BF]"+document.getElementById('codificator').value+"[/color][/url][/size][/td] <br>\
    [/tr] <br>\
    [tr][td][b][size=85]Ответственное подразделение:[/size][/b][/td] <br>\
    [td][size=85]"+document.getElementById('division').value+"[/size][/td] <br>\
    [td][b][size=85]Номер дела:[/size][/b][/td] <br>\
    [td][size=85]"+document.getElementById('caseNumber').value+"[/size][/td][/tr] <br>\
    [tr][td][b][size=85]Заявитель:[/size][/b][/td] <br>\
    [td][size=85]"+document.getElementById('fullName').value+"[/size][/td] <br>\
    [td][b][size=85]Должность:[/size][/b][/td] <br>\
    [td][size=85]"+document.getElementById('position').value+"[/size][/td][/tr][/tab][/textarea][textarea] <br>\
    [size=90][b]Тип инцидента:[/b][/size] <br>\
    [warning][color=#000000][size=85]Укажите тип инцидента, исходя из имеющихся в вашем распоряжении сведений, заменив обозначение (–) на (✓).[/size][/color][/warning] <br>\
    [tab][tr][td][size=85]Проступок[/size][/td][td][size=85]"+document.getElementById('incidentType_1').value+"[/size][/td][td][size=85]Преступление[/size][/td][td][size=85]"+document.getElementById('incidentType_2').value+"[/size][/td][td][size=85]Несчастный случай[/size][/td][td][size=85]"+document.getElementById('incidentType_3').value+"[/size][/td][td][size=85]Инцидент, связанный с преступной группировкой[/size][/td][td][size=85]"+document.getElementById('incidentType_4').value+"[/size][/td][td][size=85]Особый случай[/size][/td][td][size=85]"+document.getElementById('incidentType_5').value+"[/size][/td][/tr][/tab] <br>\
    [color=#FFFFFF]![/color] <br>\
    [size=90][b]Предмет экспертизы:[/b][/size][warning][size=85][color=#000000]Предоставьте лаборатории данные о предмете исследования.[/color][/size][/warning] <br>\
    [tab][tr][td][size=85][b]Количество:[/b][/size][/td][td][size=85]"+document.getElementById('amount').value+"[/size][/td][/tr] <br>\
    [tr][td][size=85][b]Место изъятия:[/b][/size][/td][td][size=85]"+document.getElementById('area').value+", "+document.getElementById('street').value+", "+document.getElementById('number').value+"[/size][/td][/tr] <br>\
    [tr][td][size=85][b]Наименование и описание:[/b][/size][/td][td][size=85]"+document.getElementById('desc').value+"[/size][/td][/tr][/tab] <br>\
    [color=#FFFFFF]![/color] <br>\
    [size=90][b]Задача экспертизы:[/b][/size] <br>\
    [warning][color=#000000][size=85]Укажите постановленные перед экспертом вопросы.[/size][/color][/warning] <br>\
    [size=85]"+document.getElementById('task_1').value+" <br>\
    "+document.getElementById('task_2').value+"<br>\
    "+document.getElementById('task_3').value+"<br>\
    "+document.getElementById('task_4').value+"<br>\
    "+document.getElementById('task_5').value+"[/size][/textarea][textarea][size=85][✓] Я подтверждаю, что поданный мною объект на исследование был изъят и отправлен на исследование законным путём без нарушения базового протокола и прав объектов правовых отношений; объект исследования не был повреждён или видоизменён любым образом с момента его изъятия. Отмечаю, что информация об описании объекта строится исключительно на моих собственных наблюдениях.[/size][hr][/hr][size=85][center]© 2022 FARS. Los Santos Police Department.[/center][/size][/textarea] <br>\
    [br][/br] <br>\
    [warning][color=#000000][size=85](( ООС-основания для экспертизы ))[/size][/color][/warning] <br>\
    [spoiler]"+document.getElementById('ooc').value+"[/spoiler]</code>";
}
