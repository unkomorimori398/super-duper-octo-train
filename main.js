// 選択肢のボタンを取得
const buttons = document.querySelectorAll('.choice button');

// フィードバック用の要素を取得
const correctImg = document.getElementById('correctImg');
const wrongImg = document.getElementById('wrongImg');

// 不正解のインデックス（固定）
const bombIndex = 4;
let correctCount = 0; // 正解数

// 各ボタンにクリックイベントを追加
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        handleChoiceClick(index, button);
    });
});

// 選択肢クリック時の処理
function handleChoiceClick(index, button) {
    if (index === bombIndex) {
        // 外れの処理
        showFeedback(false);
        setTimeout(() => {
            window.location.href = 'loser.html'; // 外れ時にページ切り替え
        }, 1000);
    } else {
        // 正解の処理
        correctCount++;
        showFeedback(true);
        button.disabled = true; // 再クリックできないようにする
        button.style.backgroundColor = '#d4edda'; // 正解用の背景色に変更

        if (correctCount === buttons.length - 1) {
            // 全て正解した場合
            setTimeout(() => {
                window.location.href = 'winner.html'; // 全問正解時にページ切り替え
            }, 1000);
        }
    }
}

// フィードバック表示関数（〇×画像表示）
function showFeedback(isCorrect) {
    if (isCorrect) {
        correctImg.style.display = 'block';
        wrongImg.style.display = 'none';
    } else {
        correctImg.style.display = 'none';
        wrongImg.style.display = 'block';
    }

    // 一定時間後に画像を非表示
    setTimeout(() => {
        correctImg.style.display = 'none';
        wrongImg.style.display = 'none';
    }, 1500);
}
