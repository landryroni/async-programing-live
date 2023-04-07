console.log("start")

function longOperation(waitMs=2000) {
    console.log("longOperation started",waitMs,"milliseconds")
    let waitUntil = new Date(new Date().getTime() + waitMs);
    while (new Date() < waitUntil){
        //do nothing
    }
    console.log("longOperation end");
    return waitMs;
}

let result = longOperation(5000);
console.log("Result:",result)
console.log("End")