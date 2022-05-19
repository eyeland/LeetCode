var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (strs.length < 0) return prefix
    
    //iterate through each character in the string Ex. ['flower', 'flow', 'flight'] --> f, l, o......
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i]
        
        //iterate thought each word in array Ex. ['flower', 'flow', 'flight'] --> (f)lower, (f)low, (f)light
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== character) return prefix
        }
        prefix = prefix + character //if the current prefix matches all items in array add to prefix variable Ex. prefix = 'f'
    }
    return prefix //after both for loops finish return prefix containing prefixs or empty string if none is found
};

//Vertical Method

//Time Complexity 0(s)
//Space Complexity 0(1)