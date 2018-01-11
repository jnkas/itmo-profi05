// функция генерации числа в заданном диапазоне
// function getRandNum(min,max) {
// 	return Math.floor(
// 		Math.random()*(max - min +1) + min);
// }
// //Функция возвращает число из массива
// function getNum(arr) {
// 	var index = getRandNum(0, arr.length-1); //
// 	return arr.splice(index,1);
// }

// // Создаём вёрстку
// var n = +prompt("Введите размер игрового поля",2);
// var el = document.getElementById('gP');

// var arrNum = [];
// for(var i = 1; i <= n*n; i++) {
// 	arrNum.push(i);
// }

// for (var i = 0; i < n; i++) {
// 	tr = document.createElement('tr');
// 	for (var j = 0; j < n; j++) {
// 		td = document.createElement('td');
// 		td.innerText = getNum(arrNum);
// 		td.style.color = "rgba(" + getRandNum(0,255) + "," + getRandNum(0,255) + "," + getRandNum(0,255) + "," + getRandNum(50,100)/100+")";
// 		td.style.fontSize = getRandNum(20,40) +"px";
// 		tr.appendChild(td);
// 	}
// 	el.appendChild(tr);
	
// }
function Iterator(_to,_from){						
	this._to=_to;
	this._from = _from;
	var curr = _from;
	this.get = function(){
		if (curr === this._to) {
			return curr;
		} else if (this._from > this._to) {
			curr--;
		} else if(this._from < this._to) {
			curr++;
		}
		return curr;
	};
}

function IteratorChild(_to,_from) {
	Iterator.call(this,_to,_from);

	this.next = function() {
		var result = this.get();
		if(result === this._to) {
			var temp = this._to;
			this._to = this._from;
			this._from = temp;
		}
		return result;
	};
}

function User(name) {
	if (name == undefined) {
		this.name = "Аноним";
	} else {
		this.name = name;
	}
	this.toString = function() {
		return "Пользователь: " + this.name;
	};
}