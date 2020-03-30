$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 500)
        {
            $('.our-mission').addClass('missionFromdown');
          
        }else{
            $('.our-mission').removeClass('missionFromdown');
      
        }
    });

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200)
    {
        $('.navbarmenu').addClass('custom-navbar');
    }else{
        $('.navbarmenu').removeClass('custom-navbar');
    }
});

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 800)
    {
        $('.camera-img').addClass('missionFromleft');
        $('.mission-text').addClass('missionFromRight')
    }else{
        $('.camera-img').removeClass('missionFromleft');
        $('.mission-text').removeClass('missionFromRight')
    }
});

$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    if(value === 'all')
    {
        $('.filter').show(300);
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);

    }
});
$('.gallery-list-item').click(function(){
    $(this).addClass('active-item').siblings().removeClass('active-item');
});

$(window).scroll(function(){
let position = $(this).scrollTop();
// console.log(position);
if(position >= 4631)
{
    $('.card-1').addClass('movefromleft');
    $('.card-2').addClass('movefromright');
    $('.card-3').addClass('movefrombottom');

}else{
    $('.card-1').removeClass('movefromleft');
    $('.card-2').removeClass('movefromright');
    $('.card-3').removeClass('movefrombottom');
}
});
});