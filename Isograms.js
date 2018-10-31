function isIsogram(str){
    var usedLetters = [];
    for (var i = 0; i < str.length; i++){
        var currentLetter = str.charAt(i).toLowerCase();
        if (usedLetters.indexOf(currentLetter) != -1){
            return false;
        }
        usedLetters.push(currentLetter);
    }
    return true;
}