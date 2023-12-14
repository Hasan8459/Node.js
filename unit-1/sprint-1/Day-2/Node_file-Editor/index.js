const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case 'read':
    fs.readFile( `${file}`, {encoding : 'utf-8'}, (err,data)=>{
      if(err) throw err;
      console.log(data)
    } ) 
  break;
  
  case 'delete':
    fs.unlink(`${file}`,(err)=>{
      if(err) throw err;
      console.log("File Deleted")
    })
  break;

  case 'create':
    fs.writeFileSync(`${file}`,`${content}` ,(err)=>{
      if(err) throw err;
      console.log("Saved");
    })
  break;

  case 'append':
    fs.appendFile(`${file}`, `\n${content}` ,(err)=>{
      if(err) throw err;
      console.log('Appended')
    })
  break;

  case 'rename':
    fs.rename( `${file}` , `${content}` ,(err)=>{
      if(err) throw err;
      console.log('File Renamed')
    })
  break;
  

  case 'list':
    // Usage
    getDirectories(process.cwd() , (err, directories) => {
      if (err) {
        console.error(err);
      } else {
        console.log(directories); // ['SomeFolder', 'SomeOtherFolder', ...]
      }
    });
 break;

  default:
    console.log(`Invalid operation '${operation}'`);
}



function getDirectories(source, callback) {
  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) {
      callback(err);
    } else {
      callback(
        null,
        files
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name)
      );
    }
  });
}
