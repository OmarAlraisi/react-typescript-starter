#!/usr/bin/env node
import { execSync } from "child_process";
import { existsSync } from "fs";

const projectName = process.argv[2];
const gitCheckoutCommand = `git clone --branch project-starter https://github.com/OmarAlraisi/react-typescript-starter.git ${projectName}`;
const installDependencies = `cd ${projectName} && npm install`;

if (existsSync(projectName)) {
  console.log(`Error: "${projectName}" already exists.`);
  process.exit(-1);
}

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to create ${projectName}!\nError: ${error}`);
    return false;
  }
  return true;
};

console.log(`Cloning repo as ${projectName}...`);
const projectCreated = runCommand(gitCheckoutCommand);
if (!projectCreated) process.exit(-1);

console.log("Installing dependencies");
const dependenciesInstalled = runCommand(installDependencies);
if (!dependenciesInstalled) process.exit(-1);

console.log("Project is ready!");
console.log(`cd ${projectName} && yarn dev`);
