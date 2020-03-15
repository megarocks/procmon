const screenshot = require('screenshot-desktop')
const path = require('path')

const projectName = ''

async function main() {
  const filename = path.join(process.cwd(), 'artifacts', projectName, new Date().toISOString() + '.png')
  const file = await screenshot({ format: 'png', filename })
  console.log(file)
}

main().then(() => {console.log('done.')})
