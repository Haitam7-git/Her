// ========== SCRIPT.JS - MOBILE OPTIMIZED ==========
// Love Vault for Rania - Lightweight & Smooth

(function() {
    // ============================================
    // PART 1: FLOATING ELEMENTS (Reduced, Efficient)
    // ============================================
    
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    
    function createFloatingRs() {
        const count = isMobile ? 25 : 70;
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = 'r-float';
            const size = Math.floor(Math.random() * (isMobile ? 14 : 20)) + (isMobile ? 10 : 14);
            el.style.fontSize = size + 'px';
            el.style.left = Math.random() * 100 + '%';
            el.style.animationDuration = (Math.random() * 8 + 10) + 's';
            el.style.animationDelay = Math.random() * 10 + 's';
            el.style.opacity = Math.random() * 0.3 + 0.1;
            el.innerText = 'R';
            document.body.appendChild(el);
        }
    }

    function createFloatingHearts() {
        const count = isMobile ? 12 : 35;
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = Math.random() > 0.6 ? '❤️' : '🌸';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 12 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 10 + 11) + 's';
            heart.style.animationDelay = Math.random() * 14 + 's';
            heart.style.opacity = Math.random() * 0.4 + 0.1;
            document.body.appendChild(heart);
        }
    }

    // No continuous generation on mobile to save battery
    if (!isMobile) {
        setInterval(() => {
            if (document.querySelectorAll('.r-float').length < 40) {
                const rElem = document.createElement('div');
                rElem.className = 'r-float';
                rElem.style.fontSize = (Math.random() * 14 + 12) + 'px';
                rElem.style.left = Math.random() * 100 + '%';
                rElem.style.animationDuration = (Math.random() * 9 + 8) + 's';
                rElem.style.opacity = Math.random() * 0.3 + 0.1;
                rElem.innerText = 'R';
                document.body.appendChild(rElem);
                rElem.addEventListener('animationend', () => rElem.remove());
            }
        }, 6000);
    }
    
    // ============================================
    // PART 2: AFFIRMATIONS (No repeats, smooth)
    // ============================================
    
    const loveMessages = [
        "Habibti when the world is unkind to you come to me. Come find me.",
        "Let me hold the weight of today. You just breathe. I love every inch of who you are.",
        "You are the love of my life. And I will spend forever showing you that.",
        "When you feel small, remember that you take up my entire heart. There's no room for anything but you.",
        "The way your eyes light up when you talk about your dreams that's my favorite movie. I'll never stop watching.",
        "I wish you could see yourself the way I see you, radiant, resilient, and impossibly beautiful.",
        "Your art isn’t just beautiful, it feels real. It has emotion, depth, and that’s something not everyone has.",
        "Rania, you don’t just make art, you create feelings. And I swear, I fall for you a little more every time I see your work.",
        "You’re my favorite artist, always will be. Not because I have to say it, but because nothing and no one moves me the way your art does.",
        "Some people search their whole lives for a love like this. I found it the day I met you, Rania.",
        "Your worth is not measured by numbers or reflections. It's infinite, and I'll remind you until you believe it.",
        "That laugh you hide, it's the melody that makes my world make sense. Let it out, my love.",
        "You don't have to perform strength with me. I'll be strong for both of us when you're tired.",
        "Every scar, every curve, every quiet moment I treasure them because they're yours.",
        "Rania, you are the poetry I never knew how to write. Soft, real, and unforgettable.",
        "I'm not asking you to be okay. I'm asking you to let me be next to you until you are.",
        "You are allowed to retreat into yourself. I'll wait at the door with open arms. Always.",
        "Rania, you are effortlessly beautiful. Not just in the way you look, but in the way you exist.",
        "There’s something about you that just stays in my mind. The way you look, the way you move, the way you are, it’s all beautiful to me.",
        "Rania, you’re genuinely gorgeous. Not in a loud way, but in a quiet way that stays with me.",
        "I could look at you for hours and still feel like I haven’t seen enough. That’s how beautiful you are to me.",
        "You’re the kind of beautiful that doesn’t fade. It’s not just your face, it’s your presence, your energy, everything.",
        "Even on the days you don’t feel it, you’re still one of the most beautiful people I’ve ever seen.",
        "Rou7i, you don’t need anything to be more beautiful. You already are, exactly as you are right now.",
        "That voice in your head that tells you you're not enough, it's lying. You are my enough and more.",
        "Your presence alone makes my heart feel full. Not what you do, not how you look just you breathing.",
        "You are not defined by that painful moment. You are defined by your kindness, your fire, and the way you love.",
        "I choose you, messy days, quiet nights, tears, laughter, everything. No conditions.",
        "If I could give you one gift, it would be the ability to see yourself through my eyes. You'd never doubt again.",
        "Rest in my love tonight. You don't have to earn it. It's already yours, completely.",
        "That insecurity you carry, it has no power here. I see only the woman I fall deeper for every sunrise.",
        "The most attractive thing about you is your soul. And it's the most beautiful soul I've ever known.",
        "You're not too much. You're not difficult. You're human, and you're loved beyond reason.",
        "Every version of you, healing, breaking, glowing belongs with me. I'm not going anywhere.",
        "Rania, you made my life softer just by existing in it. Let me return that softness to you.",
        "You are not the hurt that was said to you. You are the warmth I come home to, even from afar.",
        "I love you with a love that doesn't ask you to be different. Just be here. I'll handle the rest.",
        "If the world forgets how to be gentle, I will remember for you. I will be the place where you can rest.",
        "You don't have to shine all the time. Even your quiet, your silence, your softness is something I adore.",
        "There is nothing about you I would trade, not your flaws, not your doubts, not even your hardest days.",
        "When you doubt yourself, come closer to me. I will remind you of who you really are.",
        "You are not hard to love. You are simply waiting for someone who knows how to love you right. That's me.",
        "Even on your worst days, you are still the person I would choose without hesitation.",
        "You are the kind of peace people spend their whole lives searching for, and I get to hold you.",
        "I don't love you for who you could be. I love you deeply for who you already are.",
        "Your heart is my favorite place. No matter where I am, that's where I feel at home.",
        "You don't need to be perfect to be loved. You just need to be you, and that's more than enough for me.",
        "If your thoughts get loud, come sit with me. We don't have to fix anything, we just have to be together.",
        "I see the parts of you that you try to hide, and I still choose you, every single time.",
        "You are not a burden. Loving you is the easiest, most natural thing I've ever done.",
        "Even your tears feel sacred to me, because they belong to you, and you matter that much.",
        "If you ever feel lost, remember this, you are always found in me.",
        "You don't have to fight alone anymore. I am here, and I am not leaving.",
        "Your existence alone makes my life better in ways I can't even explain.",
        "I would choose you in every version of this life, in every timeline, in every possible world.",
        "You are not too sensitive. You are deeply alive, and I love that about you.",
        "If I could, I would take every harsh word you've ever heard and replace it with love until it feels real.",
        "Being loved by you is my favorite thing. Loving you is my purpose.",
        "You don't need to prove anything to me. You already have my whole heart.",
        "I don't just love you when you're strong. I love you even more when you're soft and tired.",
        "You are safe with me, always, no conditions, no exceptions."
    ];
    
    let remainingIndices = [];
    let isTransitioning = false;
    const dynamicMsgSpan = document.getElementById('dynamicMsg');
    const affirmContainer = document.getElementById('affirmationMsg');
    const remindBtn = document.getElementById('remindBtn');
    
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    function initMessagePool() {
        if (remainingIndices.length === 0) {
            remainingIndices = [...Array(loveMessages.length).keys()];
            remainingIndices = shuffleArray(remainingIndices);
        }
    }
    
    function getNextUniqueMessage() {
        initMessagePool();
        return loveMessages[remainingIndices.pop()];
    }
    
    function updateMessageWithLove() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const newMsg = getNextUniqueMessage();
        const quoteIcon = document.querySelector('.quote-icon');
        
        dynamicMsgSpan.style.opacity = '0';
        setTimeout(() => {
            dynamicMsgSpan.innerText = newMsg;
            if (quoteIcon) {
                quoteIcon.style.transform = 'scale(1.2)';
                setTimeout(() => { if(quoteIcon) quoteIcon.style.transform = ''; }, 150);
            }
            dynamicMsgSpan.style.opacity = '1';
            if (affirmContainer) {
                affirmContainer.style.transform = 'scale(1.01)';
                setTimeout(() => { if(affirmContainer) affirmContainer.style.transform = ''; }, 200);
            }
            isTransitioning = false;
        }, 150);
    }
    
    function setInitialMessage() {
        initMessagePool();
        if (dynamicMsgSpan) dynamicMsgSpan.innerText = loveMessages[remainingIndices.pop()];
    }
    
    // ============================================
    // PART 3: BOUQUET (Optimized Animation)
    // ============================================
    
    // IMPORTANT: Replace with your actual bouquet image path
    const BOUQUET_IMAGE_URL = 'bouquet-300-roses-rouges.jpg';
    
    function showInitialBouquet() {
        if (document.querySelector('.full-screen-bouquet')) return;
        
        const overlay = document.createElement('div');
        overlay.className = 'full-screen-bouquet';
        overlay.id = 'initial-overlay';
        overlay.innerHTML = `
            <div class="bouquet-image-container" id="imgWrapper">
                <img src="${BOUQUET_IMAGE_URL}" class="real-bouquet-img" alt="Roses for you, Rania" loading="eager">
            </div>
            <div class="quote-card-initial" id="quoteCard">
                <h2>🌹 For You, Rania 🌹</h2>
                <p>Roses remind me of you. I searched for the perfect bouquet, but no flower could ever match the beauty you bring into my life. Keep these roses close, just like I keep you in my heart, always loved.</p>
                <button id="takeBtn">💐 Keep These, They're Yours 💐</button>
            </div>
        `;
        document.body.appendChild(overlay);
        
        const takeBtn = document.getElementById('takeBtn');
        if (takeBtn) {
            takeBtn.addEventListener('click', () => {
                const wrapper = document.getElementById('imgWrapper');
                const quoteCard = document.getElementById('quoteCard');
                if (quoteCard) quoteCard.style.opacity = '0';
                overlay.style.background = 'transparent';
                overlay.style.backdropFilter = 'blur(0px)';
                
                const rect = wrapper.getBoundingClientRect();
                wrapper.style.position = 'fixed';
                wrapper.style.top = rect.top + 'px';
                wrapper.style.left = rect.left + 'px';
                wrapper.style.width = rect.width + 'px';
                wrapper.style.margin = '0';
                wrapper.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    wrapper.style.top = 'calc(100% - 105px)';
                    wrapper.style.left = 'calc(100% - 95px)';
                    wrapper.style.width = '75px';
                    wrapper.style.transform = 'rotate(5deg)';
                }, 20);
                
                setTimeout(() => {
                    overlay.remove();
                    createPermanentCornerBouquet();
                }, 900);
            });
        }
    }
    
    function createPermanentCornerBouquet() {
        if (document.querySelector('.bouquet-minified')) return;
        const mini = document.createElement('div');
        mini.className = 'bouquet-minified';
        mini.innerHTML = `<img src="${BOUQUET_IMAGE_URL}" alt="Your bouquet">`;
        mini.onclick = (e) => {
            e.stopPropagation();
            mini.style.transform = 'scale(0)';
            setTimeout(() => {
                mini.remove();
                showInitialBouquet();
            }, 200);
        };
        document.body.appendChild(mini);
    }
    
    // ============================================
    // PART 4: EVENT LISTENERS
    // ============================================
    
    function onRemindClick() {
        if (isTransitioning) return;
        updateMessageWithLove();
        if (remindBtn) {
            remindBtn.style.transform = 'scale(0.95)';
            setTimeout(() => { if(remindBtn) remindBtn.style.transform = ''; }, 100);
        }
    }
    
    const messageStage = document.querySelector('.message-stage');
    if (messageStage) {
        messageStage.addEventListener('click', (e) => {
            if (!e.target.closest('#remindBtn') && !isTransitioning) updateMessageWithLove();
        });
    }
    if (remindBtn) remindBtn.addEventListener('click', onRemindClick);
    
    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
        setInitialMessage();
        createFloatingRs();
        setTimeout(createFloatingHearts, 300);
        showInitialBouquet();
    });
})();
