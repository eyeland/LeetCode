// var removeDuplicates = function(nums) {
//     return [...new Set(nums)]
//     -------------> //fails test because returns new Array <-------
//  };


var removeDuplicates = function(nums) {
    let indexCounter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[indexCounter] = nums[i]
            indexCounter++
        }
    }
    return indexCounter
};


 let test1 = [1, 1, 3, 4, 6, 6, 7, 9]
 console.log(removeDuplicates(test1))


