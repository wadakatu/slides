import { execSync } from 'node:child_process'
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const rootDir = process.cwd()
const distDir = join(rootDir, 'dist')

// プレゼンテーションディレクトリを取得
function getPresentations(): string[] {
  const entries = readdirSync(rootDir)
  return entries.filter((entry) => {
    const fullPath = join(rootDir, entry)
    const isDir = statSync(fullPath).isDirectory()
    const hasSrc = existsSync(join(fullPath, 'src', 'slides.md'))
    return isDir && hasSrc && !entry.startsWith('.') && entry !== 'node_modules' && entry !== 'scripts'
  }).sort().reverse()
}

function buildAll() {
  const presentations = getPresentations()

  if (presentations.length === 0) {
    console.log('ビルド対象のプレゼンテーションがありません。')
    process.exit(1)
  }

  // dist ディレクトリを作成
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  console.log(`${presentations.length} 個のプレゼンテーションをビルドします...\n`)

  for (const presentation of presentations) {
    const slidePath = join(rootDir, presentation, 'src', 'slides.md')
    const outDir = join(distDir, presentation)
    const basePath = `/${presentation}/`

    console.log(`ビルド中: ${presentation}`)

    try {
      execSync(`npx slidev build ${slidePath} --out ${outDir} --base ${basePath}`, {
        stdio: 'inherit',
        cwd: rootDir,
      })
      console.log(`完了: ${presentation}\n`)
    } catch (error) {
      console.error(`エラー: ${presentation} のビルドに失敗しました`)
    }
  }

  // インデックスページを生成
  generateIndexPage(presentations)
}

function generateIndexPage(presentations: string[]) {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presentations</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: #0a0a0a;
      color: #fafafa;
    }
    h1 { border-bottom: 1px solid #333; padding-bottom: 1rem; }
    ul { list-style: none; padding: 0; }
    li { margin: 0.5rem 0; }
    a {
      color: #60a5fa;
      text-decoration: none;
      padding: 0.75rem 1rem;
      display: block;
      border-radius: 0.5rem;
      transition: background 0.2s;
    }
    a:hover { background: #1a1a1a; }
  </style>
</head>
<body>
  <h1>Presentations</h1>
  <ul>
    ${presentations.map((p) => `<li><a href="./${p}/">${p}</a></li>`).join('\n    ')}
  </ul>
</body>
</html>`

  writeFileSync(join(distDir, 'index.html'), html)
  console.log('インデックスページを生成しました: dist/index.html')
}

buildAll()
