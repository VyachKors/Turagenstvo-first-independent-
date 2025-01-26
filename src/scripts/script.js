//Анимация WOW
new WOW({
    animateClass: 'animate__animated',
}).init();


// скролл с кнопки до программы

$('#btn-viewer').on('click', function () {
        document.querySelector('#prog').scrollIntoView({behavior: 'smooth'});
    }
)

//magnific popup gallery
$('.collage1').magnificPopup({
    type: 'image'
    // other options
});
$('.collage2').magnificPopup({
    type: 'image'
    // other options
});
$('.collage3').magnificPopup({
    type: 'image'
    // other options
});
$('.collage4').magnificPopup({
    type: 'image'
    // other options
});
$('.collage5').magnificPopup({
    type: 'image'
    // other options
});

// подписка e-mail footer
$('.subscriber_btn').click(function () {
    const mail = $('.inp').val();
    if (mail < 1) {
        $(".inp").css('border', '2px solid red');
    } else {
        $(".inp").css('border', '1px solid #fa742b');
    }
});

//заказать звонок
$(document).ready(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

//валидация формы в попапе

// единый блок который повторяется в обоих валидациях.
// function errorInput() {
//     $('.error-input').hide();
//     name.css({'margin-bottom': '40px'});
//     name.css({'border': '1px solid rgb(255, 243, 225)'});
//     phone.css({'margin-bottom': '40px'});
//     phone.css({'border': '1px solid rgb(255, 243, 225)'});
//     if (!name.val()) {
//         name.css({'margin-bottom': '5px'});
//         name.css({'border': '2px solid red'});
//         name.next().show();
//         hasError = true;
//     }
//     if (!phone.val()) {
//         phone.css({'margin-bottom': '5px'});
//         phone.css({'border': '2px solid red'});
//         phone.next().show();
//         hasError = true;
//     }
// }

$('#bid_button_pop').click(function () {
    event.preventDefault();
    event.stopPropagation();

    let name = $('#name_bid_pop');
    let phone = $('#phone_bid_pop');
    let hasError = false;
    $('.error-input').hide();
    name.css({'margin-bottom': '40px'});
    name.css({'border': '1px solid rgb(255, 243, 225)'});
    phone.css({'margin-bottom': '40px'});
    phone.css({'border': '1px solid rgb(255, 243, 225)'});
    if (!name.val()) {
        name.css({'margin-bottom': '5px'});
        name.css({'border': '2px solid red'});
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css({'margin-bottom': '5px'});
        phone.css({'border': '2px solid red'});
        phone.next().show();
        hasError = true;
    }
    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "http://testologia.ru/checkout",
            data: {name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    console.log(msg);
                    $('#name_bid_pop').css({'display': 'none'});
                    $('#phone_bid_pop').css({'display': 'none'});
                    $('#bid_button_pop').css({'display': 'none'});
                    $('h1').css({'display': 'none'});
                    $('.call-form').css({'background-image': 'linear-gradient(to right, #ffd61e, #fa742b);'});
                    $('#after-form-main').css({'display': 'block'})
                } else {
                    console.log(msg);
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})
//валидация формы в блоке
$('#bid_button_block').click(function () {
    let name = $('#name_bid_block');
    let phone = $('#phone_bid_block');
    let hasError = false;
    $('.error-input').hide();
    name.css({'margin-bottom': '40px'});
    name.css({'border': '1px solid rgb(255, 243, 225)'});
    phone.css({'margin-bottom': '40px'});
    phone.css({'border': '1px solid rgb(255, 243, 225)'});
    if (!name.val()) {
        name.css({'margin-bottom': '5px'});
        name.css({'border': '2px solid red'});
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css({'margin-bottom': '5px'});
        phone.css({'border': '2px solid red'});
        phone.next().show();
        hasError = true;
    }
    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "http://testologia.ru/checkout",
            data: {name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    console.log(msg);
                    $('#name_bid_block').css({'display': 'none'});
                    $('#phone_bid_block').css({'display': 'none'});
                    $('#bid_button_block').css({'display': 'none'});
                    $('.five_chapter_text').css({'display': 'none'});
                    $('.after-form').css({'background-image': 'linear-gradient(to right, #ffd61e, #fa742b);'});
                    $('#after-form').css({'display': 'block'})
                } else {
                    console.log(msg);
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})


//карусель туры

$('.three_chapter_items').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        // от 0 и больше
        0: {
            items: 1,
            nav: true
        },

        1000: {
            items: 2,
            nav: true
        },

        1201: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})
//карусель фото
$('.collages').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        }
    }
})
$('.collages_320').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
})

//карусель отзывы
$('.reviews_carusel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        // от 0 и больше
        0: {
            items: 1,
            nav: true
        },
        // от 768 и больше
        768: {
            items: 1,
            nav: true
        },
        // от 1000 и больше
        1024: {
            items: 2,
            nav: true,
            loop: false
        }
    }
})

//бургер меню
document.getElementById('burger').onclick = function () {
    document.getElementById('menu').style.display = 'block';
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').style.display = 'none';
    }
})

// плеер
document.getElementById('circle').onclick = function () {
    document.getElementById('wrap').style.display = 'none';
    document.getElementById('vid').style.display = "flex";
}
//карточки программы кат на мобильной версии
document.getElementById('up_next1').onclick = function () {
    document.getElementById('up_next1').style.display = 'none';
    document.getElementById('programs_320_item_text1').style.overflow = "visible";
    document.getElementById('programs_320_item_text1').style.fontSize = "10px";
}
document.getElementById('up_next2').onclick = function () {
    document.getElementById('up_next2').style.display = 'none';
    document.getElementById('dots2').style.display = 'none';
    document.getElementById('down2').style.display = "block";
    document.getElementById('programs_320_item_text2').style.fontSize = "10px";
}
document.getElementById('up_next3').onclick = function () {
    document.getElementById('up_next3').style.display = 'none';
    document.getElementById('dots3').style.display = 'none';
    document.getElementById('down3').style.display = "block";
    document.getElementById('programs_320_item_text3').style.fontSize = "9px";
}
document.getElementById('up_next4').onclick = function () {
    document.getElementById('up_next4').style.display = 'none';
    document.getElementById('dots4').style.display = 'none';
    document.getElementById('down4').style.display = "block";
    document.getElementById('programs_320_item_text4').style.fontSize = "10px";
}
document.getElementById('up_next5').onclick = function () {
    document.getElementById('up_next5').style.display = 'none';
    document.getElementById('dots5').style.display = 'none';
    document.getElementById('down5').style.display = "block";
    document.getElementById('programs_320_item_text5').style.fontSize = "10px";
}
document.getElementById('up_next6').onclick = function () {
    document.getElementById('up_next6').style.display = 'none';
    document.getElementById('dots6').style.display = 'none';
    document.getElementById('down6').style.display = "block";
    document.getElementById('programs_320_item_text6').style.fontSize = "10px";
}

//карточки отзывы кат на мобильной версии
document.getElementById('up_next_1').onclick = function () {
    document.getElementById('up_next_1').style.display = 'none';
    document.getElementById('dots_1').style.display = 'none';
    document.getElementById('down_1').style.display = "block";
    document.getElementById('reviews_item_text_1').style.fontSize = "10px";
}
document.getElementById('up_next_2').onclick = function () {
    document.getElementById('up_next_2').style.display = 'none';
    document.getElementById('dots_2').style.display = 'none';
    document.getElementById('down_2').style.display = "block";
    document.getElementById('reviews_item_text_2').style.fontSize = "10px";
}
document.getElementById('up_next_3').onclick = function () {
    document.getElementById('up_next_3').style.display = 'none';
    document.getElementById('dots_3').style.display = 'none';
    document.getElementById('down_3').style.display = "block";
    document.getElementById('reviews_item_text_3').style.fontSize = "10px";
}
document.getElementById('up_next_4').onclick = function () {
    document.getElementById('up_next_4').style.display = 'none';
    document.getElementById('dots_4').style.display = 'none';
    document.getElementById('down_4').style.display = "block";
    document.getElementById('reviews_item_text_4').style.fontSize = "10px";
}
document.getElementById('up_next_5').onclick = function () {
    document.getElementById('up_next_5').style.display = 'none';
    document.getElementById('dots_5').style.display = 'none';
    document.getElementById('down_5').style.display = "block";
    document.getElementById('reviews_item_text_5').style.fontSize = "10px";
}
document.getElementById('up_next_6').onclick = function () {
    document.getElementById('up_next_6').style.display = 'none';
    document.getElementById('dots_6').style.display = 'none';
    document.getElementById('down_6').style.display = "block";
    document.getElementById('reviews_item_text_6').style.fontSize = "10px";
}