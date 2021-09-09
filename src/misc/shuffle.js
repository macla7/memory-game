export default function shuffle(array) {
  // Based off golangprograms tutorial of memory game.
  let currIndex = array.length;
  let tempVal;
  let randIndex;

  while (0 !== currIndex) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;

    tempVal = array[randIndex];
    array[randIndex] = array[currIndex];
    array[currIndex] = tempVal;
  }
  return array;
}
