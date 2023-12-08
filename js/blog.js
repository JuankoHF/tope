document.querySelector(".article_content").addEventListener("click", activeNav);

let navItems = document.querySelector(".no_active");
let spanDown = document.querySelector(".article_content")
function activeNav() {
    navItems.classList.toggle("blog_nav_item_menu");
    spanDown.classList.toggle("span_up")
}

window.addEventListener('scroll', function() {

    let animateScrollEfect = document.getElementById("scrollEfect");
    let positionScrollEfect = animateScrollEfect.getBoundingClientRect().top;
    let boxHeader = document.querySelector(".header_blog_content");
    console.log(positionScrollEfect)


    if(positionScrollEfect < 160) {
        boxHeader.classList.add("header_box_shadow");
    }
    if(positionScrollEfect >= 160) {
        boxHeader.classList.remove("header_box_shadow");
    }
})