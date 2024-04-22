// 現在の日付を取得
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

// 季節を計算
let season = "";
if (month < 4) {
  season = "春";
}

// 結果をHTMLに表示
const seasonText = document.getElementById("date");
seasonText.textContent = `${month}月${day}日 ${season}`;