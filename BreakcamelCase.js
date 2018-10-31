// complete the function
function solution(string) {
    let solString = "";
    for (let i = 0; i < string.length; i++){
        if ((string.charAt(i)) === (string.charAt(i)).toUpperCase()){
            solString += " ";
        }
        solString += string.charAt(i);
    }
    return solString;
}