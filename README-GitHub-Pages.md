# 國度321 晚間上傳提醒：GitHub Pages 發佈方式

這個資料夾可以直接放到 GitHub，發佈成可安裝的網頁 App。

## 最簡單做法

1. 到 GitHub 建立一個新的 repository  
   例如：`kingdom321-reminder`

2. 打開這個資料夾，把裡面的檔案全部上傳到 repository 根目錄  
   要上傳的是資料夾內的內容，不是只上傳 `yt-reminder-app.zip`

3. 到 GitHub 的 `Settings`

4. 打開 `Pages`

5. 在 `Build and deployment` 裡選：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`

6. 按 `Save`

7. 等 1 到 5 分鐘，GitHub 會產生一個網址，例如：
   `https://你的帳號.github.io/kingdom321-reminder/`

8. 用手機打開這個網址，就可以加入主畫面，當成 App 使用

## 之後怎麼更新

1. 修改 App 檔案
2. 再把新的檔案上傳到同一個 GitHub repository
3. GitHub Pages 會自動更新網址內容

## 重要提醒

- `index.html`、`app.js`、`styles.css`、`manifest.webmanifest`、`sw.js`、圖示檔都要一起上傳
- `xlsx.full.min.js` 也要一起上傳，否則 Excel 匯入功能不能用
- 第一次更新後，如果手機還看到舊畫面，請重新整理一次或重新開啟 App

## 手機安裝

### iPhone

1. 用 Safari 打開 GitHub Pages 網址
2. 按分享
3. 選「加入主畫面」

### Android

1. 用 Chrome 打開 GitHub Pages 網址
2. 按右上角選單
3. 選「加入主畫面」或「安裝 App」
