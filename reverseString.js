const reverseString = (string) => {
    let splitStr = string.split('');
    let reverseStr = splitStr.reverse();
    return reverseStr.join('');
}

module.exports = reverseString;