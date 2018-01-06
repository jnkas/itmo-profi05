var str ="<table>";
var tr = 1;
var td = 1;
var res = 1;
while (tr<=9){
    str+="<tr>";
    // console.log(str);

    while (td<=9){
        // console.log(td);
        str+=  "<td>" + td*tr + "</td>";
        td++;
    // console.log(str);
    }

    str+="</tr>"
    // console.log(str);
    tr++;
    td=1;
}

str += "</table>";
// document.write(str);
console.log(str);