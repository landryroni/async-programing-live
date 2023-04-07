console.log("start")

function longOperation(waitMs=2000) {
    console.log("waitinf for ",waitMs,"milliseconds")
   
    return setTimeout(function(){
        console.log("Async longOperation completed");
    }, waitMs)
    
}

let result = longOperation(10000);
console.log("Result:",result);
console.log("End")