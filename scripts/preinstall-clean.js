/**
 * يحذف node_modules و package-lock.json إذا وُجدت آثار npm
 * حتى لا يظهر تحذير pnpm "installed by a different package manager"
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const lockFile = path.join(root, 'package-lock.json');
const npmMarker = path.join(root, 'node_modules', '.package-lock.json');
const nodeModules = path.join(root, 'node_modules');

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  try {
    fs.rmSync(dir, { recursive: true, maxRetries: 3 });
    console.log('  Removed:', path.relative(root, dir));
  } catch (e) {
    console.warn('  Could not remove', dir, e.message);
  }
}

function rmFile(file) {
  if (!fs.existsSync(file)) return;
  try {
    fs.unlinkSync(file);
    console.log('  Removed:', path.relative(root, file));
  } catch (e) {
    console.warn('  Could not remove', file, e.message);
  }
}

const hasIgnored = fs.existsSync(path.join(nodeModules, '.ignored'));
const hasNpm = fs.existsSync(lockFile) || fs.existsSync(npmMarker);

if (hasNpm || hasIgnored) {
  console.log('preinstall: cleaning npm artifacts for pnpm...');
  rmFile(lockFile);
  rmDir(nodeModules);
}
