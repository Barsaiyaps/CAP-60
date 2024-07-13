// index.js

//  import the crypto module

const crypto =require("crypto");
const path=require("path")




//  get a commands using process.argv

const args=process.argv.slice(2)
const operation=args[0]
const numbers = args.slice(1).map(Number);

const randomNumber=(length)=>{
const number=crypto.randomBytes(length,(err,buff)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log(buff.toString("hex"))
    }
})
}

const sine=(length)=>{
    console.log(crypto.sine(length))
    }

    const cosine=(length)=>{
    
    }

    const tan=(length)=>{
    
    }

// complete the  function



switch (operation) {
  
    case "add":
    console.log(numbers.reduce((acc,curr)=>acc+curr,0))
    break;

    case "sub":
    console.log(numbers.reduce((acc,curr)=>acc-curr))
    break;

    case "multiply":
    console.log(numbers.reduce((acc,curr)=>acc*curr))
    break;

    case "division":
    console.log(numbers.reduce((acc,curr)=>acc/curr))
    break;
    
    case "sine":
        sine(numbers[0])
    break;

    case "cosine":
        cosine(numbers[0])
    break;

    case "tan":
        tan(numbers[0])
    break;

    case "random":
    randomNumber(numbers[0])
    break;

    default:
      console.log("Invalid operation");
  }