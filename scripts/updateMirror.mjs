import { spawnSync } from 'node:child_process'

function run(cmd){
  const res = spawnSync(process.execPath, ['-e', cmd], { stdio: 'inherit' })
  if(res.status !== 0) process.exit(res.status)
}

// Run crawl
run('import("./scripts/crawl.mjs")')
// Postprocess links/assets
run('import("./scripts/postprocess.mjs")')
// Fix internal and external asset links
run('import("./scripts/fixLinks.mjs")')
// Minify (temporariamente desativado para depuração de imagens)
// run('import("./scripts/minify.mjs")')

console.log('Mirror atualizado com sucesso')