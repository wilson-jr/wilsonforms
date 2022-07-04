function supervisornotification() {
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
  [b]кому:[/b] "+document.getElementById('officer1Rank').value+" "+document.getElementById('officerName1').value+" "+document.getElementById('officerSurname1').value+".[/i]<br>\
  <br>\
  <br>\
  [center][b]УВЕДОМЛЕНИЕ[/b][/center]<br>\
  <br>\
  <br>\
  <br>\
  [justify]В связи с ведущимся в отношении вашего подчиненного, "+document.getElementById('officer2Full').value+", расследования по внутреннему делу, направляю вам запрос о предоставлении в адрес бюро профессиональных стандартов характеристики за период службы.<br>\
  <br>\
  <br>\
  Прошу направить характеристику по указанному почтовому адресу в пятидневный срок. Для получения дополнительной информации, свяжитесь с сержантом Бюро - Дэвидом Асеведой.[/justify]<br><br>\
  <br>\
  <br>\
  [br]С уважением, [i]"+document.getElementById('sledovatelName').value+" "+document.getElementById('sledovatelSurname').value+"[/i].[float=right][i]"+document.getElementById('sign').value+"[/i][/float][/textarea]<br>\
  </code>";
}
