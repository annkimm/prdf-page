
window.addEventListener('load',onloadH);

function onloadH(e){
	var bodyHeight= window.innerHeight;
	var main=document.getElementsByClassName("section__main")
	main[0].style.height=bodyHeight+"px";
	resizeH();
}

window.addEventListener("resize",resizeH)

function resizeH (e){
	var bodyHeight= window.innerHeight;
	var main=document.getElementsByClassName("section__main")
	main[0].style.height=bodyHeight+"px";

}
	
window.addEventListener("scroll",function(){

	var header = document.getElementById("header__height");
	var header_height = header.offsetHeight	
	
	if (header_height < window.pageYOffset) {
		header.classList.add("on");
	} else {
		header.classList.remove("on");
	}
	
	var windowScroll=$(window).scrollTop();
	var $section=$(".section__div")

	$.each($section,function(idx,item){

		var sectionIdx=$section.eq(idx);
		var menuScroll=sectionIdx.offset().top-$("#header__height").height()-2;
		
		if( menuScroll <= windowScroll ){
			
			$("#header__menu li").eq(idx).addClass("on").siblings("li").removeClass("on");
			$("#header__menu li").eq(0).removeClass("on")
         }

		
	});
	
});	

$(document).ready(function() {
	
	var menu=$("#header__menu li>a")
	
	$.each(menu,function(idx,evt){
		$(this).click(function(evt){
			
			evt.preventDefault();
			
			var header_height = document.getElementById("header__height").offsetHeight;
			
			var idxplus=idx+1
			var menu_parent=$(this).parent("li");
			
			if(idx==0){
				menu_parent.siblings("li").removeClass("on");
			}else{
						
				menu_parent.addClass("on").siblings("li").removeClass("on");	
			}
			
			$('html, body').animate({
				scrollTop: $("#section"+idxplus).offset().top-header_height
			}, 1000);
		
		});
		
		
	});

});




