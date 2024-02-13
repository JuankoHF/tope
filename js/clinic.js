window.addEventListener('scroll', function() {

    let scrollWelcome = document.getElementById('welcome');
    let positionScrollWelcome = scrollWelcome.getBoundingClientRect().top;
    let whatsappIcon = document.querySelector(".link_whatsapp");

    if(positionScrollWelcome < -200 ) {
        whatsappIcon.classList.add("visibleWhatsapp");
    }
    else {
        whatsappIcon.classList.remove("visibleWhatsapp");

    }
})