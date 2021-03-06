function maxSubway (nums) {
    let solutions = nums[0]
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        solutions = Math.max(solutions, nums[i])
    }
    return solutions
}