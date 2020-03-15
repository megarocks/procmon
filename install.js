const fs = require('fs')

const { plistPath, interval, stdOutPath, stdErrPath, cwd } = require('./conf')

const plistContent = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
   <dict>

      <key>Label</key>
      <string>com.user.procmon</string>

      <key>WorkingDirectory</key>
      <string>${cwd}</string>

      <key>ProgramArguments</key>
      <array>
         <string>/usr/local/bin/node</string>
         <string>index.js</string>
      </array>

      <key>RunAtLoad</key>
      <true/>

      <key>StartInterval</key>
      <integer>${interval}</integer>

      <key>StandardErrorPath</key>
      <string>${stdErrPath}</string>

      <key>StandardOutPath</key>
      <string>${stdOutPath}</string>

      <key>EnvironmentVariables</key>
      <dict>
         <key>PATH</key>
         <string><![CDATA[/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin]]></string>
      </dict>

   </dict>
</plist>
`

fs.writeFileSync(plistPath, plistContent)

