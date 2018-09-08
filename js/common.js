
var ieMatch=navigator.userAgent.toLowerCase();
var ieNum=parseInt(ieMatch.split('msie')[1])

function add(el,classN){
	
	if(ieNum<=9){
			
		el.className=classN;
		
	}else{
		
		el.classList.add(classN);

	}			
			
} //ie에 따라 코드다르게 class 추가

function remove(el,classN){
	
	if(ieNum<=9){

		el.removeAttribute("class")
		
	}else{

		el.classList.remove(classN);

	}			
			
} //ie에 따라 코드다르게 class 제거

window.addEventListener('load',onloadH);

function onloadH(e){
	var bodyHeight= window.innerHeight;
	var main=document.getElementsByClassName("section__main")
	main[0].style.height=bodyHeight+"px";
	resizeH();
	document.getElementsByClassName("section__main-border")[0].style.display="block"
} //사이트가 로딩완료시 메인 완전 block 표시

var bodyWdith;
window.addEventListener("resize",resizeH)

function resizeH (e){
	var bodyHeight= window.innerHeight;
	bodyWdith=window.innerWidth;
	var main=document.getElementsByClassName("section__main")
	
	main[0].style.height=bodyHeight+"px";
	
	if(bodyWdith>1023){
		document.getElementsByClassName("header__mobile")[0].style.display="block"
	}else{
		document.getElementsByClassName("header__mobile")[0].style.display="none"
	}
} //browser에 따라 height 변경
	
window.addEventListener("scroll",function(){

	var header = document.getElementById("header__height");
	var header_height = header.offsetHeight	
	
	if (header_height < window.pageYOffset) {
		//classMove.Cadd(header,"on")
		add(header,"on")
	} else {
		//header.classList.remove("on");
		remove(header,"on")
	}
	
	var windowScroll=$(window).scrollTop();
	var $section=$(".section__inner")

	$.each($section,function(idx,item){

		var sectionIdx=$section.eq(idx);
		var menuScroll=sectionIdx.offset().top-$("#header__height").height()-2;
		
		if( menuScroll <= windowScroll ){
			
			$("#header__menu li").eq(idx).addClass("on").siblings("li").removeClass("on");
			$("#header__menu li").eq(0).removeClass("on")
         }

		
	});
	
}); // 스크롤에 따라 header 고정 & section에 따라 메뉴 border 변경
	

$(document).ready(function() {
	
	var btn=document.getElementById("header__button");
	var clseBtn=btn.children;
	var MLayer=document.getElementsByClassName("header__mobile");
	
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
			
			console.log("b");
		}
				
	}) // 모바일 햄버거 버튼
	
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
			
			$('html, body').animate({
				scrollTop: $("#section"+idxplus).offset().top-header_height
			}, 1000);
			
			
			if(idx==0){
				menu_parent.siblings("li").removeClass("on");
			}else{
					
				menu_parent.addClass("on").siblings("li").removeClass("on");
			}
					
			if(bodyWdith<1024){
				setTimeout(function(){
					clse();
				},1050);
			}
			
		
		});
		
		
	});// 메뉴 클릭시 해당 section으로 이동
	
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
	}) // 포폴 슬라이드 버튼 클릭시 해당 슬라이드 나타냄 

});




