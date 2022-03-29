let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

let mouseCursor2 = document.querySelector(".cursorback");
window.addEventListener('mousemove',cursorback);
function cursorback(e){
    mouseCursor2.style.top = e.pageY + 'px';
    mouseCursor2.style.left = e.pageX + 'px';
}

function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
}
}

window.addEventListener("scroll", reveal);

const txtAnim = document.querySelector('.acceuil h1');

new Typewriter (txtAnim, {
    deleteSpeed: 20
})
.changeDelay(35)
.typeString('Moi c\'est Pierre Hochard')
.pauseFor(1000)
.typeString(', <span style="color:Crimson;">Ingénieur </span>!')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color:LightGreen;">Mécatronicien </span>!')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color:powderblue;">INSAien </span>!')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color:Plum;">Dev CSS </span>!')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color:OrangeRed;">Runner </span>!')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:Khaki;">Guitariste </span>!')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color:Pink;">Engagé </span>!')
.pauseFor(1000)
.deleteChars(8)
.changeDelay(200)
.typeString('Polyvalent ...')

.pauseFor(1000)
.start()