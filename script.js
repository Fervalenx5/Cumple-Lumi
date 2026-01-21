const evento = new Date("2026-03-22T11:00:00").getTime();

/* COUNTDOWN */
function countdown() {
  const now = new Date().getTime();
  let diff = evento - now;

  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = "🎉 ¡Es hoy!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.textContent = d.toString().padStart(2, "0");
  hours.textContent = h.toString().padStart(2, "0");
  minutes.textContent = m.toString().padStart(2, "0");
  seconds.textContent = s.toString().padStart(2, "0");
}

setInterval(countdown, 1000);
countdown();

/* CONFETTI SUAVE */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height - canvas.height,
  r: Math.random() * 4 + 2,
  d: Math.random() * 2 + 1
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(233, 150, 180, 0.6)";

  confetti.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
  });
}

let frames = 0;
function animateConfetti() {
  if (frames < 180) {
    drawConfetti();
    frames++;
    requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

animateConfetti();
