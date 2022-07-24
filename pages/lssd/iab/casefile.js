function casefile() {
  var writeCode = document.getElementById('code');
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
[br][/br]<br>\
[b][center]CASE "+document.getElementById('caseNo').value+"[/center][/b]<br>\
<br>\
[b]СТАТУС:[/b] "+document.getElementById('caseStatus').value+"<br>\
[b]БЫЛ ОТКРЫТ: "+document.getElementById('caseDateStart').value+"[/b]<br>\
[b]БЫЛ ЗАКРЫТ: "+document.getElementById('caseDateEnd').value+"[/b]<br>\
<br>\
[b]ВЕДУЩИЙ СЛЕДОВАТЕЛЬ:[/b]<br>\
[list][*]"+document.getElementById('memberStaff').value+"[/list]<br>\
<br>\
[b]СОСТАВ СЛЕДОВАТЕЛЕЙ ПО ДЕЛУ:[/b]<br>\
[list][*]"+document.getElementById('memberField').value+"[/list]<br>\
[br][/br]<br>\
[divbox=gray][b][center][color=#FFFFFF]MAIN DESCRIPTION[/color][/center][/b][/divbox]<br>\
[br][/br]<br>\
"+document.getElementById('caseInfo').value+"<br>\
[br][/br]<br>\
[divbox=gray][b][center][color=#FFFFFF]MEMBERS[/color][/center][/b][/divbox]<br>\
[br][/br]<br>\
[b]ИМЯ И ФАМИЛИЯ:[/b] "+document.getElementById('memberName').value+"<br>\
[b]ЗВАНИЕ:[/b] "+document.getElementById('memberSurname').value+"<br>\
[b]НОМЕР ТЕЛЕФОНА:[/b] "+document.getElementById('memberPhone').value+"<br>\
[b]ВОЗРАСТ:[/b] "+document.getElementById('memberAge').value+"<br>\
[b]АДРЕС ПРОЖИВАНИЯ:[/b] "+document.getElementById('memberAddress').value+"<br>\
[b]СТАТУС:[/b] "+document.getElementById('memberStatus').value+"<br>\
[b]КЛАССИФИКАЦИЯ НАРУШЕНИЯ:[/b] "+document.getElementById('caseClassification').value+"<br>\
[br][/br]<br>\
[divbox=gray][b][center][color=#FFFFFF]ATTACHMENT[/color][/center][/b][/divbox]<br>\
[br][/br]<br>\
[list][*]Материалы к делу:<br>\
[br][/br]<br>\
[altspoiler='Материалы к делу']Фото/Записи[/altspoiler][/list]<br>\
[br]<br>\
[size=95][divbox=gray][b][center][color=#FFFFFF]LSSD. Internal Affairs Bureau. 2022.[/color][/center][/b][/divbox][/size][/textarea]</code>";
}