
//------>First Answer (Wrong)
// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) nums[i] = "_"
//     }
//     return nums.length
// };

// var removeElement = (nums, val) => {
//     return nums.filter(num => num === val)
// }

var removeElement = (nums, val) => {
    let pointer1 = 0;

    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
        if (nums[pointer2] !== val){
            nums[pointer1] = nums[pointer2]
            pointer1++
        }
    }
    return pointer1
}




let test1 = [3,2,2,3]
console.log(removeElement(test1, 3))