const { execFileSync } = require('child_process')
const { plistPath } = require('./conf')

execFileSync('launchctl', ['unload', plistPath])
