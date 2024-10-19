const text = document.getElementById('mytext');
const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
    setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
    
}, 2000);
});

