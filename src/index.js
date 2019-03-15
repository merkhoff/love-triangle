/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let sum = 0;
  for (let i = 0; i < preferences.length; i++) {
    let firstTriangle = preferences[i];
    let secondTriangle = preferences[firstTriangle - 1];
    let thirdTriangle = preferences[secondTriangle - 1];
    if (firstTriangle - 1 !== i && thirdTriangle -1 === i) sum++;
  }
  return sum / 3;
}
