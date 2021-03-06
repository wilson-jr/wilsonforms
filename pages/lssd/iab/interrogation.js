function interrogation() {
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
  [br]<br>\
  [center][size=100][b]ADDITIONAL REPORT[/b][/size][/center][br]<br>\
  [size=90]Стенограмма допроса "+document.getElementById('1-1').value+" "+document.getElementById('1-2').value+" от "+document.getElementById('1-3').value+", выполненная специалистом департамента шерифа Т. Конуэй с электронного носителя. Адвокат и представитель "+document.getElementById('1-4').value+" при допросе.<br>\
  <br>\
  [b]Хронометраж допроса:[/b]<br>\
  <br>\
  Начало допроса - "+document.getElementById('2-1').value+". <br>\
  Окончания допроса - "+document.getElementById('2-2').value+".<br>\
  <br>\
  <br>\
  <br>\
  [altspoiler=Стенограмма допроса.]"+document.getElementById('3').value+".[/altspoiler]<br>\
  [br][b]Приложение:[/b]<br>\
  [br]Билль о правах, подписанный звание Имя Фамилия после ознакомления перед началом допроса.<br>\
  [br][altspoiler=Бланк.]<br>\
  [background=#000000][textarea][box=gray][imgalign=left]https://i.imgur.com/2RmBjDn.png[/imgalign]<br>\
  [right][b][size=85]INTERNAL AFFAIRS BUREAU<br>\
  LOS SANTOS COUNTY SHERIFF`S DEPARTMENT<br>\
  LSSD HQ<br>\
  200 MСDONALD STREET <br>\
  LOS SANTOS, SA<br>\
  TEL. +1 212 8934371<br>\
  FAX: +1 212 8933165<br>\
  [/size][/b][/right][/box]<br>\
  [size=120][center][b]Bill of Rights of the Interrogated[/b][/size][/center]<br>\
  [br]<br>\
  [hr][/hr]<br>\
  [br][/br][center][b]Правило Гэррити[/b][/center]<br>\
  <br>\
  [br][size=90]Вас просят предоставить информацию в рамках внутреннего и / или административного расследования. Это добровольное собеседование, и вам не нужно отвечать на вопросы, если ваши ответы могут повлечь за собой причастность к преступлению. К вам не будут применены дисциплинарные меры только за отказ отвечать на вопросы. Однако доказательная сила вашего молчания может рассматриваться в административном производстве как часть фактов, связанных с вашим делом. Любое заявление, которое вы решите предоставить, может быть использовано в качестве доказательства в уголовном и / или административном производстве.[/size]<br>\
  [br][/br]<br>\
  [center][b]Общие права сотрудников <br>\
  правоохранительных ведомств[/b][/center]<br>\
  <br>\
  [size=85][list][*]Сотрудники правоохранительных органов, за исключением случаев, когда они находятся при исполнении служебных обязанностей или действуют в официальном качестве, имеют право заниматься политической деятельностью или баллотироваться на выборную должность.<br>\
  [*]Сотрудники правоохранительных органов, если ожидается дисциплинарное взыскание, должны быть уведомлены о расследовании, характере предполагаемого нарушения, а также о результатах расследования и рекомендациях, сделанных следователями вышестоящему руководству.<br>\
  [*]Допрос сотрудника правоохранительных органов должен проводиться в течение разумного периода времени и предпочтительно во время его дежурства, если только не возникают неотложные обстоятельства.<br>\
  Допрос сотрудника правоохранительных органов должен проводиться в офисах тех, кто проводит расследование, или в месте, где сотрудник подчиняется работе, если только сотрудник не согласится на другое место.<br>\
  [*]Сотрудники правоохранительных органов будут допрошены одним следователем, и ему или ей должны быть сообщены имя, звание и должность сотрудника, проводящего расследование.<br>\
  [*]Сотрудники правоохранительных органов, находящиеся под следствием, имеют право на присутствие на допросе адвоката или любого другого лица по своему выбору.<br>\
  [*]Сотрудникам правоохранительных органов нельзя угрожать, подвергать преследованиям или обещать вознаграждение, чтобы побудить их ответить на какой-либо вопрос.<br>\
  [*]Сотрудники правоохранительных органов имеют право на слушание с предварительным уведомлением о дате, доступ к стенограммам и другим соответствующим документам и доказательствам, полученным в ходе слушания, а также на представительство адвоката или другого представителя, не являющегося адвокатом, на слушании.<br>\
  [*]Сотрудники правоохранительных органов должны иметь возможность прокомментировать в письменной форме любые неблагоприятные материалы, размещенные в его или ее личном деле.<br>\
  [*]Сотрудники правоохранительных органов не могут подвергаться репрессиям за осуществление этих или любых других прав в соответствии с федеральным законодательством или законодательством штата.[/list][/size] <br>\
  [br][/br]<br>\
  [hr][/hr][br][/br][size=75][right][b]"+document.getElementById('4-1').value+"<br>\
  [i]"+document.getElementById('4-2').value+"[/i][/b][/right][/size][/altspoiler]</code>";
}