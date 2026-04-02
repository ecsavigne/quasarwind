#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { cwd, argv, exit } from 'node:process';
import { spawn } from 'child_process';
import * as colors from "./colors.js";

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
console.log("\n  📌  version, -v               Show version");
console.log("  ✨  create <name_project>     Scaffolds a new project");
console.log("  🛠️   dev, d                    Run development server");
console.log("  🛠️   clean, c                  Clean files generate after build");
console.log("  📦  build, b                  Compile for prodution");
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
  targetDir = path.join(cwd(), projectName);

  if (paramCommand.length === 0) {
    showHelp()
    exit(1);
  }

  switch (paramCommand[0]) {
    case "version":
    case "-v":
      console.log(version);
    break;
    case "help":
    case "-h":
      showHelp();
    break;
    case "clean":
    case "c":
      runClean();
    break;
    case "build":
    case "b":
      runBuild();
    break;  
    case "dev":
    case "d":
      runDev();
    break;
    case "create":
      projectName = paramCommand[1]
      if (!projectName) {
        console.log("Ops! You need to specify a name for the project");
        exit(1);
      } else {
        targetDir = path.join(cwd(), projectName); 
        copyDir(filesProject, targetDir);
        showInfo()
      }
    break;
    default:
      console.log(colors.Color(colors.red,"\nOps! Command not found\n"));
      showHelp();
    break;
  }
} 

main()