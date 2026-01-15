# Random User Generator 👤

這是一個結合了 **Tailwind CSS** 與 **Alpine.js** 的輕量級網頁應用程式。透過串接隨機使用者 API，實現了即時資料獲取與動態性別背景切換功能。

## 🌟 功能亮點
* **現代化 UI 設計**：利用 **Tailwind CSS** 的 Utility-first 特性，快速構建出具備圓角、陰影與響應式佈局的介面。
* **輕量級交互**：使用 **Alpine.js** 處理組件狀態與按鈕點擊事件，讓 JavaScript 與 HTML 的互動更直觀。
* **動態性別視覺回饋**：
  * 當產生的使用者為 **男性** 時，背景色切換為深藍色 (`#33739a`)。
  * 當產生的使用者為 **女性** 時，背景色切換為深紫色 (`#663399`)。
* **API 非同步整合**：使用原生 `fetch` API 處理非同步資料流，即時更新使用者照片、姓名、聯繫方式。

## 🛠 技術棧 (Tech Stack)
* **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) (CDN 版本)
* **JS Framework**: [Alpine.js](https://alpinejs.dev/) (用於處理基礎狀態)
* **Core Logic**: Vanilla JavaScript (ES6)
* **Data Source**: [Random User API](https://randomuser.me/)

## 📁 檔案說明
* `index.html`: 包含主要的 UI 結構、Tailwind 樣式類別以及 Alpine.js 指令。
* `script.js`: 負責處理 `fetch` 請求邏輯與 DOM 的動態渲染。

GitHub Page: https://mallow96.github.io/Random-User-Generator_1/

複製儲存庫：
   ```bash
   git clone [https://github.com/Mallow96/Random-User-Generator_1.git](https://github.com/Mallow96/Random-User-Generator_1.git)
