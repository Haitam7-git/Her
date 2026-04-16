// ========== SCRIPT.JS - ENHANCED VERSION ==========
// Love Vault for Rania - Refined Interactive Experience

(function() {
    // ============================================
    // PART 1: FLOATING LETTER 'R' AND HEARTS
    // ============================================
    
    function createFloatingRs() {
        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        const totalR = isMobile ? 50 : 120;

        for (let i = 0; i < totalR; i++) {
            const rElement = document.createElement('div');
            rElement.className = 'r-float';
            const size = Math.floor(Math.random() * (isMobile ? 16 : 24)) + (isMobile ? 12 : 16);
            rElement.style.fontSize = size + 'px';
            rElement.style.left = Math.random() * 100 + '%';
            const duration = Math.random() * 8 + 10;
            rElement.style.animationDuration = duration + 's';
            rElement.style.animationDelay = Math.random() * 10 + 's';
            rElement.style.opacity = Math.random() * 0.35 + 0.15;
            rElement.innerText = 'R';
            document.body.appendChild(rElement);
        }
    }

    function createFloatingHearts() {
        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        const heartCount = isMobile ? 20 : 50;

        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = Math.random() > 0.6 ? '❤️' : '🌸';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 14 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 10 + 11) + 's';
            heart.style.animationDelay = (Math.random() * 14) + 's';
            heart.style.opacity = Math.random() * 0.4 + 0.15;
            document.body.appendChild(heart);
        }
    }

    function startContinuousRGeneration() {
        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        const batchSize = isMobile ? 2 : 6;
        const interval = isMobile ? 6000 : 4200;

        setInterval(() => {
            for (let i = 0; i < batchSize; i++) {
                const rElem = document.createElement('div');
                rElem.className = 'r-float';
                const sizeVar = Math.floor(Math.random() * (isMobile ? 14 : 20)) + (isMobile ? 12 : 14);
                rElem.style.fontSize = sizeVar + 'px';
                rElem.style.left = Math.random() * 100 + '%';
                rElem.style.animationDuration = (Math.random() * 9 + 8) + 's';
                rElem.style.animationDelay = '0s';
                rElem.style.opacity = Math.random() * 0.3 + 0.12;
                rElem.innerText = 'R';
                document.body.appendChild(rElem);
                
                rElem.addEventListener('animationend', () => {
                    if (rElem.parentNode) rElem.remove();
                });
            }
        }, interval);
    }
    
    // ============================================
    // PART 2: AFFIRMATION MESSAGES (Infinite loop, no repeats)
    // ============================================
    
    const loveMessages = [
    "Habibti when the world is unkind to you come to me. Come find me.",
    "Let me hold the weight of today. You just breathe. I love every inch of who you are.",
    "You are the love of my life. And I will spend forever showing you that.",
    "When you feel small, remember that you take up my entire heart. There's no room for anything but you.",
    "The way your eyes light up when you talk about your dreams that's my favorite movie. I'll never stop watching.",
    "I wish you could see yourself the way I see you, radiant, resilient, and impossibly beautiful.",
    "The way you draw feels like you’re translating your soul onto paper. I could stare at your art for hours and still find something new to love.",
    "You’re not just talented, you’re rare. The way you see the world and turn it into art makes me admire you more every day.",
    "Your art says things words never could. And somehow, every piece you make feels like a part of you I get to fall in love with.",
    "You’re my favorite artist a Rania, not just because you’re good, but because everything you create feels alive.",
    "The way your mind works, the way your hands bring ideas to life, it’s honestly one of the most beautiful things about you.",
    "I love watching you create. It’s like seeing magic happen quietly, effortlessly, like it’s just who you are.",
    "Every time you draw or paint something, I’m reminded how insanely talented you are, and how lucky I am to witness it.",
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
    "You don’t even realize how stunning you are. It’s in the little things, the way you smile, the way your eyes speak before you do.",
    "Rania, you’re genuinely gorgeous. Not in a loud way, but in a quiet way that stays with me.",
    "I could look at you for hours and still feel like I haven’t seen enough. That’s how beautiful you are to me.",
    "You’re the kind of beautiful that doesn’t fade. It’s not just your face, it’s your presence, your energy, everything.",
    "Even on the days you don’t feel it, you’re still one of the most beautiful people I’ve ever seen.",
    "Rou7i, you don’t need anything to be more beautiful. You already are, exactly as you are right now.",
    "There’s a softness in your beauty that makes it impossible to ignore.",
    "You’re not just pretty, you’re captivating. The kind of beautiful that makes people stop and feel something.",
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
    "There is a softness in you that the world didn't deserve, but I promise to protect it with everything I have.",
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
        const nextIndex = remainingIndices.pop();
        return loveMessages[nextIndex];
    }
    
    function updateMessageWithLove() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const newMsg = getNextUniqueMessage();
        const quoteIcon = document.querySelector('.quote-icon');
        
        // Smooth fade out
        dynamicMsgSpan.style.transition = 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        dynamicMsgSpan.style.opacity = '0';
        
        setTimeout(() => {
            dynamicMsgSpan.innerText = newMsg;
            
            // Icon pulse animation
            if (quoteIcon) {
                quoteIcon.style.transform = 'scale(1.3) rotate(20deg)';
                quoteIcon.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                setTimeout(() => {
                    if (quoteIcon) quoteIcon.style.transform = 'scale(1) rotate(0deg)';
                }, 200);
            }
            
            // Fade in with subtle scale
            dynamicMsgSpan.style.opacity = '1';
            
            // Card subtle pop
            if (affirmContainer) {
                affirmContainer.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                affirmContainer.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    if (affirmContainer) affirmContainer.style.transform = 'scale(1)';
                }, 300);
            }
            
            isTransitioning = false;
        }, 200);
    }
    
    function setInitialMessage() {
        initMessagePool();
        const firstIndex = remainingIndices.pop();
        const firstMsg = loveMessages[firstIndex];
        if (dynamicMsgSpan) dynamicMsgSpan.innerText = firstMsg;
    }
    
    // ============================================
    // PART 3: HIGH-FIDELITY PHOTO BOUQUET
    // ============================================
    
    // IMPORTANT: Replace 'bouquet-300-roses-rouges.jpg' with your actual bouquet image path
    // You can change this to any image URL or local path
    const BOUQUET_IMAGE_URL = 'bouquet-300-roses-rouges.jpg';
    // Alternative: use a local image like 'bouquet.jpg' or any rose bouquet image
    
    function showInitialBouquet() {
        // Check if bouquet already exists to prevent duplicates
        if (document.querySelector('.full-screen-bouquet')) return;
        
        const overlay = document.createElement('div');
        overlay.className = 'full-screen-bouquet';
        overlay.id = 'initial-overlay';

       overlay.innerHTML = `
    <div class="bouquet-image-container" id="imgWrapper">
        <img src="${BOUQUET_IMAGE_URL}" class="real-bouquet-img" id="mainBouquet" alt="A beautiful bouquet of roses for you, Rania">
    </div>
    <div class="quote-card-initial" id="quoteCard">
        <h2>🌹 For You, Rania 🌹</h2>
        <p>
            Roses remind me of you.
            I searched for the perfect bouquet, but no flower could ever match the beauty you bring into my life.
            Keep these roses close, just like I keep you in my heart, always loved.
        </p>
        <button id="takeBtn">💐 Keep These, They're Yours 💐</button>
    </div>
`;

        document.body.appendChild(overlay);

        const takeBtn = document.getElementById('takeBtn');
        if (takeBtn) {
            takeBtn.addEventListener('click', function() {
                const wrapper = document.getElementById('imgWrapper');
                const quoteCard = document.getElementById('quoteCard');
                
                // Phase 1: Fade out the quote and background
                if (quoteCard) {
                    quoteCard.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    quoteCard.style.opacity = '0';
                }
                
                overlay.style.transition = 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                overlay.style.background = 'transparent';
                overlay.style.backdropFilter = 'blur(0px)';

                // Get position for animation
                const rect = wrapper.getBoundingClientRect();
                wrapper.style.position = 'fixed';
                wrapper.style.top = rect.top + 'px';
                wrapper.style.left = rect.left + 'px';
                wrapper.style.width = rect.width + 'px';
                wrapper.style.margin = '0';
                wrapper.style.transition = 'all 1.4s cubic-bezier(0.6, -0.28, 0.735, 0.045)';
                
                setTimeout(() => {
                    wrapper.style.top = 'calc(100% - 120px)';
                    wrapper.style.left = 'calc(100% - 110px)';
                    wrapper.style.width = '95px';
                    wrapper.style.transform = 'rotate(8deg)';
                }, 50);

                // Phase 2: Remove overlay and create permanent corner bouquet
                setTimeout(() => {
                    overlay.remove();
                    createPermanentCornerBouquet();
                }, 1500);
            });
        }
    }

    function createPermanentCornerBouquet() {
        // Check if it already exists to prevent duplicates
        if (document.querySelector('.bouquet-minified')) return;

        const miniBouquet = document.createElement('div');
        miniBouquet.className = 'bouquet-minified';
        miniBouquet.innerHTML = `
            <img src="${BOUQUET_IMAGE_URL}" style="width:100%; height:auto; border-radius: 16px; display: block;">
        `;
        
        // When she clicks the corner bouquet, it brings back the big view
        miniBouquet.onclick = (e) => {
            e.stopPropagation();
            miniBouquet.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            miniBouquet.style.transform = 'scale(0) rotate(-30deg)';
            miniBouquet.style.opacity = '0';
            setTimeout(() => {
                miniBouquet.remove();
                showInitialBouquet();
            }, 400);
        };
        
        document.body.appendChild(miniBouquet);
    }
    
    // ============================================
    // PART 4: EVENT LISTENERS & INITIALIZATION
    // ============================================
    
    function onRemindClick() {
        if (isTransitioning) return;
        updateMessageWithLove();
        
        if (remindBtn) {
            remindBtn.style.transform = 'scale(0.94)';
            setTimeout(() => {
                if (remindBtn) remindBtn.style.transform = '';
            }, 100);
        }
    }
    
    const messageStageDiv = document.querySelector('.message-stage');
    if (messageStageDiv) {
        messageStageDiv.addEventListener('click', (e) => {
            if (e.target.closest('#remindBtn')) return;
            if (!isTransitioning) {
                updateMessageWithLove();
            }
        });
    }
    
    if (remindBtn) {
        remindBtn.addEventListener('click', onRemindClick);
    }
    
    // Initialize everything when page loads
    window.addEventListener('DOMContentLoaded', () => {
        // 1. Initial Data Setup
        initMessagePool();
        setInitialMessage();

        // 2. Visual Elements (Staggered)
        createFloatingRs();
        setTimeout(createFloatingHearts, 200);
        setTimeout(startContinuousRGeneration, 400);

        // 3. The Bouquet Launch - Force check for the overlay
        console.log("Launching Vault..."); 
        showInitialBouquet();
    });

    // Event listener for the Remind Button
    if (remindBtn) {
        remindBtn.addEventListener('click', onRemindClick);
    }
    
})();
