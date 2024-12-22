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
function compareNUmbers(a,b){
    if(a>b){
        console.log("a is greater than b")
    }else if(a<b){
        console.log("b is greater than a")
    }else{
        console.log("a is eqauls to b")
    }
}

(compareNUmbers(6,5))


function comparisnTable(a){
    let arr2=[1,2,3,4,5,6]
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]>a){
            console.log(arr2[i]+" is greater than "+a)
        }else if(arr2[i]<a){
            console.log(arr2[i]+" is less than "+a)
        }else if(arr2[i]>=a){
            console.log(arr2[i]+" is greater than equal to "+a)
        }else if(arr2[i]<=a){
            console.log(arr2[i]+" is less than equal to "+a)
        }
    }
}
comparisnTable(3)

function compareThreeNumbers(a,b,c){
    if (a>b && a>c){
        console.log("a is the largest")
        if(b>c){
            console.log("b is greater than c")
        }else{
            console.log("c is greater than b")
        }
    }else if(b>a && b>c){
        console.log("b is the largest")
        if(a>c){
            console.log("a is greater than c")
        }else{
            console.log("c is greater than a")
        }
    }else if(c>a && c>b){
        console.log("c is the largest")
        if(a>b){
            console.log("a is greater than b")
        }else{
            console.log("b is greater than a")
        }
    }
}

compareThreeNumbers(4,2,5)


//Mathematical operator

function performArithmatic(a,b){
    let obj={
        sum:a+b,
        diff:a-b,
        prod:a*b,
        div:a/b
    }
    return obj
}

console.log(performArithmatic(6,7))

function calculateAverage(arr3){
    let sum=0;
    for(let i=0;i<arr3.length;i++){
        sum+=arr3[i]
    }
    return sum/arr3.length

}

numbers=[2,3,5,67,8,33]
console.log("the average is " + calculateAverage(numbers))


function calculateExpression(a,b,c){
let exp=((a+b)*c)/(b-a)
return exp
}

console.log(calculateExpression(7,6,4))

// RELATIONAL OPERATOR

function compareStrings(a,b){
    if(a>b){
        console.log(a+" is greater than "+b)
    } else if(a<b){
        console.log(a+" is less than "+b)
    } else{
        console.log(a+" is equal to "+b)
    }
}

compareStrings(6,89)


function isInRange(value,min,max){
      if(value>min && value<=max){
        console.log("in range")
      }else{
        console.log("not in range")
      }
}

isInRange(20,10,30)

function evaluateCondition(a,b,c){
if (a>b && a>c){
    console.log("a is the largest")
    if(b>c){
        console.log("b is between a and c")
    } else{
        console.log("c is less than a and b")
    }
}else if(b>a && b>c) {
    console.log("b is the largest")
    if(a>c){
        console.log("a is between b and c")
    } else{
        console.log("a is less than b and c")
    }
}else if(c>a && c>b){
    console.log("c is the largest")
    if(b>a){
        console.log("b is between a and c")
    } else{
        console.log("c is less than b")
    }
}
}

evaluateCondition(2,6,5)

// LOGICAL OPERATOR

function logicalOperations(a,b){
    console.log(a||b)
    console.log(a&&b)
    console.log(a!=b)
}
logicalOperations(true,false)

function isEligible(age, hasPermission){
    if(age>=18 && hasPermission==true){
        console.log("Eligible")
    }else {
        console.log("Not eligible")
    }
}

isEligible(17,true)

function evaluateConditions(a, b, c) {
    if (a > 0 && b < 0) {
        return "a is positive and b is negative";
    }
    else if (b === 0 || isNaN(c)) {
        return "b is zero or c is not a number";
    }
    else if (a !== b || c > 10) {
        return "a is not equal to b or c is greater than 10";
    }
}

let  result = evaluateConditions(5, -3, 15);
console.log(result);

//CONDITIONAL STATEMENT

function checkOddEven(number){
if( number%2==0){
    return "Even"
}else{
    return "Odd"
}
}

console.log(checkOddEven(8))

function evaluateGrade(score){
    if(score>=90){
        return "A"
    } else if(score>=80){
        return "B"
    } else if(score>=70){
        return "C"
    } else if(score>=60){
        return "D"
    } else{
        return "F"
    }
}

console.log(evaluateGrade(85))

function calculateDiscount(price, isMember){
    if(isMember){
        return price*0.9
    } else{
        return price
    }
}

console.log(calculateDiscount(100,true))

// PREFIX AND  POSTFIX OPERATORS

function prefixPostfixDemo() {
    let a = 5;

    console.log("Initial value of a:", a);

    // Postfix Increment
    console.log("Using Postfix (a++):");
    console.log("Value before increment:", a);  
    console.log("Value returned by a++:", a++); 
    console.log("Value after increment:", a);   

    a = 5;

    console.log("Using Prefix (++a):");
    console.log("Value before increment:", a);  
    console.log("Value returned by ++a:", ++a); 
    console.log("Value after increment:", a);   
}

prefixPostfixDemo();

function calculatePrefixPostfix(a,b){
console.log(b=++a, a)

console.log(b=a++, a)
}
calculatePrefixPostfix(10,44)

function complexOperation(a, b) {
    console.log("Initial values -> a:", a, ", b:", b);

    
    let result1 = a++ + b;
    console.log("After a++ (postfix), result1 = a++ + b:", result1, " | Updated a:", a, ", b:", b);

    
    let result2 = ++b + a;
    console.log("After ++b (prefix), result2 = ++b + a:", result2, " | Updated a:", a, ", b:", b);

    
    let result3 = b + a--;
    console.log("After a-- (postfix), result3 = b + a--:", result3, " | Updated a:", a, ", b:", b);

    
    let result4 = --b + a;
    console.log("After --b (prefix), result4 = --b + a:", result4, " | Updated a:", a, ", b:", b);

    
    let finalResult = result1 + result2 + result3 + result4;
    console.log("Final result (sum of all results):", finalResult);

    return finalResult;
}


complexOperation(5, 3);


let x=5+2;

console.log(x)