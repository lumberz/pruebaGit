$("document").ready(function()
{
$("#texto").hover(function(){
	
	$("#texto").css("color","black");
	$("#texto").css("font-size","90px");
	$("#texto").css("opacity","0.01");
});


$("#texto").mouseout(function(){
	
	$("#texto").css("color","red");
	$("#texto").css("font-size","40px");
	$("#texto").css("opacity","1.0");
});

});
