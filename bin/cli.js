#!/usr/bin/env node
import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";

const projectName = process.argv[2];
const gitCheckoutCommand = `git clone --branch project-starter https://github.com/OmarAlraisi/react-typescript-starter.git ${projectName}`;
const installDependencies = `cd ${projectName} && npm install`;

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to create ${projectName}!\nError: ${error}`);
    return false;
  }
  return true;
};

const createPackageJSON = () => {
  const packageJson = {};
  Object.assign(packageJson, {
    name: projectName,
    version: "1.0.0",
    author: "",
    type: "module",
    license: "ISC",
    scripts: {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
    },
    dependencies: {
      "@reduxjs/toolkit": "^1.9.1",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^14.4.3",
      "@types/jest": "^29.2.4",
      "@types/redux-actions": "^2.6.2",
      axios: "^1.2.1",
      classnames: "^2.3.2",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.0.5",
      "redux-actions": "^2.6.5",
    },
    devDependencies: {
      "@types/node": "^18.11.14",
      "@types/react": "^18.0.26",
      "@types/react-dom": "^18.0.9",
      "@vitejs/plugin-react-swc": "^3.0.0",
      typescript: "^4.9.3",
      vite: "^4.0.0",
    },
  });

  writeFileSync(
    `${process.cwd()}/${projectName}/package.json`,
    JSON.stringify(packageJson, null, 2),
    "utf-8",
  );
};

const createProject = () => {
  if (existsSync(projectName)) {
    console.log(`Error: "${projectName}" already exists.`);
    process.exit(-1);
  }

  console.log(`Cloning repo as ${projectName}...`);
  const projectCreated = runCommand(gitCheckoutCommand);
  if (!projectCreated) process.exit(-1);

  runCommand(`cd ${projectName}`);
  createPackageJSON();

  console.log("Installing dependencies");
  const dependenciesInstalled = runCommand(installDependencies);
  if (!dependenciesInstalled) process.exit(-1);

  console.log("Project is ready!");
  console.log(`cd ${projectName} && yarn dev`);
};

createProject();
