// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function (multiple, index, collection) {
    if (multiple % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function (fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function (value) {
    var firstLetter = value.slice(0, 1);
    if (firstLetter === letter) {
      return value;
    }
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter();
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  // var array = [];
  // var listPrice = _.each(products, function (item, index, collection) {
  //   array.push(Number.parseFloat(item['price'].slice(1, item['price'].length)));
  // });

  // var result = _.reduce(array, function (accumulator, num) {
  //   return accumulator + num;
  // });
  // return result
  var result = _.reduce(products, function (accu, value) {
    var parsedNum = Number.parseFloat(value.price.slice(1, value.price.length));
    return accu + parsedNum;
  }, 0);
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = _.reduce(desserts, function (accu, num) {
    var cake = num.type;
    if (accu[cake] === undefined) {
      accu[cake] = 1;
    } else {
      accu[cake]++;
    }
    return accu;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var result = _.reduce(movies, function (accu, num) {
    var year = num.releaseYear;
    if (year >= 1990 && year <= 2000) {
      accu.push(num.title);
    }
    return accu;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function (accu, num) {
    var runTime = num.runtime;
    if (runTime < timeLimit) {
      accu++;
    }
    return accu;
  }, 0);

  if (result > 0) {
    return true;
  } else {
    return false;
  }
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var result = _.map(fruits, function (value) {
    return value.toUpperCase();
  });
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};

/*
test push
*/
