function notification() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code> <br>\
  [textarea][box=gray][imgalign=left]https://i.ibb.co/9tjjB8S/150-150-1.png[/imgalign][imgalign=left]https://i.ibb.co/9G2qdtZ/150x150-PSD-1.png[/imgalign][right][size=90][b]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFF`S DEPARTMENT<br>\
  PROFESSIONAL STANDARTS DIVISION[/b]<br>\
  200 MСDONALD STREET<br>\
  HALL OF JUSTICE<br>\
  LOS SANTOS, SA<br>\
  TEL.: +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [b][u][i]lssd.org[/box][/i][/u][/b][/size][hr][/hr]<br>\
  <br>\
  <br>\
  [i][b]от:[/b] следователя "+document.getElementById('sledovatelName').value+" "+document.getElementById('sledovatelSurname').value+".<br>\
  [b]кому:[/b] "+document.getElementById('officerRank').value+" "+document.getElementById('officerName').value+" "+document.getElementById('officerSurname').value+".[/i]<br>\
  <br>\
  <br>\
  [center][b]УВЕДОМЛЕНИЕ[/b][/center]<br>\
  <br>\
  <br>\
  <br>\
  [justify]Уведомляем Вас о том, что Бюро Внутренних Расследований проводит разбирательство с вашим участием. Для получения дополнительной информации, свяжитесь с лейтенантом Бюро - Мэттью Айзеком.[/justify]<br>\
  <br>\
  <br>\
  [i]С уважением,<br>\
  "+document.getElementById('sledovatelRank').value+" "+document.getElementById('sledovatelName').value+" "+document.getElementById('sledovatelSurname').value+"[/i] [float=right][i]"+document.getElementById('sign').value+"[/i][/float][/textarea]<br>\
  </code>";
}
