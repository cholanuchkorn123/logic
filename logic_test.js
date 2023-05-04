const validationInput = (pincode) => {
  const pincodeArr = pincode.toString().split("");
  let isSamenum = 0;
  if (pincodeArr.length !== 6) {
    return false;
  }
  for (let i = 0; i < pincodeArr.length; i++) {
    if (
      pincodeArr[i] == pincodeArr[i + 1] &&
      pincodeArr[i] == pincodeArr[i + 2]
    ) {
      return false;
    }
    if (
      Number(pincodeArr[i]) + 1 == pincodeArr[i + 1] &&
      Number(pincodeArr[i + 1]) + 1 == pincodeArr[i + 2]
    ) {
      return false;
    }
    if (i % 2 == 0) {
      if (pincodeArr[i] == pincodeArr[i + 1]) {
        isSamenum++;
      }
    }
    if (isSamenum >= 2) {
      return false;
    }
  }
  return true;
};
//Time Complexity
//O(n)

const generateFibonacci = (fibNum) => {
  let fibFirst = [0, 1];

  for (let i = 2; i < fibNum; i++) {
    fibFirst[i] = fibFirst[i - 1] + fibFirst[i - 2];
  }
  return fibFirst;
};

const generatePrimes = (primeEnd) => {
  let primesArr = [];

  for (let num = 2; num <= primeEnd; num++) {
    let isPrime = true;

    for (let i = 0; i < primesArr.length; i++) {
      if (num % primesArr[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primesArr.push(num);
    }
  }

  return primesArr;
};
const checkArr = (numEnd) => {
  const firstArr = generateFibonacci(numEnd);
  const secondArr = generatePrimes(numEnd);
  const arr = [];
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] == secondArr[j]) {
        arr.push(firstArr[i]);
      }
    }
  }
  return arr;
};
