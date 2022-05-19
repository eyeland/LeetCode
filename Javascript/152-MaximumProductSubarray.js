var maxProduct = function(nums) {
    let res = Math.max(...nums); 
    let curMin = curMax = 1;

    for (let i = 0; i < nums.length; i++) {
        //n is current number
        let n = nums[i];
        // console.log(n)
        //set current array position value to 1 if the value is 0
        if (n === 0) curMin = curMax = 1

        //temp value for curMax since curMax value will change before curMin calculation
        let tmp = curMax * n
        // console.log(`current temp value ${tmp}`)

        curMax = Math.max(n * curMax, n * curMin, n)
        // console.log(`current max value ${curMax}`)

        curMin = Math.min(tmp, n * curMin, n)
        // console.log(`current min value ${curMin}`)
        //adds values
        res = Math.max(res, curMax)
    }

    return res
}


let test1 = [-4,-3,-2]; // 12
let test2 = [-2,0,-1];

console.log(maxProduct(test1))

//neetcode python to javascript
