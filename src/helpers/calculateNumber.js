function sumDigits(num) {
  num = parseInt(num);
  let totalSum = 0;
  while (num > 0) {
    let digits = num % 10;
    totalSum += digits;
    num = Math.floor(num / 10);
  }
  return totalSum;
}

export const calculateRulingNumber = (dateOfBirth) => {
  const dateStr = dateOfBirth.split("/");
  let sum =
    sumDigits(dateStr[0]) + sumDigits(dateStr[1]) + sumDigits(dateStr[2]);
  if (sumDigits(sum) === 1 && sum !== 10) {
    return sum;
  }
  if (sum === 22) {
    return "22/4";
  } else if (sum === 33) {
    return "33/6";
  } else if (sum > 11) {
    while (sum > 11) {
      sum = sumDigits(sum);
    }
    if (sumDigits(sum) === 1 && sum !== 10) {
      return sum;
    }
  }

  return sum;
};
export const calculateLifePathNumber = (dateOfBirth) => {
  const dateStr = dateOfBirth.split("/");
  let sum =
    sumDigits(dateStr[0]) + sumDigits(dateStr[1]) + sumDigits(dateStr[2]);
  if (sum > 9) {
    while (sum > 9 || sum < 0) {
      sum = sumDigits(sum);
    }
  }
  return sum;
};
function letterToNumber(letter) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = alphabet.indexOf(letter) + 1;
  if (number > 9) {
    number = Math.floor(number / 10) + (number % 10);
  }
  return number;
}

// Hàm tính tổng các chữ số của một số

// Hàm tính số sứ mệnh từ họ tên
const calculateDestinyNumberTemp = (name) => {
  name = convertToUnsigned(name);
  name = name.toUpperCase().replace(/\s/g, "");

  // Tính tổng các con số quy đổi từ họ tên
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += letterToNumber(name[i]);
  }
  total = sumDigits(total);

  while (total > 9) {
    total = sumDigits(total);
  }
  // Trả về kết quả là số sứ mệnh
  return total;
};
export const calculateDestinyNumber = (name) => {
  name = name.split(" ");
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += calculateDestinyNumberTemp(name[i]);
  }
  switch (total) {
    case 11:
      return 11;
    case 22:
      return "22";
    default:
      break;
  }
  while (total > 9) {
    total = sumDigits(total);
  }
  return total;
};
export const convertToUnsigned = (str) => {
  // Bảng chữ cái có dấu và không dấu tương ứng
  const diacriticsMap = {
    á: "a",
    à: "a",
    ả: "a",
    ã: "a",
    ạ: "a",
    ấ: "a",
    ầ: "a",
    ẩ: "a",
    ẫ: "a",
    ậ: "a",
    ắ: "a",
    ằ: "a",
    ẳ: "a",
    ẵ: "a",
    ặ: "a",
    é: "e",
    è: "e",
    ẻ: "e",
    ẽ: "e",
    ẹ: "e",
    ế: "e",
    ề: "e",
    ể: "e",
    ễ: "e",
    ệ: "e",
    í: "i",
    ì: "i",
    ỉ: "i",
    ĩ: "i",
    ị: "i",
    ó: "o",
    ò: "o",
    ỏ: "o",
    õ: "o",
    ọ: "o",
    ố: "o",
    ồ: "o",
    ổ: "o",
    ỗ: "o",
    ộ: "o",
    ớ: "o",
    ờ: "o",
    ở: "o",
    ỡ: "o",
    ợ: "o",
    ú: "u",
    ù: "u",
    ủ: "u",
    ũ: "u",
    ụ: "u",
    ứ: "u",
    ừ: "u",
    ử: "u",
    ữ: "u",
    ự: "u",
    ý: "y",
    ỳ: "y",
    ỷ: "y",
    ỹ: "y",
    ỵ: "y",
    đ: "d",
    Đ: "D",
  };

  return str.replace(/[^\u0000-\u007E]/g, (a) => diacriticsMap[a] || a);
};
export const calculateMatureNumber = (date, name) => {
  let sum =
    parseInt(calculateLifePathNumber(date)) +
    parseInt(calculateDestinyNumber(name));
  if (sum === 11) {
    return sum;
  }
  if (sum === 22) {
    return sum;
  }
  while (sum > 9) {
    sum = sumDigits(sum);
  }
  return sum;
};
export const calculateSoulUrgeNumber = (name) => {
  name = convertToUnsigned(name);
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Name should be a non-empty string.");
  }

  // Convert the name to uppercase
  name = name.toUpperCase();

  let total = 0;

  for (let i = 0; i < name.length; i++) {
    if (
      name[i] === "A" ||
      name[i] === "E" ||
      name[i] === "I" ||
      name[i] === "O" ||
      name[i] === "U" ||
      name[i] === "Y"
    ) {
      // Add the numerology value of the vowel to the total
      if (name[i] === "A") {
        total += 1;
      } else if (name[i] === "E") {
        total += 5;
      } else if (name[i] === "I") {
        total += 9;
      } else if (name[i] === "O") {
        total += 6;
      } else if (name[i] === "U") {
        total += 3;
      }
    }
  }

  // Reduce the total to a single digit (unless it's a master number)
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    let tempTotal = 0;
    while (total > 0) {
      tempTotal += total % 10;
      total = Math.floor(total / 10);
    }
    total = tempTotal;
  }

  // Return the soul urge number
  return total;
};
export const calculatePersonalityNumber = (name) => {
  name = convertToUnsigned(name);
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Name should be a non-empty string.");
  }

  // Convert the name to uppercase
  name = name.toUpperCase();

  // const vowels = "AEIOU";
  const consonants = "BCDFGHJKLMNPQRSTVWXZ";

  let total = 0;

  for (let i = 0; i < name.length; i++) {
    if (consonants.includes(name[i])) {
      // Add the numerology value of the consonant to the total
      total += getNumerologyValue(name[i]);
    }
  }

  // Reduce the total to a single digit (unless it's a master number)
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    let tempTotal = 0;
    while (total > 0) {
      tempTotal += total % 10;
      total = Math.floor(total / 10);
    }
    total = tempTotal;
  }

  // Return the personality number
  return total;
};

// Helper function to get the numerology value of a consonant
const getNumerologyValue = (consonant) => {
  const consonantValues = {
    B: 2,
    C: 3,
    D: 4,
    F: 6,
    G: 7,
    H: 8,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    V: 4,
    W: 5,
    X: 6,
    Z: 8,
  };

  return consonantValues[consonant] || 0;
};
export const calculatePassionNumber = (name) => {
  name = convertToUnsigned(name);
  name = name.toUpperCase().replace(/\s/g, "");
  let arr = [];
  for (let i = 0; i < name.length; i++) {
    arr.push(letterToNumber(name[i]));
  }

  const frequencyMap = new Map();
  for (const num of arr) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  let maxFrequency = 0;
  let mostFrequentNumbers = [];

  for (const [num, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentNumbers = [num];
    } else if (frequency === maxFrequency) {
      mostFrequentNumbers.push(num);
    }
  }

  return mostFrequentNumbers;
};
export const calculateAttitudeNumber = (dateOfBirth) => {
  const dateStr = dateOfBirth.split("/");
  let sum = sumDigits(dateStr[0]) + sumDigits(dateStr[1]);
  while (sum > 9) {
    sum = sumDigits(sum);
  }
  if (sum < 10 && sum > 0) {
    return sum;
  }
  return null;
};
export const calculateMissingNumber = (name) => {
  name = convertToUnsigned(name);
  name = name.toUpperCase().replace(/\s/g, "");
  let arr = [];
  for (let i = 0; i < name.length; i++) {
    arr.push(letterToNumber(name[i]));
  }
  let unique = uniqueNumber(arr);
  return findMissingNumber(unique);
};
function uniqueNumber(arr) {
  const uniqueSet = new Set();
  const newarr = [];

  for (const num of arr) {
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
      newarr.push(num);
    }
  }

  return newarr;
}
function findMissingNumber(arr) {
  let subArray = [];
  for (let i = 0; i < 9; i++) {
    subArray.push(false);
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    subArray[temp - 1] = true;
  }
  let result = [];
  for (let i = 0; i < subArray.length; i++) {
    if (subArray[i] === false) {
      result.push(i + 1);
    }
  }
  return result;
}
