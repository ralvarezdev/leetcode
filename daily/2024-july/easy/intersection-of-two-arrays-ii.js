/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map =new Map()
    let value

    for(const num of nums1){
        value = map.get(num)
        map.set(num, (value===undefined)?1:value+1)
    }

    const intersection=[]
    for(const num of nums2)
        {
            value = map.get(num)

            if(value!==undefined){
                if(value>1)
                    map.set(num, value-1)
                else if(value===1)
                    map.delete(num)

                intersection.push(num)
            }
        }

        return intersection
};