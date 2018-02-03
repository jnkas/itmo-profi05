setInterval(function(){
	var obj = {}

   jQuery.ajax({
   	'type':'POST',
	'url':'/ajaxservice/get',
	'data':{'from':101,'to':102,'message':'bla­bla..'},
	'cache':false,
	'success':function(mess){
		if(mess){
		    render(mess); //            необходимо реализовать
		}
	}})
},4000);


function render(oData) {
for (var i = 0; i < Things.length; i++) {
	Things[i]
};
	$('#"container').append('<p>' + oData[i].name +
		" " + oData[i].data + "</p>")
}