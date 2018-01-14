
var a = prompt("Введите число");
var b = prompt("Введите число");
var c = prompt("Введите число");
if (a<b && a<c){
    alert ("Минимальное число: " + a);
}else if(b<a && b<c){
    alert ("Минимальное число: " + b);
}else{
    alert ("Минимальное число: " + c);
}
