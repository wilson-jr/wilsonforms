function evidencebase() {
  var writeCode = document.getElementById('code');

  document.getElementById("exampleModal").classList.toggle("active");
  writeCode.innerHTML = "<code> <br>\
  [textarea][box=gray][imgalign=left]https://i.imgur.com/2RmBjDn.png[/imgalign][imgalign=left]https://i.ibb.co/9G2qdtZ/150x150-PSD-1.png[/imgalign]<br>\
  [right][b][size=85]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFF`S DEPARTMENT<br>\
  200 MСDONALD STREET <br>\
  HALL OF JUSTICE<br>\
  LOS SANTOS, SA<br>\
  TEL. +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [/size][/b][/right][/box]<br>\
  [br][/br]<br>\
  [divbox=gray][b][center][color=#FFFFFF]EVIDENCE BASE[/color][/center][/b][/divbox]<br>\
  [br][/br]<br>\
  [altspoiler='"+document.getElementById('task1_1').value+" | "+document.getElementById('task1_2').value+"']"+document.getElementById('task1_3').value+"[/altspoiler]<br>\
  [br][/br]<br>\
  [altspoiler='"+document.getElementById('task2_1').value+" | "+document.getElementById('task2_2').value+"']"+document.getElementById('task2_3').value+"[/altspoiler]<br>\
  [br][/br]<br>\
  [altspoiler='"+document.getElementById('task3_1').value+" | "+document.getElementById('task3_2').value+"']"+document.getElementById('task3_3').value+"[/altspoiler]<br>\
  [br][/br]<br>\
  [altspoiler='"+document.getElementById('task4_1').value+" | "+document.getElementById('task4_2').value+"']"+document.getElementById('task4_3').value+"[/altspoiler]<br>\
  [br][/br]<br>\
  [altspoiler='"+document.getElementById('task5_1').value+" | "+document.getElementById('task5_2').value+"']"+document.getElementById('task5_3').value+"[/altspoiler][/textarea]</code>";
}