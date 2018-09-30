module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let strSplit = str.split(''), brackets = new Object(), container = [];

  for (let i = 0; i < bracketsConfig.length; ++i) {
    let openingBracket = bracketsConfig[i][0];
    let closingBracket = bracketsConfig[i][1];
    brackets[openingBracket] = closingBracket;
  }

  for (let i = 0; i < strSplit.length; ++i) {
    if (Object.keys(brackets).find(key => key === strSplit[i])) {
      container.push(strSplit[i]);
      if (strSplit[i] === '8' || strSplit[i] === '7' || strSplit[i] === '|') {
        container.pop();
      }
    } else {
      let bracket = container.pop();

      if (brackets[bracket] !== strSplit[i]) {
        return false;
      }
    }
  }
  
  return true;
}
