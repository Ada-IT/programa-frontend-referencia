//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);
    if (isNaN(Number(cutNumber))) return;
    const dir = directoryPath.split("/");
    const folder = dir[dir.length - 1];
    console.log(`"${folder}/clase-${cutNumber}",`);
  });
});
