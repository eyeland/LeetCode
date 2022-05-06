//Anagram Brute Force

//time complexity NlogN + MlogM
// let isAnagram = (s, t) => {
//   const sSorted = s.split("").sort().join("")
//   const tSorted = s.split("").sort().join("")
//   return sSorted === tSorted
// }

// let isAnagram = (s, t) => {
//     if(s.length !== t.length) return false
//     const sCount = {}
//     const tCount = {}
//     const N = s.length;
//     for(let i = 0; i < N; i++) {
//         if(!sCount[s[i]]) sCount[s[i]] = 0
//         if(!tCount[t[i]]) tCount[t[i]] = 0
//         sCount[s[i]]++
//         tCount[t[i]]++
//     }
//     // console.log(s, ":", sCount)
//     // console.log(t, ":", tCount)
//     for(let ch in sCount) {
//         if(sCount[ch] !== tCount[ch]) return false
//     }
//     return true;
// }


//Solution using only 1 hashmap
let isAnagram = (s, t) => {
    if(s.length !== t.length) return false
    const count = {}
    const N = s.length;
    for(let i = 0; i < N; i++) {
        if(!count[s[i]]) count[s[i]] = 0
        if(!count[t[i]]) count[t[i]] = 0
        count[s[i]]++
        count[t[i]]--
    }
    // console.log(s, ":", sCount)
    // console.log(t, ":", tCount)
    for(let ch in count) {
        if(count[ch] !== 0) return false
    }
    return true;
}



let test1 = "anagram"
let test2 = "nagaram"

console.log(isAnagram(test1, test2))