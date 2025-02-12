document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('toggle-style').addEventListener('click', function() {
    document.body.classList.toggle('mystic-theme');
});

document.getElementById('random-journal').addEventListener('click', function() {
    const journals = [
        '今天的夜空很美，我想起了某個溫暖的瞬間。',
        '有時候，思考讓我感覺像是在無邊的海洋中游泳。',
        '過去的一些文字，現在看來仍然有它的重量。',
        '記錄這一刻的感受，讓未來的自己來閱讀。'
    ];
    document.getElementById('journal-content').innerText = journals[Math.floor(Math.random() * journals.length)];
});

document.getElementById('random-message').addEventListener('click', function() {
    const messages = [
        '世界很大，但總有一個角落適合你。',
        '希望你的願望，都能如期而至。',
        '無論發生什麼，請相信自己。',
        '願你每一天都能發現新的美好。'
    ];
    document.getElementById('message-content').innerText = messages[Math.floor(Math.random() * messages.length)];
});

// 星空動畫
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

setInterval(drawStars, 1000);
