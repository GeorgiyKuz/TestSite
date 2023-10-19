const getSymbol = (s, num) => {
    if (num < 0 || num >= s.length) {
    return "";
    }
    return s[num];
}
console.log(getSymbol('The members', 4));
console.log(getSymbol('type can in', 1));
console.log(getSymbol('an error', 20));

const removeDigit = (num) => {
    const str = String(num);
    const secondDigit = str[1];
    const firstDigit = str[0];
    
    return parseInt(firstDigit + secondDigit);
}
    
console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));