import { execSync } from 'node:child_process'
import { readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import inquirer from 'inquirer'

const rootDir = process.cwd()

// プレゼンテーションディレクトリを取得（日付形式のディレクトリ）
function getPresentations(): string[] {
  const entries = readdirSync(rootDir)
  return entries.filter((entry) => {
    const fullPath = join(rootDir, entry)
    const isDir = statSync(fullPath).isDirectory()
    const hasSrc = existsSync(join(fullPath, 'src', 'slides.md'))
    // 日付形式または任意の名前のディレクトリ
    return isDir && hasSrc && !entry.startsWith('.') && entry !== 'node_modules' && entry !== 'scripts'
  }).sort().reverse() // 新しい順
}

async function main() {
  const command = process.argv[2] || 'dev'
  const presentations = getPresentations()

  if (presentations.length === 0) {
    console.log('プレゼンテーションが見つかりません。')
    console.log('新しいプレゼンテーションを作成するには:')
    console.log('  mkdir -p YYYY-MM-DD-topic/src && echo "# Title" > YYYY-MM-DD-topic/src/slides.md')
    process.exit(1)
  }

  const { selected } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      message: 'プレゼンテーションを選択:',
      choices: presentations.map((p) => ({
        name: p,
        value: p,
      })),
    },
  ])

  const slidePath = join(rootDir, selected, 'src', 'slides.md')

  console.log(`\n${command === 'dev' ? '開発サーバーを起動' : 'ビルド'}中: ${selected}\n`)

  execSync(`npx slidev ${command === 'dev' ? '' : 'build'} ${slidePath}`, {
    stdio: 'inherit',
    cwd: rootDir,
  })
}

main().catch(console.error)
