function decree() {
  var writeCode = document.getElementById('code');
// 
// 
// 
// ЁЁ
// 
// 
  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code>[textarea][box=gray][imgalign=left]https://i.imgur.com/2RmBjDn.png[/imgalign][imgalign=left]https://i.ibb.co/9G2qdtZ/150x150-PSD-1.png[/imgalign]<br>\
  [right][b][size=85]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFF`S DEPARTMENT<br>\
  200 MСDONALD STREET <br>\
  HALL OF JUSTICE<br>\
  LOS SANTOS, SA<br>\
  TEL. +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [/size][/b][/right][/box]<br>\
  [br]<br>\
  [center][b]CASE FILE "+document.getElementById('caseNo').value+" | "+document.getElementById('caseDate').value+"[/b][/center]<br>\
  [br]<br>\
  [center][b]БЮРО ВНУТРЕННИХ РАССЛЕДОВАНИЙ ПОСТАНОВЛЯЕТ[/b][/center]<br>\
  <br>\
  [size=90][list]"+document.getElementById('text1').value+"<br>\
  [list]"+document.getElementById('text2').value+"[/list]<br>\
  [list]"+document.getElementById('text3').value+"[/list]<br>\
  [*]"+document.getElementById('text4').value+"<br>\
  <br>\
  [b]Заключительные положения: [/b]<br>\
  Постановление вступает в силу с момента его публикации в публичном разделе Бюро внутренних расследований. Дело велось под руководством [i]сержанта-следователя Дэвида Асеведы[/i].[/list][/size]<br>\
  [size=80]*В случае, если лицо, являющееся субъектом или потерпевшим от правонарушения/преступления, не согласно с постановлением БЮРО ВНУТРЕННИХ РАССЛЕДОВАНИЙ, то данный факт можно оспорить в апелляционном порядке, написав претензию на имя: СЕРЖАНТА БЮРО ВНУТРЕННИХ РАССЛЕДОВАНИЙ - Дэвид Асеведа.[/size]</code>";
}