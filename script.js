// Hearts animation
const colors = ["pink", "red", "orange", "white", "#ff69b4"];
const container = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const size = Math.random() * 20 + 10;
  heart.style.width = heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Stars
const starsCanvas = document.getElementById("stars");
const ctx = starsCanvas.getContext("2d");

function resizeStarsCanvas() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
}
resizeStarsCanvas();
window.addEventListener("resize", resizeStarsCanvas);

function drawStars() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * starsCanvas.width;
    const y = Math.random() * starsCanvas.height;
    const r = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
setInterval(drawStars, 1000);

// Typewriter
const text = `[Happy Birthday, dear Celuny,  
a beacon in my life's grand sea.  
You mean so much, truly, profoundly,  
my precious friend, for all to see.

And beyond the bond of friendship's grace,  
you shine so bright, in every space.  
My precious girl, with heart so pure,  
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,  
bring endless joy, a joy to last.  
May grand adventures find your way,  
each rising sun, a brighter day.

Happy Birthday sweet Celuny,  
may life’s best gifts now come to thee.]`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

// Tree with heart leaves
function drawHeartTree() {
    const cx = canvas.width / 2;
    const cy = canvas.height - 120;
    const colors = ['#ff5c8a', '#ff85a1', '#ffc3a0', '#ffd6d6', '#fcb1b1'];

    for (let i = 0; i < 180; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 60 + 40;
        const x = cx + radius * Math.sin(angle) * Math.sin(angle) * Math.sin(angle);
        const y = cy - (radius * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) -
                    2 * Math.cos(3 * angle) - Math.cos(4 * angle))) / 16;
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawHeart(x, y, 8, color);
    }
}

// Balloons
function drawBalloons() {
    const colors = ['#ffadad', '#ffd6a5', '#caffbf', '#9bf6ff', '#bdb2ff'];
    for (let i = 0; i < 12; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height - Math.random() * 300;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(x, y, 10, 15, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawMoon();
    drawHeartTree();
    drawBalloons();
}

drawScene();

// Typewriter effect
const poem = `For My Dearest Celuny, on Her Special Day

Happy Birthday, dear Celuny,
a beacon in my life's grand sea.
You mean so much, truly, profoundly,
my precious friend, for all to see.

And beyond the bond of friendship's grace,
you shine so bright, in every space.
My precious girl, with heart so pure,
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,
bring endless joy, a joy to last.
May grand adventures find your way,
each rising sun, a brighter day.

And may the whispers of your heart's desire,
ignite a flame, lift you higher.
Let every dream begin to bloom,
dispelling shadows, conquering gloom.

With all my love, from depth untold,
a story rich, of bonds of old.
Happy Birthday, sweet Celuny,
may life's best gifts now come to thee.`;
let i = 0;
const speed = 35;
function typePoem() {
    if (i < poem.length) {
        document.getElementById("poem").innerHTML += poem.charAt(i);
        i++;
        setTimeout(typePoem, speed);
    }
}
function toggleAudio() {
    if (music.paused) {
        music.play();
        this.textContent = 'Pause Music';
    } else {
        music.pause();
        this.textContent = 'Play Music';
    }
}

window.onload = () => {
    music.volume = 0.8;
    typePoem();
};
</DOCUMENT>
// Audio control
function toggleAudio() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
        this.textContent = 'Pause Music';
    } else {
        music.pause();
        this.textContent = 'Play Music';
    }
}

window.onload = () => {
    const music = document.getElementById('music');
    music.volume = 0.8;
    typePoem();
};
</DOCUMENT>}

// Tree with heart leaves
function drawHeartTree() {
    const cx = canvas.width / 2;
    const cy = canvas.height - 120;
    const colors = ['#ff5c8a', '#ff85a1', '#ffc3a0', '#ffd6d6', '#fcb1b1'];

    for (let i = 0; i < 180; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 60 + 40;
        const x = cx + radius * Math.sin(angle) * Math.sin(angle) * Math.sin(angle);
        const y = cy - (radius * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) -
                    2 * Math.cos(3 * angle) - Math.cos(4 * angle))) / 16;
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawHeart(x, y, 8, color);
    }
}

// Balloons
function drawBalloons() {
    const colors = ['#ffadad', '#ffd6a5', '#caffbf', '#9bf6ff', '#bdb2ff'];
    for (let i = 0; i < 12; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height - Math.random() * 300;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(x, y, 10, 15, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawMoon();
    drawHeartTree();
    drawBalloons();
}

drawScene();

// Typewriter effect
const poem = `For My Dearest Celuny, on Her Special Day

Happy Birthday, dear Celuny,
a beacon in my life's grand sea.
You mean so much, truly, profoundly,
my precious friend, for all to see.

And beyond the bond of friendship's grace,
you shine so bright, in every space.
My precious girl, with heart so pure,
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,
bring endless joy, a joy to last.
May grand adventures find your way,
each rising sun, a brighter day.

And may the whispers of your heart's desire,
ignite a flame, lift you higher.
Let every dream begin to bloom,
dispelling shadows, conquering gloom.

With all my love, from depth untold,
a story rich, of bonds of old.
Happy Birthday, sweet Celuny,
may life's best gifts now come to thee.`;
let i = 0;
const speed = 35;
function typePoem() {
    if (i < poem.length) {
        document.getElementById("poem").innerHTML += poem.charAt(i);
        i++;
        setTimeout(typePoem, speed);
    }
}

window.onload = () => {
    const music = document.getElementById("music");
    music.volume = 0.8;
    music.play();
    typePoem();
};
