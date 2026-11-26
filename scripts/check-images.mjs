// Usage: npm run check:images
// Scans source files for /images/... references and reports any missing from public/images.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const exts = new Set(['.js', '.jsx', '.html', '.css']);
const files = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (exts.has(extname(name))) files.push(full);
  }
};
walk(join(root, 'src'));
files.push(join(root, 'index.html'));

const refPattern = /["'`](\/images\/[^"'`\s]+)["'`]/g;
const refs = new Map();
for (const file of files) {
  for (const match of readFileSync(file, 'utf8').matchAll(refPattern)) {
    const list = refs.get(match[1]) ?? [];
    list.push(file.replace(root, ''));
    refs.set(match[1], list);
  }
}

let missing = 0;
for (const [ref, usedIn] of [...refs].sort()) {
  const local = join(root, 'public', ref);
  const ok = existsSync(local) && statSync(local).size > 0;
  if (!ok) missing++;
  console.log(`${ok ? 'OK     ' : 'MISSING'}  ${ref}  (used in: ${[...new Set(usedIn)].join(', ')})`);
}

console.log(`\n${refs.size - missing}/${refs.size} image files found.`);
if (missing > 0) {
  console.log('Add the MISSING files to public/images/ with exactly these names, then reload the page.');
  process.exitCode = 1;
}
