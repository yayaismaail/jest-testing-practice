const capitalize = (string) => {
    if (typeof string != "string") {
      throw Error;
    }
    let capitalizeStr = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizeStr;
}

module.exports = capitalize;