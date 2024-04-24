let main=document.querySelector(".main")

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

let select=document.querySelector("select")

function showdata(arr){
    arr.forEach(function(ele,i) {

let card=document.createElement("div")

        let ID=document.createElement("h2")
        ID.innerHTML="ID - " +ele.id 

        let country=document.createElement("h1")
        country.innerHTML="COUNTRY - " +ele.country

        let rank=document.createElement("h3")
        rank.innerHTML="RANK - " +ele.Rank

        let population=document.createElement("h3")
        population.innerHTML="POPULATION - "+ele.population
       
        
        card.append(ID,country,rank,population)
        main.append(card)
    })
}   

function handleChange(){
    let value = select.value

    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries/${value}`
getdata(URL)
}

select.addEventListener("change",handleChange)

getdata("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
