# 倉儲管理系統

## 專案簡介

本專案是一個基於 React 和 TypeScript 開發的倉儲管理系統，提供進貨、出貨、庫存管理等核心功能。

### 設計理念

**本系統專為教導不熟悉電腦的使用者而設計**，因此在開發過程中，我們特別注重以下核心訴求：

- **簡單**：直觀的操作介面，減少學習曲線，讓使用者能快速上手
- **快速**：優化效能表現，確保操作流暢，減少等待時間
- **防呆**：完善的輸入驗證與錯誤提示，避免使用者誤操作
- **手機也要跑得動**：響應式設計，確保在手機等行動裝置上也能流暢運行

## 技術棧

### 核心技術

- **語言**：TypeScript
- **框架**：React
- **打包工具**：Vite

### 第三方套件

#### 畫面相關

- Tailwind CSS - CSS 框架
- Lucide React - 圖標庫

#### 路由與狀態管理

- React Router - 路由管理
- Zustand - 狀態管理
- TanStack Query - 數據獲取與緩存
- TanStack Table - 表格組件
- TanStack Virtual - 虛擬滾動

#### 後端服務

- Supabase - 後端即服務（BaaS）

#### 表單與工具

- React Hook Form - 表單處理
- Day.js - 日期處理
- number-to-chinese-words - 數字轉中文

#### 圖表

- Recharts - 圖表庫

## 開發規範

### Git Flow

#### 常駐分支

- `main` - 主分支（生產環境）
- `dev` - 開發分支

#### 開發流程

```mermaid
flowchart TD
    A[確保本地分支已更新到最新的 dev] --> B[於 dev 開出工作分支（格式：action-content）]
    B --> C[在工作分支上編輯]
    C --> D[npm run lint 檢查程式碼品質]
    D --> E[npm run build 確認沒問題]
    E --> F[完成後推上遠端]
    F --> G[在 GitHub 上發 PR，要求合併至 dev 分支]
    G --> H[確認沒問題後合併至遠端 dev 分支]
    H --> I[移除遠端的工作分支]
    I --> J[將本地 dev 分支更新（git checkout dev && git pull）]
    J --> K[刪除本地工作分支（git branch -d <branch-name>）]
    K --> L[完成]
```

#### 部署流程

```mermaid
flowchart LR
    A[開發達一定部署進度] --> B[於遠端發 PR，請求合併 dev 至 main]
    B --> C[確認沒問題後合併至遠端 main 分支]
    C --> D[將本地 main 分支更新（git checkout main && git pull）]
    D --> E[完成]
```

### 分支命名規範

格式：`<action>-<content>`（烤肉串命名，全小寫）

#### 分支類型

- `feature-<content>` - 新增分支，新增全新畫面、功能等
- `update-<content>` - 更新分支，變更功能邏輯、畫面等
- `refactor-<content>` - 重構分支，重新命名、拆分元件等
- `fix-<content>` - 修復分支，修復異常
- `chore-<content>` - 雜物分支，處理與運作無關的內容，編輯文件等

### Commit 訊息規範

格式：`<type>(<scope>?): <content>`

#### Type 類型

- `feat(scope?): <content>` - 新增功能
- `update(scope?): <content>` - 更新/修改功能
- `refactor(scope?): <content>` - 重構
- `fix(scope?): <content>` - 修復 bug
- `chore(scope?): <content>` - 雜物（配置、文檔等）

## 功能流程

### 註冊流程

```mermaid
flowchart LR
    Start([開始註冊流程]) --> Contact[聯絡管理者]
    Contact --> Edit[管理者於資料庫編輯使用者資訊]
    Edit --> Report[管理者回報帳號相關資料]
    Report --> End([註冊完成])
```

### 登入流程

```mermaid
flowchart LR
    Start([開始登入流程]) --> Input[於登入頁輸入帳號密碼]
    Input --> Decision{驗證是否正確及連線是否正常}
    Decision -->|是| Success[回到首頁 成功畫面]
    Decision -->|否| Failure[回到首頁 失敗畫面]
    Success --> End([完成登入])
    Failure --> End
```

### 讀取流程

#### 電腦版

```mermaid
flowchart LR
    Start([開始讀取流程]) --> Click[於首頁點擊 儀表板或是資料庫]
    Click --> View[點擊查閱目標]
    View --> Filter[輸入篩選條件]
    Filter --> End([完成讀取])
```

#### 行動裝置

```mermaid
flowchart LR
    Start([開始讀取流程]) --> View[於首頁點擊 查閱目標]
    View --> Filter[輸入篩選條件]
    Filter --> End([完成讀取])
```

### 編輯流程

```mermaid
flowchart LR
    Start([開始編輯流程]) --> ClickDB[點擊資料庫]
    ClickDB --> EnterPage[進入資料庫頁面]
    EnterPage --> ClickTable[點擊欲編輯表格]
    ClickTable --> ClickEdit[點擊編輯按鍵]
    ClickEdit --> EnterState[進入編輯狀態]
    EnterState --> EditData[編輯資料]
    EditData --> Decision{是否確認編輯}
    Decision -->|是| Confirm[點擊確認編輯]
    Decision -->|否| Cancel[點擊取消編輯]
    Confirm --> Exit([退出編輯狀態])
    Cancel --> Exit
```

### 新增流程

```mermaid
flowchart LR
    Start([開始新增流程]) --> ClickAdd[首頁點擊新增 進入新增頁面]
    ClickAdd --> ClickType[點擊新增資料的類型 進貨、出貨]
    ClickType --> Decision{對象是否存在}
    Decision -->|是| Select[選擇對象]
    Decision -->|否| AddNew[點擊新增對象]
    AddNew --> Submit[填寫資料後提交]
    Submit --> Select
    Select --> ClickProduct[點擊商品]
    ClickProduct --> EditContent[編輯內容 數量、價錢......]
    EditContent --> Upload[點擊上傳]
    Upload --> End([完成新增資料])
```

## 開發指令

```bash
# 開發模式
npm run dev

# 建置專案
npm run build

# 程式碼檢查
npm run lint

# 預覽建置結果
npm run preview
```
