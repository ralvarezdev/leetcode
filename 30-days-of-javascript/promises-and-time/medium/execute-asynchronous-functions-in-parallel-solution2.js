/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject)=>
        {
            let counter=0;

            functions.forEach((func, i)=>{
                    func()
                    .then(result=>{
                        functions[i]=result

                        if(++counter===functions.length)
                            resolve(functions)
                    })
                    .catch(err=>reject(err))
                })
        })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */