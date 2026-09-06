# Modrinth Web Launcher

A GitHub Pages-ready web frontend inspired by the Modrinth App, with a small local Windows bridge so the **Launch Minecraft** button can start the Minecraft launcher.

## GitHub Pages

Upload the contents of this folder to a repository and enable **Settings → Pages → Deploy from branch**. The site is static, so no server is required for the UI.

## Minecraft launching

Browsers cannot directly execute `.exe` files on a user's PC. This project therefore uses a localhost bridge:

1. Install Node.js LTS on Windows.
2. Open `launcher/start-launcher.bat`.
3. Keep that window running.
4. Open the GitHub Pages site and click **Launch Minecraft**.

The default launch uses the registered `minecraft://` protocol. You can change the command under Settings if you have a specific launcher command/executable.

> Important: a static GitHub Pages website cannot safely or reliably launch arbitrary local executables by itself. The bridge is the part that provides the desktop capability.

## Next steps

- Connect the Modrinth API for live projects.
- Add Microsoft OAuth if you want account login.
- Store/import actual Minecraft instances.
- Add per-instance launch arguments and Java/runtime management.
- Replace the mock cards with real Modrinth project/instance data.
