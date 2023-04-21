// creditCardChecker(Automated Functions using Luhn Algorithm) by raymondTabaque 
//contact me raymondtabaque@gmail.com

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Checks validity of the given card. Returns True if valid and false if invalid.

const validateCred = cardArr => {
    let newArr =[];

    for (let i = cardArr.length - 1; i >= 0; i--){
          if ((cardArr.length - 1 - i) % 2 === 1 ) { 
          cardArr[i] =  cardArr[i] * 2;
          if ( cardArr[i] > 9 ) {
            cardArr[i] = cardArr[i] - 9;
          };
          };
          newArr.push(cardArr[i]);
        };
       newArr = newArr.reduce((accumulator, currentValue) => accumulator + currentValue) % 10;
       return newArr === 0;
    }

// Function that returns only invalid cards from a batch of given card.
const findInvalidCards = arr => {
  return arr.filter(function (cards) { 
    let cardCheck = validateCred(cards)
    if (cardCheck === false ) {
      return cards;
    };
  });
}


// A function that detects which company that sends out the invalid cards.
const idInvalidCardCompanies = arr => {

  let newArr =[];
  let invalidBatch = findInvalidCards(arr);
  invalidBatch.map(function (inArray) {

    if ( inArray[0] === 3 ) {
      if (!newArr.includes('Amex')) {
      newArr.push('Amex');
      }
    } else if ( inArray[0] === 4 ) {
      if (!newArr.includes('Visa')) {
      newArr.push('Visa');
      }
    } else if ( inArray[0] === 5 ) {
      if (!newArr.includes('Mastercard')) {
      newArr.push('Mastercard');
      }
    } else if ( inArray[0] === 6 ) {
      if (!newArr.includes('Discovery')) {
      newArr.push('Discovery');
      }
    } else {
      if (!newArr.includes('Company not Found')){
      newArr.push('Company not Found');
      }
    }
  });
  return newArr;
}


console.log(idInvalidCardCompanies(batch));
// example Output ['Other Company', 'Amex', 'Discovery']


// Function that converts a given string to an array of numbers
const convertToArr = str => {
  
  let convertNum = parseInt(str)
  return convertNum.toString().split("").map(Number)

}
console.log(convertToArr('3893849343245643 visa'))
// Example Input: '3893849343245643 visa' Output will be [3, 8, 9, 3, 8, 4, 9, 3, 4, 3, 2, 4, 5, 6, 4, 3,]
