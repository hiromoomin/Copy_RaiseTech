$(function() {
    $(".menu_sub").hide();
    $("ul.menu > li").hover(
        function(){
        // $('.menu_sub').hide();
        // $('ul.menu > li').removeClass('selected');    
        // if($('> ul', this).css('display') == 'none') {
            $("> ul", this).stop().slideDown(150);
            // $(this).addClass('selected');
        },
        function(){
            $("> ul", this).hide();
        }
    ); 
});