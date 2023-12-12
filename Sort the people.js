/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let ht ={}
    for(i=0;i<heights.length; i++){
      ht[heights[i]] = names[i]
    }
    console.log('hash:\t', ht);

    let res = heights.sort().reverse();

    let finalSol = []
    res.forEach( (key,index)=>{
        finalSol.push( ht[res[index]] )
    })

    console.log('\n ** final SOL:', finalSol)
    return finalSol;
};
console.clear();
names = ["Mary","John","Emma"], heights = [180,165,170]
console.log('names:',names);
console.log('heights:',heights);

console.log(sortPeople(names, heights))