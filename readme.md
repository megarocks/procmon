Adjust paths at `com.user.procmon.plist`

Copy configuration:
```
cp ./com.user.procmon.plist ~/Library/LaunchAgents/com.user.procmon.plist
```

Adjust path at index.js

Load:
```
launchctl load ~/Library/LaunchAgents/com.user.procmon.plist
```

Unload:
```
launchctl unload ~/Library/LaunchAgents/com.user.procmon.plist
```
