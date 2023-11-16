document.querySelector(".content_bars").addEventListener("click", animatePlansMenu);

let contentItem = document.querySelector(".content_item_plans_menu");
let menuIcon = document.querySelector(".icon_menu");


function animatePlansMenu() {
    contentItem.classList.toggle("ative_plans_item_menu");
    menuIcon.classList.toggle("active_plans_menu_icon");
}