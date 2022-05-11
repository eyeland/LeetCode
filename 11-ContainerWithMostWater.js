//<-- Brute Force ---->
// 0(n^2)

// var maxArea = function(height) {
//     let max = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = 0; j < height.length; j++) {
//             max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
//         }
//     }
//     return max
// }

// Two Pointer Solution 0(n)

var maxArea = height => {
    let left = 0, right = height.length - 1, max = 0;
    while(left < right) {
        let volumn = Math.min(height[left], height[right]) * (right - left);
        max = max > volumn ? max : volumn;
        height[left] < height[right] ? left++ : right--;
    }
    return max
}