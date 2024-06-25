/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject)=>
        {
            (async ()=>{
                functions.forEach((func, i)=>{
                    functions[i]=func().catch(err=>reject(err))
                })

                for(let i=0;i<functions.length;i++)
                    functions[i] = await functions[i];

                resolve(functions)
            })()
        })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */