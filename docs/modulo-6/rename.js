//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  let aux = 1;
  files.forEach(function (file) {
    const cutNumber = file.substring(0, 2);
    if (isNaN(Number(cutNumber))) return;
    const digit = aux <= 9 ? "0" + aux : aux;
    const rename = `${digit}${file.slice(2)}`;

    fs.readFile(file, "utf-8", function (err, data) {
      if (err) throw err;

      let newValue = data.replace(/(?<=clase-)([0-9]*)\w/, digit);
      newValue = newValue.replace(/([0-9]*)\)/, digit + ")");

      fs.writeFile(file, newValue, "utf-8", function (err, data) {
        if (err) throw err;
        console.log("Done!");
      });
    });
    console.log("Successfully renamed the directory.", rename);
    //   fs.rename(file, rename, function (err) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("Successfully renamed the directory.", rename);
    //     }
    //   });

    aux++;
  });
});
