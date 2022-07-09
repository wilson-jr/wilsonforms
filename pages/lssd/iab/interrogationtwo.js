function interrogation() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code>[textarea][box=gray][imgalign=left]https://i.imgur.com/2RmBjDn.png[/imgalign][imgalign=left]https://i.ibb.co/9G2qdtZ/150x150-PSD-1.png[/imgalign]<br>\
  [right][b][size=85]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFFS DEPARTMENT<br>\
  200 MСDONALD STREET <br>\
  HALL OF JUSTICE<br>\
  LOS SANTOS, SA<br>\
  TEL. +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [/size][/b][/right][/box]<br>\
  [br]<br>\
  [center][size=100][b]ADDITIONAL REPORT[/b][/size][/center][br]<br>\
  [size=90]Стенограмма допроса "+document.getElementById('1-1').value+" "+document.getElementById('1-2').value+" от "+document.getElementById('1-3').value+", выполненная специалистом департамента шерифа Т. Конуэй с электронного носителя. Адвокат "+document.getElementById('1-4').value+" при допросе.<br>\
  <br>\
  [b]Хронометраж допроса:[/b]<br>\
  <br>\
  Начало допроса - "+document.getElementById('2-1').value+". <br>\
  Окончания допроса - "+document.getElementById('2-2').value+".<br>\
  <br>\
  <br>\
  [altspoiler=Стенограмма допроса.]Чатлог допроса.[/altspoiler]<br>\
  [br][b]Приложение:[/b]<br>\
  [br]Информационный бланк о правах, предоставляемых гражданскому лицу при допросе.<br>\
  [br][altspoiler=Бланк.]<br>\
  [background=#000000][textarea][box=gray][imgalign=left]https://i.imgur.com/2RmBjDn.png[/imgalign]<br>\
  [right][b][size=85]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFFS DEPARTMENT<br>\
  200 MСDONALD STREET <br>\
  HALL OF JUSTICE<br>\
  LOS SANTOS, SA<br>\
  TEL. +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [/size][/b][/right][/box]<br>\
  [size=120][center][b]Bill of Rights of the Interrogated[/b][/size][/center]<br>\
  [br]<br>\
  [hr][/hr]<br>\
  [br][/br][center][b]Правило Миранды[/b][/center]<br>\
  <br>\
  [br][size=90]Вы имеете право хранить молчание. Если вы откажетесь от права хранить молчание, все, что вы скажете, может быть использовано против вас в суде. Вы имеете право на адвоката и на присутствие адвоката во время допроса. Если вы не можете позволить себе адвоката, он будет предоставлен вам бесплатно. Во время любого допроса вы можете в любое время решить воспользоваться этими правами, не отвечать на вопросы и не делать никаких заявлений. [/size]<br>\
  [br][/br]<br>\
  [hr][/hr][br][/br][size=75][right][b]"+document.getElementById('4-1').value+"<br>\
  [i]"+document.getElementById('4-2').value+"[/i][/b][/right][/size][/altspoiler]</code>";
}