let main=document.querySelector(".main")

function getdata(URL){
fetch(URL)
.then(function(res){
    //res=res.json()
   return res.json()
})
.then(function(res){
    console.log(res)
  showdata(res)
})
}


function showdata(arr){
    arr.forEach(function(ele,i) {

        let h3=document.createElement("h3")
        h3.innerHTML=ele.title
       
        
        main.append(h3)
    })
}   

getdata("https://jsonplaceholder.typicode.com/todos")