const letters = {
  1: "Sometimes I see the world through the way you used to draw it.",
  2: "There were moments I wanted to say 'I miss you,' but silence held me softer.",
  3: "You didn’t just create art, you were it.",
  4: "I’ve walked so many days carrying words that never got to be heard.",
  5: "Even when things broke, part of me stayed gentle when I thought of you.",
  6: "We changed, but I still think of you in present tense sometimes.",
  7: "I wonder if you ever read something and think of me.",
  8: "There’s a version of me that only existed when you were around.",
  9: "Even your absence taught me how deeply I could feel.",
  10: "If love had a quiet form, it’d be how I still hope you’re okay.",
  11: "Some part of me stayed at your door even after I walked away.",
  12: "You were the last time something felt effortless and real.",
  13: "Sometimes I wonder how different I’d be if we had stayed soft.",
  14: "Not every story ends. Some just pause indefinitely.",
  15: "I wish I had told you more often how deeply I admired your mind.",
  16: "You made me be gentle again. Only with you . You actually made my family jealous of you because of that hahah.",
  17: "There’s still music I can’t hear without remembering you.",
  18: "You mattered. Not just in the past. Still.",
  19: "This isn't a question, or a memory. It's just… something that still lives in me. I miss you. What you said about doing it again and changing things, it meant something to me. My feelings haven't changed, and I'm open to trying again. But this time, I need us both to show up differently. I need to see that you're ready to build something real with me, not just fall back into old patterns. I know what I bring to the table, and I know what I need in return. I won't chase or wait indefinitely, but if you're ready to meet me in the middle and do this right... I'm here."
};

const passwordFor19 = "First and only love";

const hints = [
  "4 words with spaces",
  "Starts with 'First' and ends with 'Love'", 
  "19 characters total (including spaces)",
  "Second word: 'And'",
  "Third word: 'Only'",
  "What you called me in our last conversation",
  "Your exact words about what I meant to you"
];

let failedAttempts = 0;

function typeText(text, elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      const char = text.charAt(i);
      element.innerHTML += (char === '\n') ? '<br/>' : char;
      i++;
    } else {
      clearInterval(interval);
    }
  }, 30);
}

function openLetter(id) {
  if (id === 19) {
    const userInput = prompt("This one’s special. What’s the password?");
    if (userInput && userInput.toLowerCase().trim() === passwordFor19.toLowerCase()) {
      failedAttempts = 0; // reset on success
      const modal = document.getElementById('letter-modal');
      modal.classList.remove('hidden');
      modal.classList.add('special-animation');
      const letterText = document.getElementById('letter-text');
      letterText.innerHTML = '';
      typeText(letters[19], 'letter-text');
      modal.scrollTop = 0;
      localStorage.setItem(`letterOpened${id}`, 'true');
    } else {
      if (failedAttempts < hints.length) {
        alert("❌ Nope.\n" + hints[failedAttempts]);
      } else {
        alert("❌ Nope. Think carefully…");
      }
      failedAttempts++;
    }
    return;
  }

  const text = letters[id];
  const modal = document.getElementById('letter-modal');
  modal.classList.remove('hidden');
  modal.classList.remove('special-animation');
  const letterText = document.getElementById('letter-text');
  letterText.innerHTML = '';
  typeText(text, 'letter-text');
  modal.scrollTop = 0;

  localStorage.setItem(`letterOpened${id}`, 'true');
}

function closeLetter() {
  document.getElementById('letter-modal').classList.add('hidden');
}

function openGift() {
  document.getElementById('gift-content').classList.remove('hidden');
  const audio = document.querySelector('#gift-content audio');
  if (audio) audio.play();
}

document.addEventListener('DOMContentLoaded', () => {
  // Dynamically create letter envelopes
  const envelopesContainer = document.querySelector('.envelopes');
  for (let i = 1; i <= 19; i++) {
    const div = document.createElement('div');
    div.className = 'envelope';
    div.textContent = `🎨 Letter ${i}`;
    div.setAttribute('data-aos', 'zoom-in');
    div.style.transitionDelay = (i * 100) + 'ms';
    div.onclick = () => openLetter(i);
    envelopesContainer.appendChild(div);
  }

  // Artwork flip toggle
  document.querySelectorAll('.artwork-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('blur', () => card.classList.remove('flipped'));
  });
});

// Fade in intro text after page load
window.addEventListener("load", () => {
  const introLine = document.getElementById("intro-line");
  setTimeout(() => {
    introLine.textContent = "I built this because I couldn’t un-feel you.";
  }, 3000);
});


/* =====================
   Particles: Floating Hearts & R Letters
   ===================== */
(() => {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  const hearts = '❤️';
  const letters = 'R';

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + 20 + Math.random() * 100; // start below canvas
      this.size = 14 + Math.random() * 10;
      this.speedY = 0.5 + Math.random() * 1.2;
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.type = Math.random() < 0.6 ? 'heart' : 'letter';
      this.opacity = 0.5 + Math.random() * 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.angle += this.angularSpeed;
      if (this.y < -30) this.reset();
      if (this.x < -30) this.x = width + 30;
      if (this.x > width + 30) this.x = -30;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.font = `${this.size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.type === 'heart' ? '#e44' : '#686015';
      const char = this.type === 'heart' ? hearts : letters;
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  }

  let particles = [];

  function init() {
    resize();
    particles = [];
    const count = Math.floor(width / 20); // number of particles depends on width
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('load', () => {
    init();
    animate();
  });
})();
