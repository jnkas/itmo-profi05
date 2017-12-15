function findMin() {

    var num1 = document.getElementById('num1'),
        num2 = document.getElementById('num2'),
        num3 = document.getElementById('num3'),
        result = document.getElementById('result');

    result.value = Math.min(num1.value, num2.value, num3.value);

}

function findDescrOfNum() {

    var name = "",
        num = document.getElementById('num'),
        charvalue = document.getElementById('charvalue'),
        count = (Math.abs(num.value)).toString();

    if (num.value > 0) {
        name = name + "положительное ";
    } else {
        name = name + "отрицательное ";
    }


    switch (count.length) {
        case 1:
            name = name + "однозначное ";
            break;
        case 2:
            name = name + "двухзначное ";
            break;
        case 3:
            name = name + "трехзначное ";
            break;
        case 4:
            name = name + "четырехзначное ";
            break;
        case 5:
            name = name + "пятизначное ";
            break;
        case 6:
            name = name + "шестизначное ";
            break;
        case 7:
            name = name + "семизначное ";
            break;
        default:
            name = name + "запредельное "
    }

    if (num.value == 0) {
        charvalue.value = "0"
    } else
        charvalue.value = name + "число";
}

function getCharValue() {

    var numfrom3 = document.getElementById('numfrom3'),
        resultfrom3 = document.getElementById('resultfrom3'),
        arr = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    resultfrom3.value = numfrom3.value + " - " + "'" + arr[numfrom3.value] + "'";

}

function getMark() {

    var numfrom4 = document.getElementById('numfrom4'),
        resultfrom4 = document.getElementById('resultfrom4'),
        arr = [null, 'плохо', 'неудовлетворительно', 'удовлетворительно', 'хорошо', 'отлично'];

    if (numfrom4.value >= 1 && numfrom4.value <= 5) {
        resultfrom4.value = numfrom4.value + " оценка " + "'" + arr[numfrom4.value] + "'";
    } else resultfrom4.value = "не оценка";

}

function getSameValues() {

    var nums = [document.getElementById('num01'), document.getElementById('num02'), document.getElementById('num03')],
        component = "";

    if (nums[0].value == nums[1].value && nums[1].value == nums[2].value) {
        resultfrom5.value = "Все значения равны";
    } else if (nums[0].value == nums[1].value) {
        resultfrom5.value = "1-е значение равно 2-му";
    } else if (nums[0].value == nums[2].value) {
        resultfrom5.value = "1-е значение равно 3-му";
    } else if (nums[1].value == nums[2].value) {
        resultfrom5.value = "2-е значение равно 3-му";
    } else resultfrom5.value = "Не найдено одинаковых значений";

}