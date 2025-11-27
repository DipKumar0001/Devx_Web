const { exec } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');

console.log('🔍 Watching for file changes...');
console.log('📝 Auto-push is ACTIVE - every change will be committed and pushed to GitHub\n');

// Debounce timer to avoid multiple commits for rapid changes
let debounceTimer = null;
const DEBOUNCE_DELAY = 3000; // 3 seconds

// Files/folders to watch
const watchPaths = [
    'src/**/*',
    'public/**/*',
    'index.html',
    'package.json',
    'vite.config.js'
];

// Files/folders to ignore
const ignored = [
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/.cache/**',
    'auto-push.js',
    'auto-push.sh'
];

// Initialize watcher
const watcher = chokidar.watch(watchPaths, {
    ignored: ignored,
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100
    }
});

// Function to run git push
function runGitPush() {
    console.log('\n⏳ Running auto-commit and push...');

    exec('bash ./auto-push.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`⚠️  Warning: ${stderr}`);
        }
        console.log(stdout);
        console.log('---\n🔍 Watching for more changes...\n');
    });
}

// Debounced push function
function debouncedPush(filepath) {
    const relativePath = path.relative(process.cwd(), filepath);
    console.log(`📝 Change detected: ${relativePath}`);

    // Clear existing timer
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    // Set new timer
    debounceTimer = setTimeout(() => {
        runGitPush();
        debounceTimer = null;
    }, DEBOUNCE_DELAY);
}

// Watch for all events
watcher
    .on('add', filepath => debouncedPush(filepath))
    .on('change', filepath => debouncedPush(filepath))
    .on('unlink', filepath => debouncedPush(filepath))
    .on('error', error => console.error(`❌ Watcher error: ${error}`));

// Handle exit
process.on('SIGINT', () => {
    console.log('\n\n👋 Stopping auto-push watcher...');
    watcher.close();
    process.exit(0);
});
