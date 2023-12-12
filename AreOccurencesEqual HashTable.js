const print = (s) => {
  console.log(s);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let ht = new Map();

    //populate the map with frequencies
    for (i = 0; i < s.length; i++) {
      ht.set(s[i], (ht.get(s[i]) || 0) + 1);
    }
    print(ht);

    //check all entries for same frequency
    const firstfreq = ht.get(s[0])
    print(`firstfre:${firstfreq}`)
    for (const [key,value] of ht){
        // print(value)
        if ( value!= firstfreq){
            return false
        }
    }
    return true;


  // solution 2 *
//   const charFrequency = {};
//   for (let char of s) {
//     charFrequency[char] = (charFrequency[char] || 0) + 1;
//   }
//   const frequencies = Object.values(charFrequency)
//   print(frequencies);
//   for (let i = 1; i < frequencies.length; i++) {
//     if (frequencies[i] !== frequencies[0]) {
//       return false;
//     }
//   }

//   return true;
};
console.clear();
const s = "aabbcc";

console.log("returned:", areOccurrencesEqual(s));
