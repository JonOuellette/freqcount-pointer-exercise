// add whatever parameters you deem necessary
// separatePositive
// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. 
//The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

// Examples:

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]
// Constraints

// Time Complexity: O(N)


function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // If the value at the left index is positive, move the left pointer one index to the right.
        if (arr[left] > 0) {
            left++;
        } else if (arr[right] < 0) {
            // If the value at the right index is negative, move the right pointer one index to the left.
            right--;
        } else {
            // if the value at the left index is negative and the value a the right index is positive - swap the values at the respective indices.  The move the left pointer one index to the right and the right pointer one index to the left. 
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}
