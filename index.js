function generatePassword(char) {
  let data = [];
  for (let i = 0; i < char; i++) {
    let randomNum = getRandom();
    data.push(getPass(randomNum));
  }
  if (data.length) {
    data = data.join("");
  }
  return data;
}

function getPass(number) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let specialChar = "`!#@$%^[&*]_-><.,?;:}|{";
  let upperAlpha = alpha.toUpperCase();
  let result;
  if (number == 1) {
    result = upperAlpha[dynamicRandomNum(26)];
  } else if (number == 2) {
    result = alpha[dynamicRandomNum(26)];
  } else if (number == 3) {
    result = specialChar[dynamicRandomNum(23)];
  } else {
    result = num[dynamicRandomNum(10)];
  }
  return result;
}

function getRandom() {
  let randomFour = Math.floor(Math.random() * 4) + 1;
  return randomFour;
}

function dynamicRandomNum(num) {
  let number = Math.floor(Math.random() * num);
  return number;
}

module.exports = {
  generatePassword,
};
