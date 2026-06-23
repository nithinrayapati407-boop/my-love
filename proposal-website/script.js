// ======================
// Music Player
// ======================

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {
        song.play();
        musicBtn.innerHTML = "⏸ Pause Song";
    } else {
        song.pause();
        musicBtn.innerHTML = "🎵 Play Song";
    }

    playing = !playing;

});

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ======================
// NO Button Escape
// ======================

const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 200);

    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Mobile Click

noBtn.addEventListener("click", () => {

    const x = Math.random() * (window.innerWidth - 200);

    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// ======================
// YES Button
// ======================

const yesBtn = document.getElementById("yes");

const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {

    launchConfetti();

    result.innerHTML = `

    <h1 style="font-size:60px;color:#ff4fa3;">
    ❤️ YAYYYY ❤️
    </h1>

    <h2>You Said YES!!</h2>

    <p style="font-size:22px;">
    You just made me the happiest person in the world.
    </p>

    <h2>I LOVE YOU SO MUCH ❤️</h2>

    `;

    createHearts();

});

// ======================
// Floating Hearts
// ======================

function createHearts(){

    for(let i=0;i<80;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-50px";

        heart.style.fontSize=(20+Math.random()*40)+"px";

        heart.style.animation="floatUp "+(4+Math.random()*4)+"s linear";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    }

}

// ======================
// Confetti
// ======================

function launchConfetti(){

    for(let i=0;i<300;i++){

        let conf=document.createElement("div");

        conf.style.position="fixed";

        conf.style.width="10px";

        conf.style.height="10px";

        conf.style.background=randomColor();

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.opacity="1";

        conf.style.borderRadius="50%";

        conf.style.pointerEvents="none";

        conf.style.animation="fall "+(3+Math.random()*3)+"s linear";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.remove();

        },6000);

    }

}

function randomColor(){

    const colors=[

        "#ff4fa3",

        "#ffb6c1",

        "#ff1493",

        "#ffd700",

        "#ffffff",

        "#ff69b4"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}

// ======================
// Scroll Animation
// ======================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});

// ======================
// Welcome Message
// ======================

window.onload=()=>{

    console.log("❤️ Proposal Website Loaded ❤️");

};

// ======================
// Keyboard Surprise
// ======================

document.addEventListener("keydown",(e)=>{

    if(e.key==="L"){

        alert("❤️ I Love You ❤️");

    }

});

// ======================
// Resize Safety
// ======================

window.addEventListener("resize",()=>{

    noBtn.style.position="static";

});