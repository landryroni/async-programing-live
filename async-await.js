console.log("Start")


function longOperation(waitMs=2000) {
    console.log("longOperation started");
    return new Promise((resolve, reject)=> {
        setTimeout(function() {
            console.log("Async lognOperation completed");
            resolve(waitMs);
        }, waitMs);
    });
}

async function main() {
        try {
            let resultPromise = longOperation(10000);
            let result = await resultPromise;
            console.log("Result",result)   
            let result2 = result *2;
            let resultPromise2 = await longOperation(200) 
            console.log("Result", result2)

    }catch(error){
        console.log("some error happenend",error)
    }finally{
        console.log("finally called")
    }
     
}   


main();
console.log("end");