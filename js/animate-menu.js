document.querySelector(".content_bars").addEventListener("click", animateItemMenu);
document.querySelector(".content_item_menu").addEventListener("click", animateItemMenu);

let contentItem = document.querySelector(".content_item_menu");
let backIcon = document.querySelector(".content_bars");
let menuIcon = document.querySelector(".icon_menu");


function animateItemMenu() {
    contentItem.classList.toggle("ative_item_menu");
    backIcon.classList.toggle("active_back_icon");
    menuIcon.classList.toggle("active_menu_icon");
}

window.addEventListener('scroll', function() {


    let animateScroledStop = document.getElementById('scroledStop');
    let positionScroledStop = animateScroledStop.getBoundingClientRect().top;
    // let navIdentityScroll = document.querySelector(".nav_identity");
    let identityRight = document.querySelector(".nav_identity_right");
    let identiyLeft = document.querySelector(".nav_identity_left");
    let butonContact = document.querySelector(".buton_contact");
    
    let animatehome = document.getElementById('home');
    let positionhome = animatehome.getBoundingClientRect().top;
    let animatetopStrategy = document.getElementById('topStrategy');
    let positiontopStrategy = animatetopStrategy.getBoundingClientRect().top;
    let animateplans = document.getElementById('plans');
    let positionplans = animateplans.getBoundingClientRect().top;
    let animatecreator = document.getElementById('creator');
    let positioncreator = animatecreator.getBoundingClientRect().top;
    let animatecontact = document.getElementById('toContact');
    let positioncontact = animatecontact.getBoundingClientRect().top;
    
    let scrollTop = window.innerHeight;
    let whatsappIcon = document.querySelector(".link_whatsapp")
    let list1 = document.querySelector(".list1");
    let list2 = document.querySelector(".list2");
    let list3 = document.querySelector(".list3");
    let list4 = document.querySelector(".list4");
    let list5 = document.querySelector(".list5");
    let list6 = document.querySelector(".list6");
    let list7 = document.querySelector(".list7");
    let list8 = document.querySelector(".list8");
    let list9 = document.querySelector(".list9");
    let list10 = document.querySelector(".list10");
    let list11 = document.querySelector(".list11");
    let list12 = document.querySelector(".list12");

    console.log(positionhome);
    console.log(scrollTop, "stop")
    if(positionScroledStop <= 60) {
        // navIdentityScroll.classList.add("fixed_nav_identity");
        identityRight.classList.add("space_item");
        // identiyLeft.classList.add("blog_addedt")
        butonContact.classList.add("contact_addedt_menu");
        contentItem.classList.add("fixed_content_item")
    }

    if(positionScroledStop > 61) {
        // navIdentityScroll.classList.remove("fixed_nav_identity");
        identityRight.classList.remove("space_item");
        // identiyLeft.classList.remove("blog_addedt")
        butonContact.classList.remove("contact_addedt_menu");
        contentItem.classList.remove("fixed_content_item")

    }

    //identificador del menú

    if(-1*positionhome < scrollTop*(2/3)) {
        whatsappIcon.classList.remove("visibleWhatsapp");
        list1.classList.add("active_position_menu");
        list2.classList.remove("active_position_menu");
        list3.classList.remove("active_position_menu");
        list4.classList.remove("active_position_menu");
        list5.classList.remove("active_position_menu");
        list6.classList.remove("active_position_menu");

        list7.classList.add("active_position_menu");
        list8.classList.remove("active_position_menu");
        list9.classList.remove("active_position_menu");
        list10.classList.remove("active_position_menu");
        list11.classList.remove("active_position_menu");
        list12.classList.remove("active_position_menu");
    }

    if (positionScroledStop < scrollTop/3) {
        whatsappIcon.classList.add("visibleWhatsapp");
        list2.classList.add("active_position_menu");
        list1.classList.remove("active_position_menu");
        list3.classList.remove("active_position_menu");
        list4.classList.remove("active_position_menu");
        list5.classList.remove("active_position_menu");
        list6.classList.remove("active_position_menu");

        list8.classList.add("active_position_menu");
        list7.classList.remove("active_position_menu");
        list9.classList.remove("active_position_menu");
        list10.classList.remove("active_position_menu");
        list11.classList.remove("active_position_menu");
        list12.classList.remove("active_position_menu");
    }

    if (positiontopStrategy < scrollTop/3) {
        list3.classList.add("active_position_menu");
        list1.classList.remove("active_position_menu");
        list2.classList.remove("active_position_menu");
        list4.classList.remove("active_position_menu");
        list5.classList.remove("active_position_menu");
        list6.classList.remove("active_position_menu");

        list9.classList.add("active_position_menu");
        list7.classList.remove("active_position_menu");
        list8.classList.remove("active_position_menu");
        list10.classList.remove("active_position_menu");
        list11.classList.remove("active_position_menu");
        list12.classList.remove("active_position_menu");
    }
    if (positionplans < scrollTop/3) {
        list4.classList.add("active_position_menu");
        list1.classList.remove("active_position_menu");
        list2.classList.remove("active_position_menu");
        list3.classList.remove("active_position_menu");
        list5.classList.remove("active_position_menu");
        list6.classList.remove("active_position_menu");

        list10.classList.add("active_position_menu");
        list7.classList.remove("active_position_menu");
        list8.classList.remove("active_position_menu");
        list9.classList.remove("active_position_menu");
        list11.classList.remove("active_position_menu");
        list12.classList.remove("active_position_menu");
    }

    if (positioncreator < scrollTop/3) {
        list5.classList.add("active_position_menu");
        list1.classList.remove("active_position_menu");
        list2.classList.remove("active_position_menu");
        list3.classList.remove("active_position_menu");
        list4.classList.remove("active_position_menu");
        list6.classList.remove("active_position_menu");

        list11.classList.add("active_position_menu");
        list7.classList.remove("active_position_menu");
        list8.classList.remove("active_position_menu");
        list9.classList.remove("active_position_menu");
        list10.classList.remove("active_position_menu");
        list12.classList.remove("active_position_menu");
    }

    if (positioncontact < scrollTop/3) {
        list6.classList.add("active_position_menu");
        list1.classList.remove("active_position_menu");
        list2.classList.remove("active_position_menu");
        list3.classList.remove("active_position_menu");
        list4.classList.remove("active_position_menu");
        list5.classList.remove("active_position_menu");

        list12.classList.add("active_position_menu");
        list8.classList.remove("active_position_menu");
        list9.classList.remove("active_position_menu");
        list10.classList.remove("active_position_menu");
        list11.classList.remove("active_position_menu");
        list7.classList.remove("active_position_menu");
    }

})

