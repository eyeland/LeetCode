// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//<----- BRUTE FORCE --------> O(n^3)

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i -1]) continue;
        for(let j = i + 1; j < nums.length; j++) {
            if(j > i + 1 && nums[j] == nums[j - 1]) continue;
            for(let k = j + 1; k < nums.length; k++) {
                if(k > j + 1 && nums[k] == nums[k - 1]) continue;
                if(nums[i] + nums[j] + nums[k] == 0) {
                    results.push(nums[i], nums[j], nums[k])
                }
            }
        }
    }
    return results;
}


// <----Optimized------->


// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const results = [];
//     for(let i = 0; i < nums.length; i++) {
//         if(i > 0 && nums[i] === nums[i -1]) continue;

//         const target = 0 - nums[i]
//         let left = i + 1
//         let right = nums.length - 1

//         while(right > left) {
//             const sum = nums[left] + nums[right]
//             if(sum > target) {
//                 right--
//             } else if (sum < target) {
//                 left++
//             } else {
//                 results.push([nums[i], nums[left], nums[right]])
//                 while (nums[left] === nums[left + 1]) left++;
//                 while (nums[right] === nums[right + 1]) right++;
//                 left++
//                 right++
//             }
//         }
//     }
//     return results;
// }


// <----Another optimized ---->

var threeSum = function(nums) {
    if (nums.length < 3) return []

    let res = []

    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1

        if (i !== 0 && nums[i] === nums[i - 1]) continue

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                while(j < k && nums[j] === nums[j -1]) {
                    j++
                }
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return res
}












const test1 = [-1,0,1,2,-1,-4] // [[-1,-1,2],[-1,0,1]]
const test2 = [] // []
const test3 = [0] // []

console.log(threeSum(test1), threeSum(test2), threeSum(test3))