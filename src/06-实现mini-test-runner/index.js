import { glob } from 'glob';
import fs from 'fs/promises';
import { build } from 'esbuild';

const files = glob.sync('*.spec.js')

const runModule = async (fileContent) => {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd()
    },
    write: false,
    bundle: true,
    target: 'esnext'
  })

  const code = result.outputFiles[0].text
  const fn = new Function(code)
  fn()
}

const runFiles = async () => {
  for (const file of files) {
    const fileContent = await fs.readFile(file, 'utf-8')
    const AUTOEXEC_CODE = `
      ;
      import { run } from "./core.js"; 
      run();
    `
    runModule(`${fileContent}${AUTOEXEC_CODE}`)
  }
}

runFiles()
