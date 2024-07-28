const express=require("express")

const multer=require("multer")

const PORT=4004

const server=express()

//server.use(express.json())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    },
  });
  
  const uploads = multer({ storage: storage })

server.get("/",(req,res)=>{
    res.send(`MY NAME IS PANKAJ`)
})

server.post("/uploads", uploads.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(202).send(({message:"file uploaded successfully"}))
  })

server.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})