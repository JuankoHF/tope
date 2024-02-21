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

document.getElementById('question1').addEventListener('click', openAnswer1);
document.getElementById('question2').addEventListener('click', openAnswer2);
document.getElementById('question3').addEventListener('click', openAnswer3);
document.getElementById('question4').addEventListener('click', openAnswer4);

let ans1 = document.querySelector('.answers1');
let ans2 = document.querySelector('.answers2');
let ans3 = document.querySelector('.answers3');
let ans4 = document.querySelector('.answers4');

let quest1 = document.getElementById('question1');
let quest2 = document.getElementById('question2');
let quest3 = document.getElementById('question3');
let quest4 = document.getElementById('question4');

function openAnswer1() {
    ans1.classList.toggle('openAns1');
    quest1.classList.toggle('openQuest1');
}
function openAnswer2() {
    ans2.classList.toggle('openAns2');
    quest2.classList.toggle('openQuest2');
}
function openAnswer3() {
    ans3.classList.toggle('openAns3');
    quest3.classList.toggle('openQuest3');
}

function openAnswer4() {
    ans4.classList.toggle('openAns4');
    quest4.classList.toggle('openQuest4');
}