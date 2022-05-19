
//Time complexity 0 (nWlogW)
//Space (NW)
// function groupAnagrams (strs) {
//     let cache = {} ///{'aet' : [ate, eat, tea]}

//     for (let str of strs) {
//         let sortedKey = str.split('').sort().join('') //aet
//         if (!cache[sortedKey]) cache[sortedKey] = [str] 
//         else (cache[sortedKey].push(str));
//     }

//     return Object.values(cache)
// }


//Optimized
function groupAnagrams (strs) {
    let cache = {} 
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 27, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]


    for (let str of strs) {
        let Key = str.split('').reduce((total, char) => total*primes[charCodeAt()-97])
        if (!cache[Key]) cache[Key] = [str] 
        else (cache[Key].push(str));
    }

    return Object.values(cache)
}

const test1 = ["eat","tea","tan","ate","nat","bat"]
//Expected = [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(test1));