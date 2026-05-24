const reasons = [
    "You have a creative imagination ✨",
    "You bring stories to life 📖",
    "You chose to build a future through technology 💻",
    "You are constantly learning 🚀",
    "You dare to dream big 🌟",
    "You have already completed 20 incredible years 🎂",
    "You balance creativity and logic ⚖️",
    "You inspire through your passion 📚",
    "You never stop exploring new ideas 💡",
    "You are writing your own unique story ✍️",
    "You have endless potential 🌈",
    "You turn thoughts into creations 🎨",
    "You are building something meaningful 🏗️",
    "You are stronger than yesterday 💪",
    "You embrace new challenges 🎯",
    "You are creating your future one step at a time 👣",
    "You have many adventures waiting ahead 🌍",
    "You make the world more interesting 🌸",
    "The best chapters are still unwritten 📜",
    "Because being yourself is enough ❤️"
];

const reasonGrid = document.getElementById("reasonGrid");

reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.classList.add("reason");

    card.innerHTML = `
    <span class="chapter-no">
        Chapter ${index + 1}
    </span>

    <h3>${reason}</h3>

    <p>
        Another page in a wonderful story still being written.
    </p>
`;

    reasonGrid.appendChild(card);
});

function surprise() {

    alert(
        "Happy Birthday ❤️\n\nYou deserve every happiness, success and beautiful memory life has to offer.\n\nNever stop being yourself."
    );
}


/* PARTICLES */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 100; i++){

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1
    });
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "rgba(255,126,179,0.7)";

    particles.forEach(p => {

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

        p.y -= 0.3;

        if(p.y < 0){

            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
=======
const reasons = [
    "You have a creative imagination ✨",
    "You bring stories to life 📖",
    "You chose to build a future through technology 💻",
    "You are constantly learning 🚀",
    "You dare to dream big 🌟",
    "You have already completed 20 incredible years 🎂",
    "You balance creativity and logic ⚖️",
    "You inspire through your passion 📚",
    "You never stop exploring new ideas 💡",
    "You are writing your own unique story ✍️",
    "You have endless potential 🌈",
    "You turn thoughts into creations 🎨",
    "You are building something meaningful 🏗️",
    "You are stronger than yesterday 💪",
    "You embrace new challenges 🎯",
    "You are creating your future one step at a time 👣",
    "You have many adventures waiting ahead 🌍",
    "You make the world more interesting 🌸",
    "The best chapters are still unwritten 📜",
    "Because being yourself is enough ❤️"
];

const reasonGrid = document.getElementById("reasonGrid");

reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.classList.add("reason");

    card.innerHTML = `
    <span class="chapter-no">
        Chapter ${index + 1}
    </span>

    <h3>${reason}</h3>

    <p>
        Another page in a wonderful story still being written.
    </p>
`;

    reasonGrid.appendChild(card);
});

function surprise() {

    alert(
        "Happy Birthday ❤️\n\nYou deserve every happiness, success and beautiful memory life has to offer.\n\nNever stop being yourself."
    );
}


/* PARTICLES */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 100; i++){

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1
    });
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "rgba(255,126,179,0.7)";

    particles.forEach(p => {

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

        p.y -= 0.3;

        if(p.y < 0){

            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
>>>>>>> 781c7b8cf68227cb81be260d9b980f87fcf7e8a6
});