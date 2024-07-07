
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const conv={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    let total=0

    for(let i=0, next, c;i<s.length;i++){
        next=(i<s.length-1)?s[i+1]:null
        c=s[i]

        if(c==='I')
            total+=(next!==null&&(next==='V'||next==='X'))?-1:1
        else if(c==='X')
            total+=(next!==null&&(next==='L'||next==='C'))?-10:10
        else if(c==='C')
            total+=(next!==null&&(next==='D'||next==='M'))?-100:100
        else
            total+=conv[c]
    }
    return total
};