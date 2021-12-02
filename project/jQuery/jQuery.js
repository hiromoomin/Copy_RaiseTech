// $(function() {
//     /* サブメニューのスライドダウン表示・非表示 */
//     $(".nav_sub_close").hide();
//     $(".nav_main_li_close").hover(
//         function(){
//             $("> .nav_sub_close", this).stop().slideDown(150);
//         },
//         function(){
//             $("> .nav_sub_close", this).hide();
//         }
//     ); 
// });

$(function() {
    /* サブメニューのスライドダウン表示・非表示 */
    $(".nav_sub").hide();
    $(".nav_main_li").hover(
        function(){
            $("> .nav_sub", this).stop().slideDown(150);
        },
        function(){
            $("> .nav_sub", this).hide();
        }
    ); 
});

/* ハンバーガーボタン押下時でのスライドメニュー表示 */
// $(function() {
    /* サブメニューのスライドダウン表示・非表示 */
//     $(".nav_sub_open").hide();
//     $(".nav_main_li_open").hover(
//         function(){
//             $("> .nav_sub_open", this).stop().slideDown(150);
//         },
//         function(){
//             $("> .nav_sub_open", this).hide();
//         }
//     ); 
// });

    /* ハンバーガーボタンの表示切替 */
$(function() {
    $(".nav_btn").click(function(){
        $(this).toggleClass('nav_btn_open');
        $(".nav_main").toggleClass('nav_main_open');
        $(".nav_main").toggleClass('nav_main_close');
        $(".container").toggleClass('container_open');
        $(".nav_main_li").toggleClass('nav_main_li_close');
        $(".nav_sub").toggleClass('nav_sub_close');
        $(".nav_sub").toggleClass('nav_sub_open');
        $(".nav_main_li").toggleClass('nav_main_li_open');

        $(".nav_main_open").stop().slideDown(150);
        $(".nav_main_close").stop().slideUp(150);


    });
});


$(window).resize(function() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
// スマホ表示の時の処理
        // $("ul.nav_main").one().css("display" , "none")
        // $(".nav_main").hide();
        // $(".nav_main").one().stop().slideUp(150);
        // $(".nav_btn").toggleClass('nav_btn_open',false);
        // $(".nav_btn").toggleClass('nav_btn_close',true);
        // $(".nav_main").toggleClass('nav_main_open',false);
        // $(".nav_main").toggleClass('nav_main_close',true);
        // $(".nav_btn").click(function(){
        //     $(".nav_main_open").stop().slideDown(150);
        if($('.nav_btn').hasClass('nav_btn_open')){
            $(".nav_main").stop().slideUp(150);
            $(".nav_btn").toggleClass('nav_btn_open',false);
            $(".nav_btn").toggleClass('nav_btn_close',true);
            $(".nav_main").toggleClass('nav_main_open',false);
            $(".nav_main").toggleClass('nav_main_close',true);
        }
        else{
            $(".nav_main").one().css("display" , "none")
        }
            // $("ul.nav_main").show();
        $("header").css("height" , "50px")
        // });
    } else {　
// PC表示の時の処理
        $("ul.nav_main").show();
        $("ul.nav_main").css("display" , "flex")
        $("header").css("height" , "70px")
        $(".nav_btn").toggleClass('nav_btn_close',false);
    }

    // if($('.nav_btn').one().hasClass('nav_btn_close')){
    //     $(".nav_main_close").stop().slideUp(150);
    //     }
});