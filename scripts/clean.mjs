import { exec } from "child_process";

// 删除所有的包
let command = "rimraf -rf packages/*/{lib,esm,dist}";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  console.log(`Output: ${stdout}`);

  if (stderr) {
    console.error(`Error output: ${stderr}`);
  }
});
