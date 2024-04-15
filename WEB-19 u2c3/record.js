// fill in javascript code here
document.querySelector("form").addEventListener("submit",todoApp);
let taskArr=[];
function todoApp(event){
    event.preventDefault();
    let Name=document.querySelector("#name").value;
    let employeeID=document.querySelector("#employeeID").value;
    let dept=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
    
    let taskObj={
        name: Name,
        id:employeeID,
        department:dept,
        experience:exp,
        email:email,
        mobile:mobile
    };
    taskArr.push(taskObj);
    displayTable(taskArr);
}

function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    console.log(taskArr.length);
    taskArr.forEach(function(elem){
        let row=document.createElement("tr");

        let col1=document.createElement("td");
        col1.innerText=elem.name;

        let col2=document.createElement("td");
        col2.innerText=elem.id;
        
        let col3=document.createElement("td");
        col3.innerText=elem.department;

        let col4=document.createElement("td");
        col4.innerText=elem.experience;

        let col5=document.createElement("td");
        col5.innerText=elem.email;

        let col6=document.createElement("td");
        col6.innerText=elem.mobile;

        let col7=document.createElement("td");
        col7.innerText=elem.experience;
        if(elem.experience > 5){
         col7.innerText="Senier";
        }else if(elem.experience <=5 || elem.experience>=2){
            col7.innerText="Junior";
        }else{
            col7.innerText="Fresher";
        }

        let col8=document.createElement("td");
        col8.innerText="Delete";
        col8.addEventListener("click",function(event){
            //remove()
            event.target.parentNode.remove()
        });
        row.append(col1,col2,col3,col4,col5,col6,col7,col8);
        document.querySelector("tbody").append(row);
    });
}