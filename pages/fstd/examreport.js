function examreport() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code> \
    [float=left][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float]<br> \
    [float=right][size=85]Город Лос-Сантос, СА<br> \
    район Веспуччи, Сан-Андреас авеню<br> \
    Криминалистическая лаборатория<br> \
    +1 (212) 6789 807[/size][/float]<br> \
    [b][size=125][color=#004080]Los Santos Police Department[/color][/b][/size]<br> \
    [b][size=100][color=#004080]Forensic Analysis Report System[/color][/b][/size]<br> \
    <br>\
    [adp]FOR OFFICIAL USE ONLY[/adp]<br> \
    <br>\
    <br>\
    [float=left][size=85][b]Ответственный специалист[/b] [/size]<br> \
    [size=85]"+document.getElementById('fullName').value+"[/size]<br> \
    <br>\
    [size=85][b]Для связи[/b] [/size]<br> \
    [size=85]"+document.getElementById('phoneNumber').value+"[/size][/float]<br> \
    <br>\
    [float=right][size=85][b]Тип инцидента[/b] [/size]<br> \
    [center][size=85]"+document.getElementById('incidentType').value+"[/size][/center]<br> \
    <br>\
    <br>\
    <br>\
    [center][size=85][b]No. отчёта[/b][/size][/center]<br> \
    [center][size=85]"+document.getElementById('reportNumber').value+"[/size][/center][/float]<br> \
    [br][/br]<br> \
    [br][/br]<br> \
    [br][/br]<br> \
    [br][/br]<br> \
    [center][borderb=black][size=125][b]EXAMINATION REPORT[/b][/size][/borderb][/center] <br>\
    [float=left]"+document.getElementById('codificator').value+"[/float][float=right][size=85]Запрошено: "+document.getElementById('requestDate').value+" <br>\
    Возвращено: "+document.getElementById('returnDate').value+"[/size][/float] <br>\
    [br][/br][br][/br][size=90][b]На исследование представлено:[/b][/size] [size=85]"+document.getElementById('submitted').value+"[/size] <br>\
    [size=90]Применяются следующие [b]методы анализа[/b]: "+document.getElementById('methods').value+"[/size] <br>\
    \
    [size=90][b]Результаты и заключение:[/b][/size] <br>\
    [size=85]"+document.getElementById('results').value+" <br>\
    <br>\
    <br>\
    [right][size=85][img]"+document.getElementById('sign').value+"[/img][/size][/right] \
    [hr][/hr][size=85][center]© 2022 FARS. Forensic Science & Technical Division[/center][/size]</code>";
}