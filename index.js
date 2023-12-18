function generatePassword({ length: char, pattern }) {
  let data = [];
  for (let i = 0; i < char; i++) {
    data.push(getPass(pattern));
  }
  if (data.length) {
    data = data.join("");
  }
  return data;
}

function getPass(number) {
  const expectedKeys = ['upperCase', 'lowerCase', 'specialCharacter', 'numeric'];
  const inputKeys = Object.keys(number);
  const keysMatch = expectedKeys.every(key => inputKeys.includes(key));
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let specialChar = "`!#@$%^[&*]_-><.,?;:}|{";
  let upperAlpha = alpha.toUpperCase();
  let result;
  let arr = [];
  if (number?.upperCase) {
    arr.push(upperAlpha[dynamicRandomNum(26)]);
  }
  if (number?.lowerCase) {
    arr.push(alpha[dynamicRandomNum(26)]);
  }
  if (number?.specialCharacter) {
    arr.push(specialChar[dynamicRandomNum(23)]);
  }
  if (number?.numeric) {
    arr.push(num[dynamicRandomNum(10)]);
  }
  if (
    !number ||
    (Object.keys(number).length == 0 && number.constructor == Object) || !keysMatch
  ) {
    arr.push(upperAlpha[dynamicRandomNum(26)], alpha[dynamicRandomNum(26)], specialChar[dynamicRandomNum(23)], num[dynamicRandomNum(10)])
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  result = arr[randomIndex];
  return result;
}


function dynamicRandomNum(num) {
  let number = Math.floor(Math.random() * num);
  return number;
}

module.exports = {
  generatePassword,
};
