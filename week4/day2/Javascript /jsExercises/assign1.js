function sumN (num1,num2){
    let total = num1 + num2;
if (total >= 50 && total <= 80){
    return 65  
}else{
    return 80
}
};
console.log(sumN (45,6))

//medium

function madlib(x,subject){
    return x + 's favorite subject in school is ' + subject
};
console.log(madlib("rokhaya","programming"))



function tipAmount(bill, service){
    if (service === "good"){
        return bill * (20/100)}
    if (service === "fair"){
        return bill * (15/100)}
    else (service === "bad");{
        return bill * (10/100)}
};

function totatAmount(bill,service){
    if (service === "good"){
        return (bill * (20/100)) + bill
    }if (service === "fair"){
        return (bill * (15/100)) + bill
    }else (service === "bad");{
        return (bill * (10/100)) + bill
    }
}

function printNumbers(startNum, endNum){
    const startNum = 1;
        const endNum = 10;
        const array = [];
        while(startNum <= endNum){
         array.push(startEnd++);
     }
     console.log(array);
} 

function printSquare(){
    
};









