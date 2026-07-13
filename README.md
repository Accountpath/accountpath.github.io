# 株式会社AccountPath コーポレートサイト

公開URL: **https://accountpath.co.jp/**(旧URL https://accountpath.github.io/ からは自動転送)

このリポジトリの `main` ブランチに変更をコミットすると、1〜2分で公開サイトに自動反映されます。

## ファイル構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ |
| `services.html` | サービス紹介 |
| `company.html` | 会社概要(代表挨拶・会社情報・沿革) |
| `contact.html` | お問い合わせ |
| `css/style.css` | 全ページ共通のデザイン |
| `js/main.js` | メニュー開閉・アニメーションなどの動作 |

## 編集のしかた

### 方法1: ブラウザだけで編集(いちばん簡単)

1. [リポジトリのページ](https://github.com/accountpath/accountpath.github.io)で編集したいファイルを開く
2. 右上の鉛筆アイコン ✏️ をクリックして編集
3. 「Commit changes...」→ そのまま「Commit changes」で保存

保存すると自動で公開サイトに反映されます(反映まで1〜2分)。

### 方法2: GitHub Desktop でローカル編集

1. [GitHub Desktop](https://desktop.github.com/) をインストールしてサインイン
2. 「Clone repository」でこのリポジトリを取得
3. 手元のエディタでファイルを編集
4. GitHub Desktop で「Commit to main」→「Push origin」

## 注意事項

- **`main` への保存 = 即・本番公開**です。文言の変更程度なら気軽にどうぞ。大きなレイアウト変更をするときは、一声かけてから作業するのがおすすめです。
- ルートにある **`CNAME` ファイルは削除・編集しないでください**。独自ドメイン(accountpath.co.jp)の設定が外れてサイトにアクセスできなくなります。
- お問い合わせフォームは現在デモ動作です(送信ボタンを押しても実際にはメールは届きません)。
- 写真は Unsplash のフリー素材を使用しています。差し替える場合は `images/` フォルダを作って画像を置き、HTML の `src` を変更してください。
