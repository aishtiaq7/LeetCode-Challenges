
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const sourceCities = new Set();

  for (i =0;i<paths.length; i ++){
        sourceCities.add(paths[i][0])
  }
  console.log('sourceCities', sourceCities);


  for (const city of paths) {
      console.log('dest:', city[1]);
      let destination = city[1];
      if (!sourceCities.has(destination)) {
          return destination;
      }
  }
  return ''
};

const testPaths1 = [
["New York", "Chicago"],
["Chicago", "Los Angeles"],
["Los Angeles", "San Francisco"],
];


console.log('returned:', destCity(testPaths1));
