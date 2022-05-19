

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function(s, k) {
    let n = s.length;
    if (n <= 1) return n;
    let max = 0;
    let tempMax = 0;
    let p = 0;
    let memo = {};
    let maxFreqCount = 0;
    let diff = 0;

    for(let i = 0; i < n; i++) {
        if(memo[s[i]] === undefined) {
            memo[s[i]] = 0;
        }
        ++memo[s[i]];
        maxFreqCount = Math.max(maxFreqCount, memo[s[i]]);
        tempMax = (i - p) + 1;
        diff = tempMax - maxFreqCount;

        if(diff > k) {
            --memo[s[p]]
            p++
        } else {
            max = Math.max(max, tempMax)
        }
    }
    return max
}