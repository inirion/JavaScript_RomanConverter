module.exports.convertRoman2Arabic = function convertRoman2Arabic(romanNumber) {
    let arabicValue = 0;
    const RomanArray = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for (let i = 0; i < romanNumber.length; i++) {
        let doubleDigit = romanNumber[i] + romanNumber[i + 1];
        if (RomanArray[doubleDigit]) {
            arabicValue += RomanArray[doubleDigit];
            i++;
        }
        else
            arabicValue += RomanArray[romanNumber[i]];
    }
    return arabicValue;
}