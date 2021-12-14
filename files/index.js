const fs = require('fs').promises;
const path = require('path');

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const addData = async (data) => {
    try {
        const filePath = path.join(__dirname, '../files/data.txt');
        await fs.appendFile(filePath, data);
    } catch (error) {
        console.error(`Got an error trying to write the file: ${error.message}`);
    }
}
readFile(path.join(__dirname, 'data.txt'));

addData('\nTari9 ba3d lya mn ...');

