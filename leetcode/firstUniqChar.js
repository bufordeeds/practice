//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

/* Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

const string = "loveleetcode"

const firstUniqChar = (s) => {
    let obj = { 1: [], 2: [] }
    for (let i = 0; i < s.length; i++) {
        if (obj[2].includes(s[i])) {
            null
        }
        else if (obj[1].includes(s[i])) {
            obj[1].splice(obj[1].indexOf(s[i]), 1)
            obj[2] = obj[2].concat([s[i]])
        } else {
            obj[1] = obj[1].concat([s[i]])
        }
    }
    return s.indexOf(obj[1][0])
};


console.log(firstUniqChar(string));
