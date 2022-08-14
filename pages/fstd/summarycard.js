function summarycard() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code> \
    [textarea][float=right][size=80][i]Los Santons Police Department<br> \
    Forensic Science & Tech Division<br> \
    228 Palomino Ave., Vespucci<br> \
    1' Police Headquarters[/i][/size][/float]<br> \
    [float=left][img]https://www.upload.ee/image/13524422/FSTD.png[/img][/float]<br> \
    <br> \
    <br> \
    <br> \
    [center][b][size=125]SUMMARY CARD[/size]<br> \
    [size=90][b]"+document.getElementById('surname').value+", "+document.getElementById('name').value+"[/b][/size][/center]<br> \
    [br]<br> \
    [hr]<br> \
    [br]<br> \
    [float=right][img]https://www.upload.ee/image/14044683/mugshot-personal-file.png[/img][br]<br> \
    [br][center]"+document.getElementById('sign').value+"[/center][/float]<br> \
    [float=left][b]Должность:[/b] "+document.getElementById('position').value+"[/float][br]<br> \
    [float=left][b]Подразделение:[/b] "+document.getElementById('division').value+"[/float][br]<br> \
    [float=left][b]Присвоенная квалификация:[/b] "+document.getElementById('qualification').value+"[/float][br]<br> \
    [float=left][b]Уровень доступа:[/b] "+document.getElementById('levelaccess').value+"[/float][br]<br> \
    [br]<br> \
    [float=left][b]Пол:[/b] "+document.getElementById('sex').value+"[/float][br]<br> \
    [float=left][b]Возраст:[/b] "+document.getElementById('age').value+"[/float][br]<br> \
    [float=left][b]Место рождения:[/b] "+document.getElementById('placeofbirth').value+"[/float][br]<br> \
    [float=left][b]Семейный статус:[/b] "+document.getElementById('status').value+"[/float][br]<br> \
    [float=left][b]Ближ. родственник:[/b] "+document.getElementById('cousin').value+"[/float][br]<br> \
    [br]<br> \
    [float=left][b]Эл. адрес:[/b] "+document.getElementById('email').value+"[/float][br]<br> \
    [float=left][b]Контактный номер:[/b] "+document.getElementById('number').value+"[/float][br]<br> \
    [br]<br> \
    [hr]<br> \
    [br][b][center]© 2022 FSTD. Los Santos Police Department.[/center][/b][/textarea]</code>";
}