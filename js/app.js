document.addEventListener('DOMContentLoaded', function () {




    $(".about__inner-parallax").paroller({
        factor: 0.3,
        type: 'foreground',
        direction: 'vertical',
        transition: 'translate 0.1s ease',
    });


    $('.accommodation__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/hostel-icons/arrow.svg'  aria-hidden='true'></img></button>",
        responsive: [
            {
                breakpoint: 1565,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 855,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });



    $('.fancybox').fancybox({

    });



    $(".toggle-icon").click(function () {

        $('#nav-container').toggleClass("pushed");
        $('.header__menu').toggleClass("active");
        $('body').addClass("hidden");

    });

    $('.header__menu-back').click(function () {

        $('.header__menu').removeClass("active");
        $('#nav-container').removeClass("pushed");
        $('body').removeClass("hidden");
    });

    const btns = document.querySelectorAll('.navigation__btn');
    const about = document.querySelector('.navigation__inner');
    const articles = document.querySelectorAll('.navigation__accommodation');


    about.addEventListener('click', function (e) {

        const id = e.target.dataset.id;

        if (id) {
            //remove active from other buttons
            btns.forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            //hide other articles

            articles.forEach(article => {
                article.classList.remove('accommodation-active');
                // article.style.cssText = `display: none`;  
            });
            const element = document.getElementById(id);
            element.classList.add('accommodation-active');
            // element.style.cssText = `display: block`;
        }

    });

    const questions = document.querySelectorAll('.accomodation-article__wrapper');
    questions.forEach(question => {
        const btn = question.querySelector('.navigation__accommodation-buttons');
        btn.addEventListener('click', function () {
            questions.forEach(item => {
                if (item !== question) {
                    item.classList.remove('show-content');
                }
            })


            question.classList.toggle('show-content');
        });
    })




});