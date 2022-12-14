#!/usr/bin/env node
const { execSync } = require("child_process");
const projectName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/OmarAlraisi/react-typescript-starter.git ${projectName}`;
const installDependencies = `cd ${projectName} && yarn`;

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
