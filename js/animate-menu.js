window.addEventListener('scroll', function() {


    let animateScroledStop = document.getElementById('scroledStop');
    let positionScroledStop = animateScroledStop.getBoundingClientRect().top;
    let navIdentityScroll = document.querySelector(".nav_identity")
    let butonContact = document.querySelector(".buton_contact")

    if(positionScroledStop <= 60) {
        navIdentityScroll.classList.add("fixed_nav_identity");
        butonContact.classList.add("contact_addedt_menu");
    }

    if(positionScroledStop > 61) {
        navIdentityScroll.classList.remove("fixed_nav_identity");
        butonContact.classList.remove("contact_addedt_menu");

    }

    
})