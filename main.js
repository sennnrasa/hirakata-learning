// ================= DATA KOSAKATA (50 items) =================
const vocabList = [
    { word: "いち", answer: "Ichi", options: ["Ichi", "Ni", "San", "Yon"] },
    { word: "に", answer: "Ni", options: ["Ichi", "Ni", "San", "Yon"] },
    { word: "さん", answer: "San", options: ["Ni", "San", "Yon", "Go"] },
    { word: "よん", answer: "Yon", options: ["San", "Yon", "Go", "Roku"] },
    { word: "ご", answer: "Go", options: ["Yon", "Go", "Roku", "Nana"] },
    { word: "ろく", answer: "Roku", options: ["Go", "Roku", "Nana", "Hachi"] },
    { word: "なな", answer: "Nana", options: ["Roku", "Nana", "Hachi", "Kyuu"] },
    { word: "はち", answer: "Hachi", options: ["Nana", "Hachi", "Kyuu", "Juu"] },
    { word: "きゅう", answer: "Kyuu", options: ["Hachi", "Kyuu", "Juu", "Hyaku"] },
    { word: "じゅう", answer: "Juu", options: ["Kyuu", "Juu", "Hyaku", "Sen"] },
    { word: "おはよう", answer: "Ohayou", options: ["Ohayou", "Konnichiwa", "Sayounara", "Arigatou"] },
    { word: "こんにちは", answer: "Konnichiwa", options: ["Ohayou", "Konnichiwa", "Konbanwa", "Sayounara"] },
    { word: "こんばんは", answer: "Konbanwa", options: ["Konnichiwa", "Konbanwa", "Oyasumi", "Ohayou"] },
    { word: "さようなら", answer: "Sayounara", options: ["Konnichiwa", "Sayounara", "Mata", "Jaane"] },
    { word: "ありがとう", answer: "Arigatou", options: ["Sumimasen", "Arigatou", "Onegaishimasu", "Gomen"] },
    { word: "すみません", answer: "Sumimasen", options: ["Arigatou", "Sumimasen", "Gomennasai", "Onegaishimasu"] },
    { word: "ごめんなさい", answer: "Gomennasai", options: ["Sumimasen", "Gomennasai", "Arigatou", "Daijoubu"] },
    { word: "おねがいします", answer: "Onegaishimasu", options: ["Arigatou", "Sumimasen", "Onegaishimasu", "Gomennasai"] },
    { word: "はい", answer: "Hai", options: ["Hai", "Iie", "Sou", "Chigau"] },
    { word: "いいえ", answer: "Iie", options: ["Hai", "Iie", "Sou desu", "Tabun"] },
    { word: "みず", answer: "Mizu", options: ["Mizu", "Hi", "Kaze", "Yama"] },
    { word: "ひ", answer: "Hi", options: ["Mizu", "Hi", "Kaze", "Tsuki"] },
    { word: "かぜ", answer: "Kaze", options: ["Mizu", "Hi", "Kaze", "Ame"] },
    { word: "つき", answer: "Tsuki", options: ["Hi", "Tsuki", "Taiyou", "Hoshi"] },
    { word: "たいよう", answer: "Taiyou", options: ["Tsuki", "Taiyou", "Hoshi", "Sora"] },
    { word: "ほし", answer: "Hoshi", options: ["Taiyou", "Hoshi", "Sora", "Kumo"] },
    { word: "そら", answer: "Sora", options: ["Hoshi", "Sora", "Umi", "Yama"] },
    { word: "やま", answer: "Yama", options: ["Sora", "Yama", "Kawa", "Umi"] },
    { word: "うみ", answer: "Umi", options: ["Kawa", "Umi", "Mizu", "Sora"] },
    { word: "かわ", answer: "Kawa", options: ["Umi", "Kawa", "Mizu", "Yama"] },
    { word: "いぬ", answer: "Inu", options: ["Inu", "Neko", "Tori", "Sakana"] },
    { word: "ねこ", answer: "Neko", options: ["Inu", "Neko", "Usagi", "Tori"] },
    { word: "とり", answer: "Tori", options: ["Neko", "Tori", "Sakana", "Inu"] },
    { word: "さかな", answer: "Sakana", options: ["Tori", "Sakana", "Inu", "Neko"] },
    { word: "うさぎ", answer: "Usagi", options: ["Neko", "Usagi", "Inu", "Kuma"] },
    { word: "ごはん", answer: "Gohan", options: ["Gohan", "Pan", "Mizu", "Ocha"] },
    { word: "パン", answer: "Pan", options: ["Gohan", "Pan", "Kudamono", "Yasai"] },
    { word: "おちゃ", answer: "Ocha", options: ["Mizu", "Ocha", "Kouhii", "Gyuunyuu"] },
    { word: "ぎゅうにゅう", answer: "Gyuunyuu", options: ["Ocha", "Gyuunyuu", "Mizu", "Juusu"] },
    { word: "くだもの", answer: "Kudamono", options: ["Yasai", "Kudamono", "Gohan", "Pan"] },
    { word: "やさい", answer: "Yasai", options: ["Kudamono", "Yasai", "Nikku", "Sakana"] },
    { word: "あか", answer: "Aka", options: ["Aka", "Ao", "Kiiro", "Shiro"] },
    { word: "あお", answer: "Ao", options: ["Aka", "Ao", "Midori", "Kuro"] },
    { word: "きいろ", answer: "Kiiro", options: ["Aka", "Kiiro", "Midori", "Murasaki"] },
    { word: "みどり", answer: "Midori", options: ["Ao", "Midori", "Kiiro", "Chairo"] },
    { word: "しろ", answer: "Shiro", options: ["Kuro", "Shiro", "Guree", "Pinku"] },
    { word: "くろ", answer: "Kuro", options: ["Shiro", "Kuro", "Chairo", "Guree"] },
    { word: "たべる", answer: "Taberu", options: ["Taberu", "Nomu", "Miru", "Kiku"] },
    { word: "のむ", answer: "Nomu", options: ["Taberu", "Nomu", "Aruku", "Hanasu"] },
    { word: "みる", answer: "Miru", options: ["Kiku", "Miru", "Yomu", "Kaku"] },
    { word: "きく", answer: "Kiku", options: ["Miru", "Kiku", "Hanasu", "Omou"] }
];

// ================= DATA HIRAGANA & KATAKANA - LAYOUT 5 KOLOM =================
const hiraLayout = {
    on: [
        ["あ","い","う","え","お"],
        ["か","き","く","け","こ"],
        ["さ","し","す","せ","そ"],
        ["た","ち","つ","て","と"],
        ["な","に","ぬ","ね","の"],
        ["は","ひ","ふ","へ","ほ"],
        ["ま","み","む","め","も"],
        ["や",null,"ゆ",null,"よ"],
        ["ら","り","る","れ","ろ"],
        ["わ",null,null,null,"を"],
        ["ん",null,null,null,null]
    ],
    romajiOn: [
        ["a","i","u","e","o"],
        ["ka","ki","ku","ke","ko"],
        ["sa","shi","su","se","so"],
        ["ta","chi","tsu","te","to"],
        ["na","ni","nu","ne","no"],
        ["ha","hi","fu","he","ho"],
        ["ma","mi","mu","me","mo"],
        ["ya",null,"yu",null,"yo"],
        ["ra","ri","ru","re","ro"],
        ["wa",null,null,null,"wo"],
        ["n",null,null,null,null]
    ],
    dakuon: [
        ["が","ぎ","ぐ","げ","ご"],
        ["ざ","じ","ず","ぜ","ぞ"],
        ["だ","ぢ","づ","で","ど"],
        ["ば","び","ぶ","べ","ぼ"]
    ],
    romajiDaku: [
        ["ga","gi","gu","ge","go"],
        ["za","ji","zu","ze","zo"],
        ["da","ji","zu","de","do"],
        ["ba","bi","bu","be","bo"]
    ],
    handakuon: [["ぱ","ぴ","ぷ","ぺ","ぽ"]],
    romajiHandaku: [["pa","pi","pu","pe","po"]],
    youon: [
        ["きゃ",null,"きゅ",null,"きょ"],
        ["しゃ",null,"しゅ",null,"しょ"],
        ["ちゃ",null,"ちゅ",null,"ちょ"],
        ["にゃ",null,"にゅ",null,"にょ"],
        ["ひゃ",null,"ひゅ",null,"ひょ"],
        ["みゃ",null,"みゅ",null,"みょ"],
        ["りゃ",null,"りゅ",null,"りょ"],
        ["ぎゃ",null,"ぎゅ",null,"ぎょ"],
        ["じゃ",null,"じゅ",null,"じょ"],
        ["びゃ",null,"びゅ",null,"びょ"],
        ["ぴゃ",null,"ぴゅ",null,"ぴょ"]
    ],
    romajiYouon: [
        ["kya",null,"kyu",null,"kyo"],
        ["sha",null,"shu",null,"sho"],
        ["cha",null,"chu",null,"cho"],
        ["nya",null,"nyu",null,"nyo"],
        ["hya",null,"hyu",null,"hyo"],
        ["mya",null,"myu",null,"myo"],
        ["rya",null,"ryu",null,"ryo"],
        ["gya",null,"gyu",null,"gyo"],
        ["ja",null,"ju",null,"jo"],
        ["bya",null,"byu",null,"byo"],
        ["pya",null,"pyu",null,"pyo"]
    ]
};

const kataLayout = {
    on: [
        ["ア","イ","ウ","エ","オ"],
        ["カ","キ","ク","ケ","コ"],
        ["サ","シ","ス","セ","ソ"],
        ["タ","チ","ツ","テ","ト"],
        ["ナ","ニ","ヌ","ネ","ノ"],
        ["ハ","ヒ","フ","ヘ","ホ"],
        ["マ","ミ","ム","メ","モ"],
        ["ヤ",null,"ユ",null,"ヨ"],
        ["ラ","リ","ル","レ","ロ"],
        ["ワ",null,null,null,"ヲ"],
        ["ン",null,null,null,null]
    ],
    romajiOn: [
        ["a","i","u","e","o"],
        ["ka","ki","ku","ke","ko"],
        ["sa","shi","su","se","so"],
        ["ta","chi","tsu","te","to"],
        ["na","ni","nu","ne","no"],
        ["ha","hi","fu","he","ho"],
        ["ma","mi","mu","me","mo"],
        ["ya",null,"yu",null,"yo"],
        ["ra","ri","ru","re","ro"],
        ["wa",null,null,null,"wo"],
        ["n",null,null,null,null]
    ],
    dakuon: [
        ["ガ","ギ","グ","ゲ","ゴ"],
        ["ザ","ジ","ズ","ゼ","ゾ"],
        ["ダ","ヂ","ヅ","デ","ド"],
        ["バ","ビ","ブ","ベ","ボ"]
    ],
    romajiDaku: [
        ["ga","gi","gu","ge","go"],
        ["za","ji","zu","ze","zo"],
        ["da","ji","zu","de","do"],
        ["ba","bi","bu","be","bo"]
    ],
    handakuon: [["パ","ピ","プ","ペ","ポ"]],
    romajiHandaku: [["pa","pi","pu","pe","po"]],
    youon: [
        ["キャ",null,"キュ",null,"キョ"],
        ["シャ",null,"シュ",null,"ショ"],
        ["チャ",null,"チュ",null,"チョ"],
        ["ニャ",null,"ニュ",null,"ニョ"],
        ["ヒャ",null,"ヒュ",null,"ヒョ"],
        ["ミャ",null,"ミュ",null,"ミョ"],
        ["リャ",null,"リュ",null,"リョ"],
        ["ギャ",null,"ギュ",null,"ギョ"],
        ["ジャ",null,"ジュ",null,"ジョ"],
        ["ビャ",null,"ビュ",null,"ビョ"],
        ["ピャ",null,"ピュ",null,"ピョ"]
    ],
    romajiYouon: [
        ["kya",null,"kyu",null,"kyo"],
        ["sha",null,"shu",null,"sho"],
        ["cha",null,"chu",null,"cho"],
        ["nya",null,"nyu",null,"nyo"],
        ["hya",null,"hyu",null,"hyo"],
        ["mya",null,"myu",null,"myo"],
        ["rya",null,"ryu",null,"ryo"],
        ["gya",null,"gyu",null,"gyo"],
        ["ja",null,"ju",null,"jo"],
        ["bya",null,"byu",null,"byo"],
        ["pya",null,"pyu",null,"pyo"]
    ]
};

// ================= VARIABLE GLOBAL =================
let currentSlide = 1;
let totalSlides = 7;
let currentHiraIndex = 0;
let currentKataIndex = 0;
let hiraDeck = []; 
let kataDeck = [];

// ================= INISIALISASI =================
document.addEventListener("DOMContentLoaded", () => {
    try {
        initCharts();
        initFlashcards();
        initTraceSelect();
        generateQuiz();
        showSlide(1);
    } catch (e) {
        console.error("Error:", e);
    }
});

// ================= NAVIGASI SLIDE =================
function showSlide(n) {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    currentSlide = n;

    document.querySelectorAll('.slide-content').forEach(s => s.classList.remove('active'));
    const slide = document.getElementById('slide' + n);
    if (slide) slide.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach((btn, index) => {
        if (index + 1 === n) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    window.scrollTo(0, 0);
}

// ================= CHART - LAYOUT 5 KOLOM =================
function initCharts() {
    renderGridLayout('hira-on', hiraLayout.on, hiraLayout.romajiOn);
    renderGridLayout('hira-dakuon', hiraLayout.dakuon, hiraLayout.romajiDaku);
    renderGridLayout('hira-handakuon', hiraLayout.handakuon, hiraLayout.romajiHandaku);
    renderGridLayout('hira-youon', hiraLayout.youon, hiraLayout.romajiYouon);

    renderGridLayout('kata-on', kataLayout.on, kataLayout.romajiOn);
    renderGridLayout('kata-dakuon', kataLayout.dakuon, kataLayout.romajiDaku);
    renderGridLayout('kata-handakuon', kataLayout.handakuon, kataLayout.romajiHandaku);
    renderGridLayout('kata-youon', kataLayout.youon, kataLayout.romajiYouon);
}

function renderGridLayout(elementId, charRows, romajiRows) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    
    charRows.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'char-row';
        
        for (let col = 0; col < 5; col++) {
            const char = row[col];
            const romaji = romajiRows[rowIndex][col];
            
            if (char === null) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'char-box empty';
                rowDiv.appendChild(emptyDiv);
            } else {
                const div = document.createElement('div');
                div.className = 'char-box';
                div.innerHTML = `<span class='jp-char'>${char}</span><span class='romaji'>${romaji}</span>`;
                rowDiv.appendChild(div);
            }
        }
        
        container.appendChild(rowDiv);
    });
}

// ================= FLASHCARD =================
function initFlashcards() {
    hiraDeck = [];
    kataDeck = [];
    
    hiraLayout.on.forEach((row, i) => {
        row.forEach((char, j) => {
            if (char !== null) {
                hiraDeck.push({ char: char, romaji: hiraLayout.romajiOn[i][j] });
            }
        });
    });
    
    kataLayout.on.forEach((row, i) => {
        row.forEach((char, j) => {
            if (char !== null) {
                kataDeck.push({ char: char, romaji: kataLayout.romajiOn[i][j] });
            }
        });
    });
    
    updateCardDisplay('hira');
    updateCardDisplay('kata');
}

function toggleFlip(cardElement) {
    cardElement.classList.toggle('flipped');
}

function updateCardDisplay(type) {
    let deck, frontId, backId, index;
    
    if (type === 'hira') {
        deck = hiraDeck;
        frontId = 'fc-hira-front';
        backId = 'fc-hira-back';
        index = currentHiraIndex;
    } else {
        deck = kataDeck;
        frontId = 'fc-kata-front';
        backId = 'fc-kata-back';
        index = currentKataIndex;
    }

    const card = document.querySelector(`#slide${type === 'hira' ? 3 : 4} .flashcard`);
    if (card) card.classList.remove('flipped');

    setTimeout(() => {
        const front = document.getElementById(frontId);
        const back = document.getElementById(backId);
        if (front && back && deck[index]) {
            front.innerText = deck[index].char;
            back.innerText = deck[index].romaji;
        }
    }, 200);
}

function nextCard(type) {
    if (type === 'hira') {
        currentHiraIndex = (currentHiraIndex + 1) % hiraDeck.length;
        updateCardDisplay('hira');
    } else {
        currentKataIndex = (currentKataIndex + 1) % kataDeck.length;
        updateCardDisplay('kata');
    }
}

function prevCard(type) {
    if (type === 'hira') {
        currentHiraIndex = (currentHiraIndex - 1 + hiraDeck.length) % hiraDeck.length;
        updateCardDisplay('hira');
    } else {
        currentKataIndex = (currentKataIndex - 1 + kataDeck.length) % kataDeck.length;
        updateCardDisplay('kata');
    }
}

function shuffleCard(type) {
    let deck = type === 'hira' ? hiraDeck : kataDeck;
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    if (type === 'hira') currentHiraIndex = 0;
    else currentKataIndex = 0;
    
    updateCardDisplay(type);
}

function speakChar(type) {
    const deck = type === 'hira' ? hiraDeck : kataDeck;
    const index = type === 'hira' ? currentHiraIndex : currentKataIndex;
    
    if (!deck[index]) return;
    
    const char = deck[index].char;
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Browser tidak mendukung Text-to-Speech");
    }
}

// ================= TRACE =================
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function initTraceSelect() {
    const selectHira = document.getElementById('select-trace-hira');
    const selectKata = document.getElementById('select-trace-kata');

    if (selectHira) {
        hiraLayout.on.forEach((row, i) => {
            row.forEach((char, j) => {
                if (char !== null) {
                    selectHira.add(new Option(`${char} - ${hiraLayout.romajiOn[i][j]}`, char));
                }
            });
        });
        setupCanvas('canvas-hira', selectHira.value);
    }

    if (selectKata) {
        kataLayout.on.forEach((row, i) => {
            row.forEach((char, j) => {
                if (char !== null) {
                    selectKata.add(new Option(`${char} - ${kataLayout.romajiOn[i][j]}`, char));
                }
            });
        });
        setupCanvas('canvas-kata', selectKata.value);
    }
}

function changeTraceChar(type) {
    clearCanvas(type);
}

function drawShadow(canvas, char) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    ctx.save();
    ctx.font = "160px 'Noto Sans JP', sans-serif";
    ctx.fillStyle = "rgba(188, 0, 45, 0.15)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(char, width / 2, height / 2);
    ctx.restore();
}

function setupCanvas(canvasId, char) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    drawShadow(canvas, char);
    
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#BC002D";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    function drawLine(x, y) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        drawLine(x, y);
    });
    
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    canvas.addEventListener('touchstart', (e) => {
        isDrawing = true;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
        e.preventDefault();
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (!isDrawing) return;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        drawLine(x, y);
        e.preventDefault();
    });
    
    canvas.addEventListener('touchend', () => isDrawing = false);
}

function clearCanvas(type) {
    const canvas = document.getElementById(`canvas-${type}`);
    const select = document.getElementById(`select-trace-${type}`);
    if (!canvas || !select) return;
    
    drawShadow(canvas, select.value);
}

// ================= QUIZ =================
function generateQuiz() {
    const quiz = vocabList[Math.floor(Math.random() * vocabList.length)];
    
    const wordEl = document.getElementById('quiz-word');
    if (wordEl) wordEl.innerText = "Baca kata ini: " + quiz.word;
    
    const optionsContainer = document.getElementById('quiz-options');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    
    let shuffledOptions = [...quiz.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'quiz-btn';
        btn.onclick = () => checkAnswer(opt, quiz.answer, btn);
        optionsContainer.appendChild(btn);
    });

    const feedback = document.getElementById('quiz-feedback');
    if (feedback) {
        feedback.innerText = "";
        feedback.className = "feedback";
    }
}

function checkAnswer(selected, correct, btnElement) {
    const feedback = document.getElementById('quiz-feedback');
    const allBtns = document.querySelectorAll('.quiz-btn');
    
    allBtns.forEach(b => b.disabled = true);
    
    const isCorrect = selected === correct;
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        if (feedback) {
            feedback.innerText = "Benar! 🎉";
            feedback.classList.add('correct');
        }
    } else {
        btnElement.classList.add('wrong');
        if (feedback) {
            feedback.innerText = "Salah, jawaban yang benar: " + correct;
            feedback.classList.add('wrong');
        }
        
        allBtns.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }
}