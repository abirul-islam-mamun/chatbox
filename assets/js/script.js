//menu right (heart) Active 

$('.details-option').on('click',function(){
    $(this).toggleClass('active')
})

$('.details-option').on('click',function(){
    $(this).toggleClass('detials-show')
})



// chat list active
$('.friend-list li').on('click',function(){
    $('.friend-list li').removeClass('back-active');
    $(this).addClass('back-active')
})