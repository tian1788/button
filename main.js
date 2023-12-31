let yes = document.getElementById("yes");
let no = document.getElementById("no");
let box = document.getElementById("box");
const positions = ["10rem 0 7.5rem 5rem", "7.5rem 0 20rem 2rem", "8rem 0 7.5rem 5rem", "0"];
let random = document.getElementById("random");
let text = document.getElementById("text");
let next = document.getElementById("next");
let message = ["HAPPY NEW YEAR", "Ikaw  parin sa 2023 kala mo dyan HAHAHAHA", "Wag mo naman ako laging tulugan anteh kawawa naman ako dito nangunguila sayo HAHAHAHAHA(Daig pa pusa matulog amp)", "Im always here lang ah, alam ko minsan wala ka sa mood makipag usap pero wag mong kalimutan na hindi kana nag iisa laging akong nandito makikinig sa kahit anong problema mo ", "Flowers for you(virtual flowers muna anteh HAHAHAHA)", "Ganda mo alwaysss(lalo nung mata mo hayss ganda mo HAHAHAHA)", "thanks hindi mo lang alam gaano ko na appreciate yung presence lalo nung may problema ako HAHAHAHA", "Wala namang nagbago sa feelings ko sayo with or without chance im always here parin(Confess agad sa 2024 HAHAHAHAHA)"];
let slideshow = ["url(bye.gif)", "url(qt.gif)", "url(tulog.gif)", "url(here.gif)", "url(bulaklak.gif)", "url(gandamo.gif)", "url(thanks.gif)", "url(lu.gif)"];
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
    alert("Yieeeee pinindot HAHAHAHAHA");
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