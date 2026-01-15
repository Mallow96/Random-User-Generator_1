# Random User Generator 👤

這是一個使用 **原生 JavaScript** 結合 **Tailwind CSS** 開發的隨機使用者產生器。透過串接真實 API 資料，實現了動態資料渲染與即時背景顏色切換功能。

## 🌟 功能亮點
* **即時 API 串接**：點擊按鈕後發送非同步請求至 `randomuser.me`，獲取包含姓名、照片、聯繫方式等完整資料。
* **動態性別視覺切換**：
  * **男性 (Male)**：背景顏色切換為深藍色 (`bg-blue-800` 對應色值)。
  * **女性 (Female)**：背景顏色切換為深紫色 (`bg-purple-800` 對應色值)。
* **現代化 UI**：利用 **Tailwind CSS** 的 Utility-first 類別，快速實現響應式卡片佈局、陰影效果與圓角設計。
* **純原生邏輯**：不依賴大型框架，完全使用原生 DOM API 進行元素選取與內容更新。

## 🛠 技術棧 (Tech Stack)
* **核心語言**: JavaScript (ES6+)
* **CSS 框架**: [Tailwind CSS](https://tailwindcss.com/) (CDN 版本)
* **資料來源**: [Random User Generator API](https://randomuser.me/)

## 📁 檔案結構說明
* `index.html`: 定義應用程式結構，並透過 Tailwind 類別處理視覺樣式。
* `script.js`: 
  * 負責執行 `fetch` 網路請求。
  * 處理資料解構與 DOM 節點更新。
  * 包含性別判斷邏輯，動態修改 `document.body` 樣式。

複製儲存庫：
   ```bash
   git clone [https://github.com/Mallow96/Random-User-Generator_1.git](https://github.com/Mallow96/Random-User-Generator_1.git)
