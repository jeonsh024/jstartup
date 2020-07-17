$(function(){
	init();

        // $("#top").on("click", function() {
        //     $("html, body").animate({scrollTop : 0}, 300);
        //     return false;
        // });

        // var display = true;
        // var nav = $('#nav_m');
        // nav.hide();
        // var cnt = 0;
        // var isplay = false;
        // // $('#nav_m').hide();
        // $('#menu_btn').on("click",function(){
        //     $(this).toggleClass('open');
        //     if(!isplay){
        //         nav.fadeIn()
        //     }else{
        //         nav.fadeOut();
        //     }
        //     isplay = !isplay
        // });

var speed = 700;    // 스크롤 스피드 수치로 사용할 변수 
     
//로직
function scrolling(obj){
    if (!obj){  // 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
        $('html, body').animate({scrollTop:0},speed);
    }else{ 
        var posTop = $(obj).offset().top -80;   // posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
        $('html, body').animate({scrollTop:posTop}, speed ) // body의 스크롤이동 : posTop
    }
};
 
 
$("#gnb li a").click(function(){  // 네비게이션 클릭시
    var direction = $(this).attr("href");   // direction = 클릭한 요소의 href 속성
    scrolling( direction ); // direction 을 인자로 함수 실행
    return false;   // 본래 이벤트 방지 
});



    var cnt = 0;
    var isplay = true;
    var faqWidth = $(".faq_wrap .rolling_wrap_mask").width();

    $(".faq01 li").on("click",function(){
        cnt = $(this).index();
        if(isplay){
            $(".faq01 .show").eq(cnt).slideDown();
        }else{
            $(".faq01 .show").eq(cnt).slideUp();
        }
        
        isplay = !isplay;
    });


    $(".rolling_btn .next_btn").on("click",function(){
            $(".roliing_wrap").animate({"margin-left":-faqWidth});
    });
    $(".rolling_btn .prev_btn").on("click",function(){
            $(".roliing_wrap").animate({"margin-left":"0"});
    });
//console.log(faqWidth);

    $(".company_popup ").hide();
    $(".company_list li").click(function (e) {
        // e.preventDefault();
        // $("iframe").attr("src", $(this).attr('href'));
        // $(".popup").fadeIn('slow');
        cnt = $(this).index();
        $(this).find(".company_popup").show()
    });

    $(".close_btn").click(function () {
        $(this).parent().fadeOut();
        $('.popup_wrapper').css("left","0");
        num = 0;
    });


var num = 0;
var tx = 0;
//var w = 800;
var w = $(".popup_wrap_mask").width();
$(".popup_wrapper").css("left","0");

$('.slide_btn .nextBtn').on("click",function(){
    if(num < 2){
        num++;
        tx = num*-w;
        $('.popup_wrapper').animate({left:tx})
    }
        //console.log(num);
    });

$('.slide_btn .prevBtn').on("click",function(){
    if(num > 0){
        num--;
        tx = num*-w;
        $('.popup_wrapper').animate({left:tx})
    }
        
    });







})//endfunction

function init() {
 gnb();
 topScroll(); 
}
function gnb(){}
function topScroll(){}
