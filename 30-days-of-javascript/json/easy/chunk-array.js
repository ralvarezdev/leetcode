/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArr=new Array(parseInt(arr.length/size)+(arr.length%size===0)?0:1)

    for(let i=0,j, k, diff=0;i<arr.length;diff=++i%size){
        if(diff===0){
            k=0
            j=parseInt(i/size)
            chunkedArr[j]=new Array(diff)
        }
        chunkedArr[j][k++]=arr[i]
    }

    return chunkedArr
};
