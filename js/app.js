
    //facebook
    let fa = document.getElementById("fa");
    fa.addEventListener('click', function (e){
    e.preventDefault();
    Swal.fire({
    title: 'Are you sure to visit to Facebook?',
    text: "Let's go it",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--bs-primary)',
    cancelButtonColor: 'var(--bs-warning)',
    confirmButtonText: 'Yes, I am'
}).then((result) => {
    if (result.isConfirmed) {
    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

    Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
})

    location.href = fa.href
    Swal.fire(
    'You can go now',
    'Thank you',
    'success'
    )
}
});
});
    //twitter
    let tw = document.getElementById("tw");
    tw.addEventListener('click', function (e){
    e.preventDefault();
    Swal.fire({
    title: 'Are you sure to visit to Twitter?',
    text: "Let's go it",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--bs-primary)',
    cancelButtonColor: 'var(--bs-warning)',
    confirmButtonText: 'Yes, I am'
}).then((result) => {
    if (result.isConfirmed) {
    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

    Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
})

    location.href = tw.href
    Swal.fire(
    'You can go now',
    'Thank you',
    'success'
    )
}
});
});

    //youtube
    let yu = document.getElementById("yu");
    yu.addEventListener('click', function (e){
    e.preventDefault();
    Swal.fire({
    title: 'Are you sure to visit to YouTube?',
    text: "Let's go it",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--bs-primary)',
    cancelButtonColor: 'var(--bs-warning)',
    confirmButtonText: 'Yes, I am'
}).then((result) => {
    if (result.isConfirmed) {
    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

    Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
})

    location.href = yu.href
    Swal.fire(
    'You can go now',
    'Thank you',
    'success'
    )
}
});
});

    //Instagram
    let ig = document.getElementById("ig");
    ig.addEventListener('click', function (e){
    e.preventDefault();
    Swal.fire({
    title: 'Are you sure to visit to Instagram?',
    text: "Let's go it",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--bs-primary)',
    cancelButtonColor: 'var(--bs-warning)',
    confirmButtonText: 'Yes, I am'
}).then((result) => {
    if (result.isConfirmed) {
    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

    Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
})

    location.href = ig.href
    Swal.fire(
    'You can go now',
    'Thank you',
    'success'
    )
}
});
});

    //Github
    let git = document.getElementById("git");
    git.addEventListener('click', function (e){
    e.preventDefault();
    Swal.fire({
    title: 'Are you sure to visit to Github?',
    text: "Let's go it",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: 'var(--bs-primary)',
    cancelButtonColor: 'var(--bs-warning)',
    confirmButtonText: 'Yes, I am'
}).then((result) => {
    if (result.isConfirmed) {
    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

    Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
})

    location.href = git.href
    Swal.fire(
    'You can go now',
    'Thank you',
    'success'
    )
}
});
});

    new Typed("#text", {
    strings : [
    "Full Stack <span class='text-info'>| Developer</span>",

    ],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 2000,

});

    var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
    );
    wow.init();

    let img = document.getElementById('img');
    let bT = document.querySelector("#bText");
    document.addEventListener('scroll', function() {
        // Get scroll position
        let scrollPosition = window.pageYOffset;

        // Calculate whether the scroll it 350px or not then set the opacity to face the header out
        if (scrollPosition <= 690) {
            img.style.opacity = 1 - scrollPosition / 690;
            bT.style.opacity = 0;
        }
        else if (scrollPosition >= 690){
            bT.style.opacity = 1;
            img.style.opacity = 0;
        }
        else {
            img.style.opacity = 0;
        }
    });

    // waypoint
    let forProject = document.querySelector(".forProject");
    let forProjectDiv = document.querySelectorAll(".animate__animated");

    forProjectDiv.forEach(function (currentH1){
        new Waypoint({
            element: currentH1,
            handler: function (direction){
                if (direction == "down"){
                    currentH1.classList.add("animate__backInDown");
                }
            },
            offset: "100%"
        });
    });

    // const counterUp = window.counterUp.default;
    //
    // const el = document.querySelector( '.counter' )
    //
    // // Start counting, typically you need to call this when the
    // // element becomes visible, or whenever you like.
    // counterUp( el, {
    //     duration: 5000,
    //     delay: 16,
    // } )
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    $(".main-project-slide").slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
// //venobox
    new VenoBox({
        selector: '.aa',
        share: true,
        infinigall: true
    });



