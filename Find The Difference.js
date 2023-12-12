/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findAddedLetter(s, t) {
    const charCount = {};

    // Iterate through string s and increment character counts
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log('now charCount:', charCount);

    // Initialize an array to store added letters
    const addedLetters = [];

    // Iterate through string t and decrement character counts
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) - 1;

        // If the character count becomes negative, add it to the result array
        if (charCount[char] < 0) {
            addedLetters.push(char);
        }
    }
    console.log('now charCount:', charCount);

    // Return the array of added letters
    return addedLetters;

    // // If no added letter is found, return null or handle accordingly
    // return null;
}


console.log(findAddedLetter('word', 'wordz'));