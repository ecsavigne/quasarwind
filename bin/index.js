#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2] || "my-project";
const targetDir = path.join(process.cwd(), projectName);

// Functions copy template
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

const templateDir = path.join(__dirname, "../template");

// Copy Project
copyDir(templateDir, targetDir);

console.log(`✅ Craete Project in: ${targetDir}`);
console.log("👉 Execute now:");
console.log(`   cd ${projectName}`);
console.log("   npm install");
console.log("   npm run dev");