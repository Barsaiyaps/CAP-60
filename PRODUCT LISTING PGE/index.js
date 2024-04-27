let main=document.querySelector(".main")

let select=document.querySelector(".select1")
let select2=document.querySelector(".select2")

console.log(select.value)

function  getData(url){
fetch(url)
.then(function(res){
    return res.json()

})
.then(function(res){
    console.log(res)
    showdata(res)
})
}


function showdata(array){
    main.innerHTML=""
    array.forEach(function(ele,i){
    let container=document.createElement("div")

    let image=document.createElement("img")
    image.src=ele.image

    let title=document.createElement("h2")
    title.innerHTML=ele.title

    let price=document.createElement("h3")
    price.innerHTML="Price: $ "+ele.price

    container.append(image,title,price)
    main.append(container)

    });
}

select.addEventListener("change",showresult)

function showresult(){
    let url = "https://fakestoreapi.com/products/"+"category/"+select.value

    getData(url)
}

select2.addEventListener("change",sort)

function sort(){
    let url= "https://fakestoreapi.com/products?sort="+select2.value
    getData(url)
}

getData("https://fakestoreapi.com/products/")

