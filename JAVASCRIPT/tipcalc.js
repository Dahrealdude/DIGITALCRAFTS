var goodS =.2
var fairS = .15
var badS = .1
function tipCalc(bill,service){
    if(service == "good"){
        return "Your good tip is " + bill*goodS + ","
    }else if (service== "fair"){
        return "Your fair tip is " + bill*fairS + ","
    }else if (service== "bad"){
        return "Your bad tip is " + bill*badS + ","
    } 
    // else{
    //     return "Your good tip is" + bill*goodS + ","
    // }   
}
console.log(tipCalc(45, "bad"))