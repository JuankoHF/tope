document.querySelector(".description_door").addEventListener("click", openDescription);
document.querySelector(".description_door2").addEventListener("click", openDescription2);


let descriptionClose = document.querySelector(".description_close");
let descriptionClose2 = document.querySelector(".description_close2");


let descriptionDoor = document.querySelector(".description_door");
let descriptionDoor2 = document.querySelector(".description_door2");



function openDescription() {
    descriptionClose.classList.toggle("description_open");
    descriptionDoor.classList.toggle("dor_arrow_up");
}
function openDescription2() {
    descriptionClose2.classList.toggle("description_open");
    descriptionDoor2.classList.toggle("dor_arrow_up");
}
