document.getElementById('random-wish').addEventListener('click', function() {
    const wishes = [
        '希望未來的自己更加自在與平靜。',
        '願所有的美好，終將如期而至。',
        '相信自己，宇宙會回應你的願望。',
        '無論未來如何，我都能擁抱自己。'
    ];
    document.getElementById('wish-content').innerText = wishes[Math.floor(Math.random() * wishes.length)];
});
