# レビュー記録：ログイン画面

## PR #4 feat: スキーマ作成

### 指摘内容
- `refine` のコールバック内で毎回スキーマを組み立てて `safeParse` しているため、バリデーション実行のたびに不要なオブジェクト生成が発生する

### 修正内容
- `emailOrEmptySchema` / `passwordOrEmptySchema` をモジュールスコープで定義し、`refine` 内で再利用する形に変更

### 次回への反映ポイント
- バリデーション用スキーマは関数の外で定義しておく（毎回生成しない）

---

## PR #6 feat: EmailField / PasswordField 作成

### 指摘内容
1. `React.ChangeEvent` を使っているが `React` がインポートされておらず型チェックが通らない
2. `TextInput` に `type="email"` / `autoComplete` が未設定でアクセシビリティ・オートフィルが効かない
3. `PasswordInput` に `name="password"` / `autoComplete="current-password"` が未設定
4. `index.ts` の re-export パスが冗長（`../auth/...` → `./components/...`）
5. `MantineProvider.tsx` で `React.ReactNode` を使っているが `React` が未インポート

### 修正内容
- `ChangeEvent` を `react` から named import に変更
- `type="email"` / `autoComplete` / `name` を各フィールドに追加
- re-export パスを `./components/...` に修正
- `ReactNode` を `react` から named import に変更

### 次回への反映ポイント
- `React.XXX` を使う場合は `React` の import が必要かを確認する
- input 系コンポーネントには `type` / `autoComplete` / `name` を明示する習慣をつける

---

## PR #9 feat: Login画面 Presentation コンポーネント作成

### 指摘内容
1. `Container` の `py="md"` と内側 `Stack` の `h="100vh"` が重なりスクロールバーが発生する
2. `MantineProvider.tsx` で `React.ReactNode` が未インポート（同上）
3. `fieldErrors` の型が `Record<string, string>` で全キー必須になっており、`{}` を渡すと型エラー
4. `<title>` をレイアウトコンポーネント内に直書きしているため `<body>` に入ってしまい無効なHTML

### 修正内容
- `Stack` の高さを `h="100%"` に変更
- `fieldErrors` の型を `Partial<Record<keyof LoginFormData, string>>` に変更
- `React.ReactNode` → `ReactNode` に修正

### 次回への反映ポイント
- `h="100vh"` と padding の組み合わせはスクロールを生む可能性があるので注意
- `<title>` は `root.tsx` の `<head>` 内か React Router のメタ機構で設定する
- props の型は「呼び出し側が渡せる形」に合わせて設計する

---

## PR #10 feat: loginContainer 作成

### 指摘内容
1. `React.ChangeEvent` が未インポート
2. `onSubmit` 内に `console.log` が残っておりそのままだと本番ログに出る
3. submit 時に前回の `apiError` / `fieldErrors` がクリアされず古いエラーが残る
4. Container 内で直接 `fetch` を呼んでおり `login.ts` の API 関数と二重管理になっている
5. `/logs` が `_app` レイアウトを通らないトップレベルルートになっていた
6. `routes/_app/layout.tsx` のコンポーネント名が `AuthLayout` で紛らわしい

### 修正内容
- `ChangeEvent` を named import に変更
- `console.log` 削除
- `/logs` を `layout("routes/_app/layout.tsx", [...])` 配下に移動
- コンポーネント名を `AppLayout` に変更

### 次回への反映ポイント
- submit 前に `apiError` / `fieldErrors` をリセットする処理を入れる
- API 呼び出しは一箇所に集約し、Container から直接 `fetch` しない
- `console.log` はデバッグ後に削除する
- ルートは適切なレイアウト配下に配置する
- コンポーネント名はファイルの役割と一致させる
