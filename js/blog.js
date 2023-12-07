document.querySelector(".article_content").addEventListener("click", activeNav);

let navItems = document.querySelector(".no_active");
let spanDown = document.querySelector(".article_content")
function activeNav() {
    navItems.classList.toggle("blog_nav_item_menu");
    spanDown.classList.toggle("span_up")
}