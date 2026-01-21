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

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const confetti = Array.from({ length: 70 }, () => createPiece());

function createPiece() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.5 + 1,
    d: Math.random() * 0.4 + 0.2,
    o: Math.random() * 0.4 + 0.2
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,182,193,${p.o})`; // rosa delicado
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.d;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();


window.addEventListener("load", animate);
function confirmar() {
  if (navigator.vibrate) navigator.vibrate(50);
  window.open("https://wa.me/54XXXXXXXXX");
}

