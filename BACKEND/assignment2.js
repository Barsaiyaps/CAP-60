const path = require("path");
const fs = require("fs")

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

const readTheFile=(file)=>{
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data)
        }
    })
}

switch (operation) {
  // complete the fillowing function.
    
case "read":
if(file){
    readTheFile(file)
}
break

  default:
    console.log(`Invalid operation '${operation}'`);
}