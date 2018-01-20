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

// function Iterator(_to,_from){						//иттерация начало
// 	this._to=_to;
// 	this._from = _from;
// 	var curr = _from;
// 	this.get = function(){
// 		if (curr === this._to) {
// 			return curr;
// 		} else if (this._from > this._to) {
// 			curr--;
// 		} else if(this._from < this._to) {
// 			curr++;
// 		}
// 		return curr;
// 	};
// }

// function IteratorChild(_to,_from) {
// 	Iterator.call(this,_to,_from);

// 	this.next = function() {
// 		var result = this.get();
// 		if(result === this._to) {
// 			var temp = this._to;
// 			this._to = this._from;
// 			this._from = temp;
// 		}
// 		return result;
// 	};
// }													//иттерация конец

// function User(name) {
// 	if (name == undefined) {
// 		this.name = "Аноним";
// 	} else {
// 		this.name = name;
// 	}
// 	this.toString = function() {
// 		return "Пользователь: " + this.name;
// 	};
// }

// addEventListener('keydown',function(e) {			//пересекающиеся прямоугольники
// 	if(e.keyCode === 38) {
// 		//to left
// 		red.style.left =
// 		(parseInt(red.style.left) - 20) + 'px';
// 		checkIntersection(); 
// 	} else if (e.keyCode === 39) {
// 		//to right
// 		red.style.left =
// 		(parseInt(red.style.left) + 20) + 'px';
// 		checkIntersection();
// 	} else if (e.keyCode === 40) {
// 		//to bottom
// 		red.style.top =
// 		(parseInt(red.style.top) + 20) + 'px';
// 		checkIntersection();
// 	} else if (e.keyCode === 41) {
// 		//to top
// 		red.style.top =
// 		(parseInt(red.style.top) - 20) + 'px';
// 		checkIntersection();
// 	}

// });

// function checkIntersection() {
// 	if(intersection(red,green)) {
// 		green.style.backgroundColor = "red";
// 		} else {
// 			green.style.backgroundColor = "green";
// 		}
	
// }

// function intersection(box1, box2) {
// 	var x1_1 = parseInt(box1.style.left);
// 	var x2_1 = parseInt(box1.style.left) + 
// 		parseInt(getComputedStyle(box1).style.width);
// 	var y1_1 = parseInt(box1.style.top);
// 	var y2_1 = parseInt(box1.style.top) + 
// 		parseInt(getComputedStyle(box1).style.height);
// 	var x1_2 = parseInt(getComputedStyle(box2).style.left);
// 	var x2_2 = parseInt(getComputedStyle(box2).style.left) + 
// 		parseInt(box1.style.width);
// 	var y1_2 = parseInt(getComputedStyle(box2).style.top);
// 	var y2_2 = parseInt(getComputedStyle(box2).style.top) + 
// 		parseInt(box1.style.height);

// 	var intersectionX = (x1_1 <= x1_2 && x1_2 <= x2_1) || (x1_1 <= x2_2 && x1_2 <= x2_1);
// 	var intersectionY = (y1_1 <= y1_2 && y1_2 <= y2_1) || (y1_1 <= y2_2 && y1_2 <= y2_1);

// 	return intersectionX && intersectionY
// }
;(function() {
	window.SimulatorBattle = function() {
		this.player1 = new Fighter("Cat", 10, 100, 1, 20);
		this.player2 = new Fighter("Dog", 10, 100, 1, 20);
	}
	SimulatorBattle.prototype.fight = function() {
		this.player2.protect(this.player1.attack());
		this.player1.protect(this.player2.attack());

		if(this.player1.isAlive() && this.player2.isAlive()) {
			console.log(this.player1.toString());
			console.log(this.player2.toString());
			setTimeout(function(){
				this.fight();
			}
		} else if ()
	}

	function Fighter(name, armor, health, minA, maxA) {
		this.name = name;
		this.armor = armor;
		this.health = health;
		this.minA = minA;
		this.maxA = maxA;
	}
	Fighter.prototype.attack = function() {
		return Math.floor(Math.random()*(this.maxA - this.minA + 1) + this.minA);
	};
	Fighter.prototype.protect = function(attack) {
		return Math.floor(Math.random()*(this.maxA - this.minA + 1) + this.minA);
		var damage = attack - this.armor;
		if(damage > 0) {
			this.health -= damage;
		}
	};
	Fighter.prototype.isAlive = function() {
		return this.health > 0;
	}
	Fighter.prototype.toString = function() {
		return "Player: "+this.name+ "Health: "+this.health;
	}
} ());