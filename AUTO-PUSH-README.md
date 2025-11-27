# Auto-Push Setup

Automatic GitHub commit and push system for your Java Learning Hub.

## 🚀 How It Works

The auto-push system watches your project files and automatically commits and pushes changes to GitHub whenever you save a file.

## 📋 Features

- ✅ Automatically detects file changes
- ✅ Commits with timestamp
- ✅ Pushes to GitHub
- ✅ Debounces rapid changes (waits 3 seconds)
- ✅ Ignores node_modules and build files
- ✅ Shows real-time status

## 🎯 Usage

### Start Auto-Push

Run this command in a **separate terminal** (keep your dev server running in another):

```bash
npm run auto-push
```

You'll see:
```
🔍 Watching for file changes...
📝 Auto-push is ACTIVE - every change will be committed and pushed to GitHub
```

### What Gets Watched

- All files in `src/`
- All files in `public/`
- `index.html`
- `package.json`
- `vite.config.js`

### What's Ignored

- `node_modules/`
- `.git/`
- `dist/`
- The auto-push scripts themselves

## 📝 Workflow

1. Keep your dev server running: `npm run dev`
2. In another terminal, start auto-push: `npm run auto-push`
3. Edit your files normally
4. Auto-push will:
   - Detect the change within 3 seconds
   - Commit with timestamp: "Auto-save: 2025-11-27 12:30:45"
   - Push to GitHub automatically
   - Show success message

## ⚙️ Configuration

Edit `auto-push.js` to customize:

- **Debounce delay**: Change `DEBOUNCE_DELAY` (currently 3000ms)
- **Watch paths**: Modify `watchPaths` array
- **Ignored files**: Modify `ignored` array

## 🛑 Stopping Auto-Push

Press `Ctrl+C` in the terminal running auto-push.

## ⚠️ Important Notes

- Auto-push works in the background - you don't need to manually commit
- Each save triggers a commit after 3 seconds of inactivity
- Your GitHub credentials are already configured ✅
- Auto-push runs independently from your dev server

## 🔧 Troubleshooting

**Auto-push not working?**
- Make sure you ran `npm install` after setup
- Check that `auto-push.sh` has execute permissions
- Verify your GitHub remote is configured: `git remote -v`

**Too many commits?**
- Increase `DEBOUNCE_DELAY` in `auto-push.js`
- Consider committing manually for major milestones

## 📊 Example Output

```
📝 Change detected: src/components/Hero.jsx
⏳ Running auto-commit and push...
🔄 Auto-committing changes...
[main abc123d] Auto-save: 2025-11-27 12:30:45
 1 file changed, 5 insertions(+), 2 deletions(-)
📤 Pushing to GitHub...
✅ Successfully pushed to GitHub!
---
🔍 Watching for more changes...
```

## 💡 Tips

1. **Use with two terminals**: One for `npm run dev`, one for `npm run auto-push`
2. **Commit messages**: Auto-generated with timestamps
3. **Manual commits**: You can still commit manually when needed
4. **Battery-friendly**: Uses efficient file watching

---

**Your changes are now automatically backed up to GitHub!** 🎉
