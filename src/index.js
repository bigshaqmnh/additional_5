module.exports = function check(str, bracketsConfig) {
  let compare = false, counter = 0, strSplit = str.split('');

  for (let i = 0; i < bracketsConfig.length; ++i) {
    let openBracket = strSplit.indexOf(bracketsConfig[i][0]);
    let closeBracket = strSplit.indexOf(bracketsConfig[i][1]);

    if (closeBracket < openBracket) {
      compare = false;
      break;
    }
    for (let j = openBracket; j < strSplit.length; ++j) {
      if (strSplit[j] === bracketsConfig[i][0]) {
        counter++;
      }
      if (strSplit[j] === bracketsConfig[i][1]) {
        counter--;
      }
    }
    if (!counter) {
      compare = true;
    } else {
      compare = false;
    }
  }

  return compare;
}
