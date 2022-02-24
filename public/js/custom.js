$('.our-car-slider').owlCarousel({
    loop: true,
    margin: 42,
    center: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 40,
            margin: 20,
        },
        600: {
            items: 2
        },
        1000: {
            items: 3,
            margin: 30,
        }
    }
})

$('.hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

setTimeout(() => {
    const picker = datepicker('.pick-up-date', {
        onSelect: (instance, date) => {
            console.log(date)
            picker2.setMin(date)
        },
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        }
    });

    const picker2 = datepicker('.pick-up-date-own', {
        onSelect: (instance, date) => {
            console.log(date)
            picker2.setMin(date)
        },
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        }
    });
}, 5000);

setTimeout(() => {
    const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.option');
    let index = 1;
    document.querySelectorAll('.selectBtn').forEach(link => {
        link.addEventListener("click", (event) => {
            console.log("this is deno")
            link.classList.add('bg-white');
            link.classList.remove('bg-transparent');
            link.classList.add('text-[#2B374B]');
            link.classList.remove('text-white');
        });
    });
    select.forEach(a => {
        a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = 9999;
        })
    });
    option.forEach(a => {
        a.addEventListener('click', b => {
            b.target.parentElement.classList.remove('toggle');
            const parent = b.target.closest('.select').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerText = b.target.innerText;
            parent.classList.remove('bg-white');
            parent.classList.add('bg-transparent');
            parent.classList.remove('text-[#2B374B]');
            parent.classList.add('text-white');
        })
    });
    const gridIcon = document.querySelector('.grid-icon');
    const listIcon = document.querySelector('.list-icon');
    const filterMenu = document.querySelector('.filter-menu');

    filterMenu.addEventListener("click", function(){
        document.querySelector('.mobile-img').classList.toggle('mobile-unactive');
        document.querySelector('.mobile-none').classList.toggle('active');
        filterMenu.classList.toggle('active');
    });

    gridIcon.addEventListener("click", function () {
        gridIcon.classList.add("active");
        listIcon.classList.remove("active");
        document.querySelector('.grid-view').classList.add('active');
        document.querySelector('.list-view').classList.remove('active');
    });
    listIcon.addEventListener("click", function () {
        gridIcon.classList.remove("active");
        listIcon.classList.add("active");
        document.querySelector('.grid-view').classList.remove('active');
        document.querySelector('.list-view').classList.add('active');
    });

}, 1000);


$(document).ready(function () {
    $(".menu-open").click(function () {
        $(".menu-items").slideToggle();
    });

    // Reservation popup
    $('.reserve-btn').click(function () {
        $('.reservation-popup').removeClass('hidden');
    });
    $('.modal-backdrop').click(function () {
        $('.reservation-popup').addClass('fade-out')

        setTimeout(function () {
            $('.reservation-popup').addClass('hidden')
            $('.reservation-popup').removeClass('fade-out')
        }, 400)
    })
    $('.close-btn').click(function () {
        $('.reservation-popup').addClass('hidden')
    })

    const picker = datepicker('.pick-up-date', {
        onSelect: (instance, date) => {
            console.log(date)
            picker2.setMin(date)
        }
    });

    const picker2 = datepicker('.drop-off-date', {
        onSelect: (instance, date) => {
            console.log(date)
            picker.setMax(date)
        }
    });

    String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
    
    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        stepsOrientation: 0,
        onStepChanged: function(event, currentIndex, newIndex) {
            console.log(currentIndex)
            let stepHeading = event.target.querySelector('.steps').querySelector('.current').innerText.splice(1, 0, ". ").replace(/(\r\n|\n|\r)/gm,"");
            document.querySelector('.reservation-popup .modal-heading').innerText = stepHeading;
            if(currentIndex == 1){
                document.getElementsByClassName(".dates-options")
                    $('.select-date-sec').addClass('active');
                console.log(545);
            }
        },
    });

    const picker3 = datepicker('.select-date', {
        alwaysShow: true,
    });

    // End reservation popup
});



$('.slider-for1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav1',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
                
            }
        }
    ]

    
});
$('.slider-nav1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for1',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


$('.productslider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    customPaging : function(slider, i) {
        return '<a href="#"><img src="images/realmix/products/freshness_energy_active.png" /><img src="images/realmix/products/freshness_energy_active.png" /></a>';
    },
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                mobileFirst: true,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                adaptiveHeight: true,
                dots: true
            }
        }
    ]
}); 

$(".zoom-in-img").click(function(){
    $(".slider-for1 img").toggleClass("image-zoom");
  });

  