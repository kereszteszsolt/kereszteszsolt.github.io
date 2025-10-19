import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve project root (one level up from this scripts/ folder)
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'CNAME');
const destDir = path.join(root, 'dist');
const dest = path.join(destDir, 'CNAME');

try {
  if (!fs.existsSync(src)) {
    console.log(`No CNAME file found at ${src}. Nothing to copy.`);
    process.exit(0);
  }

  // Ensure dist directory exists (build should create it, but be safe)
  fs.mkdirSync(destDir, { recursive: true });

  fs.copyFileSync(src, dest);
  console.log(`Copied CNAME -> ${dest}`);
} catch (err) {
  console.error('Failed to copy CNAME:', err);
  process.exit(1);
}
