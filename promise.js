//how to produce a promise

let myPromise=new Promise(function(resolve,reject){
    const a=4;
    const b=5;
    setTimeout(()=>{
        if(a===b){
            resolve("The values are equal");
        }
        else{
            reject("The values are not equal");
        }
    },2000)
})

//pending state
//console.log(myPromise)

//fulfilled state
//then method for fulfilling
//consuming your promises
myPromise.then(function(result){
    console.log(result);
})

myPromise.catch(function(failedresult){
    console.log(failedresult);
})//rejected state