# 使用官方的 Node.js 執行環境作為基礎映像檔
FROM node:lts-alpine

# 設定容器內的工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
# 以便利用 Docker 的快取機制來處理依賴套件
COPY package*.json ./

# 安裝生產環境所需的依賴套件
# 我們使用 --omit=dev 來跳過像 livereload 這樣的開發依賴
RUN npm install --omit=dev

# 複製應用程式的其餘程式碼
COPY . .

# 開放應用程式執行的連接埠
EXPOSE 1234

# 定義執行應用程式的命令
CMD ["node", "src/main.js"]
