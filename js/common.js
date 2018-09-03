
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
	var bodyWdith=window.innerWidth;
	var main=document.getElementsByClassName("section__main")
	
	main[0].style.height=bodyHeight+"px";
	
	if(bodyWdith>1023){
		document.getElementsByClassName("header__mobile")[0].style.display="block"
	}else{
		document.getElementsByClassName("header__mobile")[0].style.display="none"
	}
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
	
	var btn=document.getElementById("header__button");
	var clseBtn=btn.children;
	var MLayer=document.getElementsByClassName("header__mobile");
	var rewidth;
	
	btn.addEventListener("click",function(evt){
		
		evt.preventDefault();
		
		if(btn.classList.contains("mobile__change")==false){
			MLayer[0].style.display="block";
			btn.classList.add("mobile__change");
			clseBtn[0].classList.add("mobile__change1");
			clseBtn[1].classList.add("mobile__change2");
			document.getElementsByTagName("html")[0].classList.add("no-scroll")
		}else{
			clse()
		}
		
		rewidth=window.innerWidth;	
		
	})
	
	function clse(){
		MLayer[0].style.display="none";
		btn.classList.remove("mobile__change");
		clseBtn[0].classList.remove("mobile__change1");
		clseBtn[1].classList.remove("mobile__change2");
		document.getElementsByTagName("html")[0].classList.remove("no-scroll");		
	}
	
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
			
			if(rewidth<768){
				setTimeout(function(){
					clse();
				},1050);
			}
			
		
		});
		
		
	});
	
	var $prdfBtn=$(".button__list button");
	var idx=0;
	
	$.each($prdfBtn,function(indx){
		$(this).click(function(evt){
			evt.preventDefault();
			
			idx=$(this).index()
			
			slide(idx)
			
			
		})
		
		function slide(num){
			
			$prdfBtn.eq(num).addClass("active").siblings("button").removeClass("active")
			
			$(".button__cont .button__cont-slide").eq(num).fadeIn().siblings("div").css("display","none")
					
		}
	})

});




