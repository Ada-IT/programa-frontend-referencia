const { readdirSync, readdir } = require("fs");
const fs = require("fs");

const editFiles = (files, directoryPath) => {
  let aux = 1;
  console.log(files, directoryPath);
  //Change file
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);

    if (isNaN(Number(cutNumber)) || cutNumber == 0) return;
    const digit = aux <= 9 ? "0" + aux : aux;
    const rename = `${directoryPath}/${digit}${file.slice(2)}`;
    const pathFile = `${directoryPath}/${file}`;

    fs.readFile(pathFile, "utf-8", function (err, data) {
      if (err) throw err;
      console.log(cutNumber, file);
      let newValue = data.replace(/(?<=clase-)([0-9]*)\w/, digit);
      newValue = newValue.replace(/([0-9]*)\)/, digit + ")");

      fs.writeFile(pathFile, newValue, "utf-8", function (err, data) {
        if (err) throw err;
        console.log("Done!");
      });
    });

    console.log({ rename, pathFile });

    aux++;
  });
  aux = 1;
  //rename file
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);

    if (isNaN(Number(cutNumber)) || cutNumber == 0) return;
    const digit = aux <= 9 ? "0" + aux : aux;
    const rename = `${directoryPath}/${digit}${file.slice(2)}`;
    const pathFile = `${directoryPath}/${file}`;
    fs.rename(pathFile, rename, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully renamed the directory.", rename);
      }
    });

    aux++;
  });
};

const generateSidebar = (files, directoryPath) => {
  console.log("\n\n");
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);
    if (isNaN(Number(cutNumber))) return;
    const dir = directoryPath.split("/");
    const folder = dir[dir.length - 1];
    console.log(`"${folder}/clase-${cutNumber}",`);
  });
};

const countHours = (files, directoryPath) => {
  let sessions = 0;
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);
    if (isNaN(Number(cutNumber)) || cutNumber == 0) return;
    sessions++;
    const dir = directoryPath.split("/");
    const folder = dir[dir.length - 1];
    // console.log(`"${folder}/clase-${cutNumber}",`);
  });
  console.log(`modulo ${directoryPath}`, sessions, sessions * 3);
  console.log(sessions);
};
const getDirectories = (source, callback) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .forEach((dirent) =>
      readdir(dirent.name, (err, files) => callback(files, dirent.name))
    );

getDirectories(__dirname, editFiles);
getDirectories(__dirname, generateSidebar);
// getDirectories(__dirname, countHours);
