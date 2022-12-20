function convertToRoman(num) {
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X',	'IX', 'V', 'IV', 'I'];
    let romanResult = '';


    for (let i = 0; i < arabicNumerals.length; i++) {
        while (arabicNumerals[i] <= num) {
            romanResult += romanNumerals[i];
            num -= arabicNumerals[i];
        }
    }
    return romanResult;
}

console.log(convertToRoman(36));
