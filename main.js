let yes = document.getElementById("yes");
let no = document.getElementById("no");
let box = document.getElementById("box");
const positions = ["10rem 0 7.5rem 5rem", "7.5rem 0 20rem 2rem", "8rem 0 7.5rem 5rem", "0"];
let random = document.getElementById("random");
let text = document.getElementById("text");
let next = document.getElementById("next");
let message = ["basta message 1", "basta message2", "basta message 3"];
let slideshow = ["url(qt.gif)", "url(tulog.gif)", "url(here.gif)"];
let noAlert = ["bat no?", "sure ka naba?","sure na talaga?", "ayaw mo mag yes?!"];

let count = 0;
let noCount = 0;

no.addEventListener("click", ()=> {
    number = Math.floor(Math.random() * positions.length);
    no.style.position = "absolute";
    no.style.display = "block";
    no.style.margin = positions[number];
    if(noCount == (noAlert.length)) {
        noCount = 0;
        alert(noAlert[noCount]);
    } else {
        alert(noAlert[noCount]);
        noCount++;
    }
    console.log(noCount);
});

yes.addEventListener("click", ()=> {
    box.style.display = "none";
    random.style.display = "block";
    text.style.display = "block";
    text.innerHTML = message[count];
    random.style.backgroundImage = slideshow[count];
});

next.addEventListener("click", ()=> {
    if(count == (message.length) - 1){
        count = 0;
        text.innerHTML = message[count];
        random.style.backgroundImage = slideshow[count];
        
    } else {
        count++;
        text.innerHTML = message[count];
        random.style.backgroundImage = slideshow[count];
    }

});



