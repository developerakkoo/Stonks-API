const path = require('path');
const fs = require("fs");
const clearImage = (filePath) => {
    console.log("DelIMG")
    filePath = path.join(__dirname, "..", filePath);
    fs.unlink(filePath, (err) => console.log(err));
};
module.exports ={
    
    clearImage
}