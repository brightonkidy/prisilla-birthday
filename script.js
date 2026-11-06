const hearts = document.querySelector('.hearts');
const burst = () => { for (let i=0;i<14;i++){ const h=document.createElement('span'); h.className='floating-heart'; h.textContent=['♥','✦','♡'][Math.floor(Math.random()*3)]; h.style.left=Math.random()*100+'%'; h.style.top=(70+Math.random()*30)+'%'; h.style.fontSize=(12+Math.random()*22)+'px'; h.style.animationDuration=(3+Math.random()*3)+'s'; hearts.appendChild(h); setTimeout(()=>h.remove(),6000); } };
document.getElementById('openSurprise').addEventListener('click',()=>{document.getElementById('letter').scrollIntoView();burst();});
document.querySelectorAll('.reason-card').forEach(card=>card.addEventListener('click',()=>card.classList.toggle('active')));
document.querySelectorAll('.quiz-options button').forEach(button=>button.addEventListener('click',()=>{const result=document.getElementById('quizResult');result.textContent=button.dataset.answer==='right'?'Correct! You know her very well 😌❤️':'Nice try… but the answer is Prisilla! 😄';burst();}));
document.getElementById('wishButton').addEventListener('click',()=>{document.getElementById('finalMessage').classList.add('show');document.getElementById('gift').textContent='💖';burst();});
document.getElementById('gift').addEventListener('click',()=>{document.getElementById('gift').textContent='🎉';burst();});
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('scrollProgress');
const updateProgress=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';};
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();
const sections=document.querySelectorAll('.section:not(.hero)');
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
sections.forEach(section=>revealObserver.observe(section));
const celebrateElement=element=>{element.classList.remove('celebrate');void element.offsetWidth;element.classList.add('celebrate');setTimeout(()=>element.classList.remove('celebrate'),800);};
document.querySelectorAll('.reason-card').forEach(card=>card.addEventListener('click',()=>{celebrateElement(card);burst();}));
document.querySelectorAll('.quiz-options button').forEach(button=>button.addEventListener('click',()=>celebrateElement(button)));
document.getElementById('wishButton').addEventListener('click',()=>{celebrateElement(document.getElementById('gift'));burst();setTimeout(burst,350);});
document.querySelectorAll('.effect-card').forEach(card=>card.addEventListener('click',()=>{const wasActive=card.classList.contains('active');document.querySelectorAll('.effect-card').forEach(item=>item.classList.remove('active'));if(!wasActive){card.classList.add('active');card.querySelector('.effect-message').textContent=card.dataset.effect;}celebrateElement(card);burst();}));
const reasons=[
  'Your smile has a way of making everything feel lighter.',
  'I love how dedicated you are to school and how you keep aiming higher.',
  'Your ambition reminds me that beautiful dreams are worth chasing.',
  'You make ordinary conversations feel like my favorite part of the day.',
  'I appreciate the love you give me, even when I still wonder how I deserve so much of it.',
  'You are strong, thoughtful, and more special than you realize.',
  'Life feels softer, brighter, and more fun whenever you are around.',
  'You are Prisilla—and that is already my favorite reason.'
];
let reasonIndex=0;
const reasonButton=document.getElementById('reasonButton');
const randomReason=document.getElementById('randomReason');
const reasonCount=document.getElementById('reasonCount');
const playChime=()=>{try{const AudioContext=window.AudioContext||window.webkitAudioContext;const audio=new AudioContext();const oscillator=audio.createOscillator();const gain=audio.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(520,audio.currentTime);oscillator.frequency.exponentialRampToValueAtTime(780,audio.currentTime+.16);gain.gain.setValueAtTime(.0001,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.08,audio.currentTime+.02);gain.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+.25);oscillator.connect(gain);gain.connect(audio.destination);oscillator.start();oscillator.stop(audio.currentTime+.25);}catch(error){}};
reasonButton.addEventListener('click',()=>{reasonIndex=(reasonIndex+1)%reasons.length;reasonCount.textContent=String(reasonIndex+1).padStart(2,'0');randomReason.classList.remove('reason-change');void randomReason.offsetWidth;randomReason.textContent=reasons[reasonIndex];randomReason.classList.add('reason-change');playChime();burst();celebrateElement(reasonButton);});
const affirmations=['You are deeply loved.','Your dedication will take you far.','Your smile is someone’s favorite view.','You are allowed to dream beautifully.','You are stronger than the difficult days.','You make life softer just by being you.'];
const wishes=['May this year open beautiful doors for you.','May your hard work meet wonderful opportunities.','May joy find you in unexpected places.','May God guide every step toward your dreams.','May this be the year you surprise yourself.'];
let affirmationIndex=0;let wishIndex=0;
document.getElementById('affirmationButton').addEventListener('click',()=>{affirmationIndex=(affirmationIndex+1)%affirmations.length;document.getElementById('affirmationText').textContent=affirmations[affirmationIndex];burst();});
document.getElementById('wishGenerator').addEventListener('click',()=>{wishIndex=(wishIndex+1)%wishes.length;document.getElementById('wishText').textContent=wishes[wishIndex];burst();});
