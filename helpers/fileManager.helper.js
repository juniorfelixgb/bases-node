const fs = require("fs");

const fileManager = (base = 5, data) => {
  try {
    let fileName = `./outputs/files/tabla-${base}.txt`;

    if (fs.existsSync(fileName)) {
      fs.rm(fileName, (err) => {
        if (err) throw err;
        console.log(`${fileName} deleted successfully`);
      });
    }

    fs.writeFileSync(fileName, data, "utf8");
  } catch (err) {
    console.trace(err);
    throw err;
  }
};

module.exports = {
  fileManager
};
