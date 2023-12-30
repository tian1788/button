let yes = document.getElementById("yes");
let no = document.getElementById("no");
let box = document.getElementById("box");
const positions = ["20rem 0 25rem 25rem", "15rem 0 20rem 20rem", "10rem 0 15rem 15rem"];
let random = document.getElementById("random");
let text = document.getElementById("text");
let next = document.getElementById("next");
let message = ["basta message 1", "basta message2", "basta message 3"];
let count = -1;

no.addEventListener("click", ()=> {
    number = Math.floor(Math.random() * positions.length);
    no.style.position = "absolute";
    no.style.display = "block";
    no.style.margin = positions[number];
});

yes.addEventListener("click", ()=> {
    box.style.display = "none";
    random.style.display = "block";
    text.innerHTML = "basta text to";

});

next.addEventListener("click", ()=> {
    if(count >= (message.length) - 1){
        count = 0;
        text.innerHTML = message[count];
        
    } else {
        count++;
        text.innerHTML = message[count];
    }
});



