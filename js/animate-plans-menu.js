document.querySelector(".content_bars").addEventListener("click", animatePlansMenu);

let contentItem = document.querySelector(".content_item_plans_menu");
let menuIcon = document.querySelector(".icon_menu");


function animatePlansMenu() {
    contentItem.classList.toggle("ative_plans_item_menu");
    menuIcon.classList.toggle("active_plans_menu_icon");
}

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