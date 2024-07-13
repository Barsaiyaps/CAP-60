const http= require("http")

const server = http.createServer((req,res)=>{
    if(req.url==="/home" && req.method==="GET"){
    res.write("welcome to homepage")    
    res.end()
    }
else if(req.url ==="/cart")
{
    res.write("welcome to cart page")
    res.end();
}else 
    {
        res.write("404 page no")
        res.end();
    }

})


server.listen(8800,()=>{
    console.log("Server is running on Port 8800")
})