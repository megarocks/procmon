const path = require('path')
const os = require('os')

const cwd = process.cwd()
const plistPath = path.join(os.homedir(), 'Library/LaunchAgents', 'com.user.procmon.plist')

const projectName = ''
const interval = 15

const stdOutPath = path.join(cwd, 'stdout.log')
const stdErrPath = path.join(cwd, 'stderr.log')

module.exports = {
  cwd, projectName, plistPath, interval, stdOutPath, stdErrPath
}
