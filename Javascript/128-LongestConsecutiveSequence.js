//<----Question Info ----->-->

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

const longestConsecutive = nums => {
    const dict = {}
    for (const num of nums) if (!dict[num]) dict[num] = true

    let maxLength = 0;

    for (const num of nums) {
        if (dict[num-1]) continue;

        let localLength = 1;
        let i = 1;
        while (dict[num + i]) {
            localLength++;
            i++;
        }

        maxLength = Math.max(maxLength, localLength);
    }

    return maxLength;
}







const test1 = [100, 4, 200, 1, 3, 2]
const test2 = [0,3,7,2,5,8,4,6,0,1]

