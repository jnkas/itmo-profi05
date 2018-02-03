// Объявляем переменные
tbl = "";       //таблица с пятнашками
mT = 0;         //размер таблицы
dn = false;     //статус выполнения
tmS = 0;        //время в игре
nMove = 0;    //число ходов

var a = Math.round(Math.random()*7);
var image = new Array();
  image[0] = "img/7chudes1.jpg";
  image[1] = "img/7chudes2.jpg";
  image[2] = "img/7chudes3.jpg";
  image[3] = "img/7chudes4.jpg";
  image[4] = "img/7chudes5.jpg";
  image[5] = "img/7chudes6.jpg";
  image[6] = "img/7chudes7.jpg";

var chudo = {
  name: ["Висячие сады Семирамиды","Пирамида фараона Хеопса","Храм Артемиды в Эфесе","Статуя Зевса в Олимпии","Мавзолей в Галикарнасе","Александрийский маяк","Колосс Родосский"],
  desc: ["Здесь должно быть описание чуда света 1", "2...", "3...", "4...", "5...", "6...", "7..."]
  };  

// Рисуем таблицу 4 х 4
function mkTbl(tdSizeH, tdSizeW, n) {
  mT = n;
  td = "<td style = 'background-color:lightyellow; width:" + tdSizeW + "; height:" + tdSizeH + "'";
  td += " onmouseover = 'mkCrsr(this)' onclick = 'mvFg(this)'></td>";
  tHdr = "<table id = 'tbl' style = 'background-color:red; cursor:pointer'; border = 1px";
  document.write(tHdr);
  for (i = 0; i < mT; i++) {
    document.write("<tr>");
    for (j = 0; j < mT; j++) {
      document.write(td);
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

// Начало игры и заполнение таблицы числами в случайном порядке
function GameStart() {
  var tblCell = document.getElementsByTagName('td');
  for (var i = 0; i < tblCell.length; i++) {
    tblCell[i].style.background = 'lightyellow';
    tblCell[i].style.opacity = 1;
    tblCell[i].style.color = 'black';
  }
  dn = false;
  nMove = 0;
  dt = new Date();
  tmS = dt.getTime();   //время начала игры
  fL = mT * mT;         // mT - размер заполняемой таблицы
  arrF = new Array(fL); // Массив генерируемых целых чисел
  arrF2 = new Array(fL);  // Массив проверки генерируемых целых чисел
  for (k = 0; k < fL; k ++) {
    arrF[k] = 0;
    arrF2[k] = true;    // Элемент arrF2[k] равен false, если число k уже имеется в массиве arrF
  }
  kL = kL2 = 0;
  while (kL < fL && kL2++ < 10000) {    // Цикл заполнения массива arrF. Число итераций не более 10000
    k = Math.floor(Math.random() * (fL + 1));   // Получаем целое случайное число из диапазона [1, fL]
    if (k > 0 && arrF2[k - 1]) {
      arrF2[k - 1] = false;
      arrF[kL] = k;
      kL++;
    }
  }
  kL = 0;
  for (i = 0; i < mT; i++) {    // Цикл заполнения таблицы числами из массива arrF
    rw = tbl.rows[i];
    for (j = 0; j < mT; j++) {
      k = arrF[kL++];
      rw.cells[j].innerHTML = (k > fL - 1) ? "" : k;
    }
  }
  
  tbl.style.background = 'url('+image[a]+') no-repeat center';
  tbl.style.backgroundSize = 'contain';
}

// Возвращает номер строки, которой расположена ячейка cll
function gtRw(cll, c) {
  for (i = 0; i < mT; i++) {
    rw = tbl.rows[i];
    if (rw.cells[c] == cll) return i;
  }
}

// Номер столбца текущей ячейки
function sayRC(cll) {
  c = cll.cellIndex;
  r = gtRw(cll, c);
  alert("Ячейка " + r + ":" + c);
}

// Возвращает true, если ячейка r2:c2 является пустой
function chkC2(r2, c2, cll) {
  if (r2 == -1 || c2 == -1 || r2 == mT || c2 == mT) return false;
  cll2 = tbl.rows[r2].cells[c2];
  if (cll2.innerHTML == "") return true;
}
//обработка вида курсора
function mkCrsr(cll) {
  if (dn) mvd = false;        //если игра закончена, то курсор над всеми ячейками принимает вид перекрестия
  else {
    c = cll.cellIndex;
    r = gtRw(cll, c);         // возвращаетя номер строки текущей ячейки
    if (r == -1)
      mvd = false;
    else
      for (kL = 0; kL < 4; kL++) {  //если соседняя ячейка пустая, то курсор на текущей поменяется
        switch (kL) {               //и её можно будет переместить
          case 0 : mvd = chkC2(r - 1, c, cll); break;
          case 1 : mvd = chkC2(r, c - 1, cll); break;
          case 2 : mvd = chkC2(r + 1, c, cll); break;
          case 3 : mvd = chkC2(r, c + 1, cll); break;
        }
        if (mvd) break;
      }
  }
  tbl.style.cursor = (mvd) ? 'pointer' : 'crosshair';
}

// Меняет текущую ячейку с пустой местами
function chkC(r2, c2, cll) {
  if (r2 == -1 || c2 == -1 || r2 == mT || c2 == mT) return false;
  cll2 = tbl.rows[r2].cells[c2];
  if (cll2.innerHTML == "") {
    nMove++;
    cll2.innerHTML = cll.innerHTML;
    cll.innerHTML = "";
    tbl.style.cursor = 'crosshair';
    cll2.style.backgroundColor = 'lightyellow';
    cll.style.background = '';
    return true;
  }
}

// Показывает потраченные время и число ходов, делает ячейки прозрачными, добавляет описание чуда света
function Result() {
  var tblCell = document.getElementsByTagName('td');
  for (var i = 0; i < tblCell.length; i++) {
    tblCell[i].style.background = '';
    tblCell[i].style.opacity = 0.4;
    tblCell[i].style.color = 'white';
  }
 
  document.getElementById("ds").innerHTML= chudo.name[a];

  dt = new Date();
  tm = Math.round(0.001 * (dt.getTime() - tmS));
  alert("Игра завершена за "+ tm + " с. Число ходов - " + nMove +"." );
}

// Перемещение ячейки и проверка статуса завершения игры
function mvFg(cll) {
  if (dn) return;
  c = cll.cellIndex;
  r = gtRw(cll, c);
  if (r == -1) return;
  fL = mT * mT;
  for (kL = 0; kL < 4; kL++) {
    switch (kL) {
      case 0 : mvd = chkC(r - 1, c, cll); break;
      case 1 : mvd = chkC(r, c - 1, cll); break;
      case 2 : mvd = chkC(r + 1, c, cll); break;
      case 3 : mvd = chkC(r, c + 1, cll); break;
    }
    // Проверяем, завершена игра или нет
    if (mvd) {
      // Переменная dn будет равна true, если игра завершена
      dn = true;
      k = 0;
      for (i = 0; i < mT; i++) {
        rw = tbl.rows[i];
        for (j = 0; j < mT; j++) {
          k++;
          if (k < fL && rw.cells[j].innerHTML != k) {
            dn = false;
            break;
          }
        }
        if (!dn) break;
      }
    if (dn) Result(); //Выдаёт результат, если игра завершена
      break;
    }
  }
}

// Выстраивает цифры в правильном порядке
function GameFinish() {
  if (dn) return;
  k = 0;
  for (i = 0; i < mT; i++) {
    rw = tbl.rows[i];
    for (j = 0; j < mT; j++) rw.cells[j].innerHTML = (++k > 15) ? "" : k;
  }
  dn = true;
  Result();         //Выдаёт результат, если игра завершена
}