/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = new Array()

    let result="",c
    const startEndIdx=s.indexOf('(')
    const start= (startEndIdx>=0)?s.substring(0,startEndIdx ):""
    const endStartIdx=s.lastIndexOf(')')+1
    const end=(endStartIdx>=0)?s.substring(endStartIdx):""

    for(let i=startEndIdx;i<endStartIdx;i++){
        c=s[i]

        if(c!==')'){
            stack.push(c)
            continue
        }

        c=stack.pop()
        result=""

        while(c!=='(')
        {
            result+=c
            c=stack.pop()
        }

        for(let i=0;i<result.length;i++)
            stack.push(result[i])
    }

    result=stack.join('')

    return start+result+end
};