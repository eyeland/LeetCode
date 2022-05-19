//<---  WRONG PASS / FAILEd --->

// var containsDuplicate = function(nums) {
//     let map = {}
//     for (let i = 0; i < nums.length; i++) {
//         map[i] = i
//         if (map[i] !== undefined) return true
//     }
// };


function containsDuplicate(nums) {
    let memory = {}

    for (let i = 0; i < nums.length; i++) {
        if(memory[nums[i]] === undefined) {
            memory[nums[i]] = no
        } else {
            return true
        }
    }
    return false
}