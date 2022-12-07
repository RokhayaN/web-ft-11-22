function tipAmount(bill,service){
    if (service === "good"){
        return (bill * (20/100)) 
    }if (service === "fair"){
        return (bill * (15/100)) 
    }else (service === "bad");{
        return (bill * (10/100)) 
    }
}

console.log(tipAmount(100,"bad"))
