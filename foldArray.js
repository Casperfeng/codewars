function foldArray(array, runs) {
    var res = [];
    var nextStep = array.slice();

    while (nextStep.length > 1){
        //adds the next element
        //it is always the first and last element of nextStep
        res.push(nextStep[0] + nextStep[nextStep.length - 1]);

        //remove the first and last element from nextStep such that
        //the next iteration involves new elements
        nextStep = nextStep.slice(1, nextStep.length-1);

    }

    //if the array had an even number of elements
    if (nextStep.length > 0){
        res.push(nextStep[0]);
    }

    //recursively calls the function
    if (runs > 1){
        return foldArray(res, runs-1);
    }

    return res;
}