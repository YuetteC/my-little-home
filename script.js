document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
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
