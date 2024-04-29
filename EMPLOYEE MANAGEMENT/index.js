let main=document.querySelector(".main")
let tbody=document.createElement("tbody")
let selectdept=document.querySelector("#select1")
let selectdept1=document.querySelector("#select2")
let selectdept2=document.querySelector("#select3")

function getdata(url){
fetch(url)
.then(function(res){

    res=res.json()
   return res
})
.then(function(res){
    //console.log(res)
    showdata(res.data)
})
}



function showdata(array){
    console.log(array)
    tbody.innerHTML=""
   
    
    array.forEach(function(ele,i){

        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerHTML=i+1

        let td2=document.createElement("td")
        td2.innerHTML=ele.name

        let td3=document.createElement("td")
        td3.innerHTML=ele.gender

        let td4=document.createElement("td")
        td4.innerHTML=ele.department

        let td5=document.createElement("td")
        td5.innerHTML=ele.salary

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
        main.append(tbody)
    })
}

function changecat(){
    let value = selectdept.value

    let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=100&filterBy=department&filterValue="+value
    getdata (url)
}
function changecat1(){
    let value = selectdept1.value

    let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=100&filterBy=gender&filterValue="+value
    getdata (url)
}
function changecat2(){
    let value = selectdept2.value

    let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=100&sort=salary&order="+value
    getdata (url)
}
selectdept.addEventListener("change",changecat)
selectdept1.addEventListener("change",changecat1)
selectdept2.addEventListener("change",changecat2)



getdata("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")