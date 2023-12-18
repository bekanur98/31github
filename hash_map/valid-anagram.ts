/*

242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let firstWord = new Map<string, number>();
    let secondWord = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if (firstWord.has(s[i])) {
            firstWord.set(s[i], firstWord.get(s[i]) + 1);
        } else {
            firstWord.set(s[i], 1);
        }

        if (secondWord.has(t[i])) {
            secondWord.set(t[i], secondWord.get(t[i]) + 1);
        } else {
            secondWord.set(t[i], 1);
        }
    }

    let isAnagram = true;
    firstWord.forEach((val, key) => {
        if (!secondWord.has(key) || val !== secondWord.get(key)) {
            isAnagram = false;
            return;
        }
    });


    return isAnagram;
};

const result = isAnagram("aacc", "ccac");
console.log(result); //output false