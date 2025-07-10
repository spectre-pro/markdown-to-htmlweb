const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

// --- 伺服器設定 ---
const app = express();
const port = 1234;

// 由於此腳本在 src/ 中，而 content.md 在根目錄，我們需要向上走一層 ('..')
const markdownFilePath = path.join(__dirname, '..', 'content.md');
// __dirname 是目前腳本所在的目錄 (即 src/)
const srcPath = __dirname;
const rootPath = path.join(__dirname, '..'); // 專案根目錄

// --- LiveReload 設定 ---
const liveReloadServer = livereload.createServer();
// 監控根目錄的 content.md 和 src 資料夾中的所有檔案 (html, css, js)
liveReloadServer.watch([markdownFilePath, srcPath]);

// --- 中介軟體設定 ---
// 將 livereload 腳本注入到 HTML 中
app.use(connectLiveReload());

// 將 'src' 資料夾設定為靜態資源目錄。
// 這樣瀏覽器可以直接請求 /main.css 和 /main.html
app.use(express.static(srcPath));

// --- 路由設定 ---

// 1. 根路由 '/': 當使用者訪問 http://localhost:1234/ 時，回傳 main.html
app.get('/', (req, res) => {
  res.sendFile(path.join(srcPath, 'main.html'));
});

// 2. API 路由 '/api/markdown': 用於獲取並轉換 Markdown 內容
app.get('/api/markdown', (req, res) => {
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('讀取 Markdown 檔案時發生錯誤:', err);
      return res.status(500).send('找不到或無法讀取 content.md');
    }
    const html = marked.parse(data);
    res.send(html);
  });
});

// --- 啟動伺服器 ---
app.listen(port, () => {
  console.log(`✅ 伺服器已在 http://localhost:${port} 上啟動`);
  console.log(`👀 正在監控檔案變更...`);
});
