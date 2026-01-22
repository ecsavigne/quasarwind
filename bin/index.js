#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { cwd, argv, exit } from 'node:process';
import { spawn } from 'child_process';

// console.log("Dir: ", __dirname);
const filesProject = path.join(import.meta.dirname, "../filesProject");
let targetDir = ""
let projectName = ""
const version = "1.1.0"

// Functions copy fileProject in targetDir (folder created with name_project)
const copyDir = (src, dest) => {
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


const showInfo = () => {
  console.log(`✅ Create Project in: ${targetDir}`);
  console.log("👉 Execute now:");
  console.log(`   cd ${projectName}`);
  console.log("   npm install");
  console.log("   quasarwind dev");
}

const showHelp = () => {
  console.log("🚀 Quasarwind CLI - Help");
console.log("------------------------------------------------------------------");
console.log("✅ Available commands:");
console.log("\n  📌  version, -v                Show version");
console.log("  ✨  create <name_project>      Scaffolds a new project");
console.log("  🛠️  dev, d                     Run development server");
console.log("  📦  build, b                   Compile for prodution");
console.log("\n----------------------------------------------------------------");
}

const runDev = () => {
  const child = spawn('npm', ['run', 'dev'], { 
    stdio: 'inherit',
    shell: true,
    // cwd: path.join(cwd(), 'tu-carpeta-fuente') // Opcional change to your source folder
  })
} 

const runClean = () => {
  const child = spawn('rm', ['-R', 'dist'], { 
    stdio: 'inherit',
    shell: true,
    // cwd: path.join(cwd(), 'tu-carpeta-fuente') // Opcional change to your source folder
  })
} 

const runBuild = () => {
  const child = spawn('npm', ['run', 'build'], { 
    stdio: 'inherit',
    shell: true,
    // cwd: path.join(process.cwd(), 'tu-carpeta-fuente') // Opcional change to your source folder
  })
} 

// commands: [create(name_project), dev, build, help, version]
const main = () => {
  const paramCommand = argv.slice(2)
  // const projectName = paramCommand[1] || "my-project";
  targetDir = path.join(cwd(), projectName);
  // console.log("targetDir: ", targetDir)

  if (paramCommand.length === 0) {
    showHelp()
  }

  if (paramCommand[0] === "version" || paramCommand[0] === "-v") {
    console.log(version);
  }

  if (paramCommand[0] === "help") {
    showHelp()
  }
  
  if (paramCommand[0] === "create") {
    projectName = paramCommand[1]
    if (!projectName) {
      console.log("Ops! You need to specify a name for the project");
      exit(1);
    } else {
      targetDir = path.join(cwd(), projectName); 
      copyDir(filesProject, targetDir);
      showInfo()
    }
  }

  if (paramCommand[0] === "dev" || paramCommand[0] === "d") {
    runDev()
  }

  if (paramCommand[0] === "build" || paramCommand[0] === "b") {
    runBuild()
  }
  
  if (paramCommand[0] === "clean" || paramCommand[0] === "c") {
    runClean()
  }
} 

main()