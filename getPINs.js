function getPINs(observed) {
  // TODO: This is your job, detective!
  const posdig = {
    0: [8],
    1: [2,4],
    2: [1,3,5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [ 3, 5, 9],
    7: [4, 8],
    8: [5, 7, 9, 0],
    9: [6, 8],
  };
  let pin = [];
  let pinArr = observed.toString().split("");

  dfs(pinArr, 0, "");
  return pin;

  function dfs (dig, idx, currpin){
    let curNum = dig[idx];
    let posNums = new Set(posdig[curNum]);
    posNums.add(curNum);
    posNums.forEach(idx == dig.length - 1 ? end : deeper);

    function end(posNums){
      pin.push(currpin + posNums);
    }
    function deeper(posNums){
      dfs(dig, idx + 1, currpin + posNums);
    }
  }
}