/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function slide1(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner2.png" alt="ban">';
    setTimeout("slide2()", 3000);
    //document.getElementById('aId').href="link1.html";
}
 
function slide2(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner.jpg" alt="ban">';
    setTimeout("slide3()", 3000);
    //document.getElementById('aId').href="link2.html";
}
 
function slide3(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner3.png" alt="ban">';
    setTimeout("slide4()", 3000);
    //document.getElementById('aId').href="link3.html";
}

function slide4(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner7.jpg" alt="ban">';
    setTimeout("slide5()", 3000);
    //document.getElementById('aId').href="link3.html";
}

function slide5(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner5.jpg" alt="ban">';
    setTimeout("slide6()", 3000);
    //document.getElementById('aId').href="link3.html";
}

function slide6(){
    document.getElementById('img').innerHTML = '<img src="css/ext/banner8.jpg" alt="ban">';
    setTimeout("slide1()", 3000);
    //document.getElementById('aId').href="link3.html";
}

function abrePopUp(){
//        console.log("oi");
      var popUpLogin = document.createElement("div");
	  popUpLogin.id = "popUpLogin";
	  popUpLogin.style.position = "absolute";
	  popUpLogin.style.width = "10%";
	  popUpLogin.style.heigth = "auto";
	  popUpLogin.innerHTML = '<form><div style="padding:10px 20px;"><h7>Entrar</h7><label>Login:</label><input type="text" name="login" value="" placeholder="Login"><label>Senha:</label><input type="password" name="senha" value="" placeholder="senha"><button type="submit">OK</button></div></form>';
//      $( "#conteudo" ).prepend( popUpLogin );
    document.getElementById("conteudo").appendChild(popUpLogin);
}

$(document).ready(function() {	

	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		
		var id = $(this).attr('href');
	
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.9);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		$(id).fadeIn(1000); 
	
	});
	
	$('.window .close').click(function (e) {
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});			
	
});