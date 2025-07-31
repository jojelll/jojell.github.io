<DOCUMENT filename="script.js">
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene();
});

// Starry night + moon
function drawStars() {
    for (let i = 0; i < 120; i++) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawMoon() {
    ctx.beginPath();
    ctx.arc(canvas.width - 100, 100, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#fff9b0';
    ctx.fill();
}

// Heart shape leaves
function drawHeart(x, y, size, color) {
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
