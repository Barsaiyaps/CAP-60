
let main=document.querySelector(".main")

function user(){
function getdata(URL){
fetch(URL)
.then(function(res){
    //res=res.json()
   return res.json()
})
.then(function(res){
    console.log(res)
  showdata(res.data)
})
}
 getdata("https://reqres.in/api/users?page=2")
}

function showdata(arr){
    arr.forEach(function(ele,i) {

        let box=document.createElement("div")

        let name=document.createElement("h3")
        name.innerHTML="Name - " + ele.first_name   

        let email=document.createElement("h3")
        email.innerHTML="Email - "+ele.email

        let avatar=document.createElement("img")
        avatar.src=ele.avatar
       
        box.append(name,email,avatar)
        main.append(box)
    })
}       




