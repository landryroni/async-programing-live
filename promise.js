console.log("Start")


function longOperation(waitMs=2000) {
    console.log("longOperation started")
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("lonOperation finishes");
            resolve(100);
        }, waitMs)
    })
}

let resultPromise = longOperation(1000);
console.log(resultPromise)

resultPromise.then(function(result){
    console.log("result:",result)
    return result * 2;
}).then(function(result2){
    console.log("result2:",result2)
}).catch(function(error){
    console.error("something happenend", error)
}).finally(function(){
    console.log("Finally")
    // code clean up
})

console.log("End")

let fn = (result)=> result *2

console.log("retruning",fn(3))