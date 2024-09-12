//A - TRUTHY/FALSY VALUES
function isTruthy(value){
    if(value){
        console.log("true")
    }else{
        console.log("false")
    }
}

isTruthy(1)


function countFalsyValue(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(!arr[i]){
            count++;
        }
    }
    return count;
}

let arr=[1,0,""]
console.log(countFalsyValue(arr))

function filterFalsyValue(arr){
    let filteredArr=arr.filter(Boolean)
    return filteredArr
}

console.log(filterFalsyValue(arr))


//B - COMPARISN OPERATORS


