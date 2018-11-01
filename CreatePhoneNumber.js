function createPhoneNumber(numbers){
    var phoneNumber = "";
    var controlInt = 0;
    for (let i = 0; i < numbers.length; i++){
        switch(controlInt){
            case 0:
                phoneNumber += "(";
                break;
            case 3:
                phoneNumber += ") ";
                break;
            case 6:
                phoneNumber += "-";
                break;
        }
        console.log(phoneNumber);
        phoneNumber += numbers[i];
        controlInt++;
    }
    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"
