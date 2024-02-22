// add whatever parameters you deem necessary
// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++; // Move to the next character in str1
        }
        if (i === str1.length) return true; // All characters in str1 found in str2 in order
        j++; // Move to the next character in str2
    }

    return false; // Not all characters in str1 are found in str2 in order
}
