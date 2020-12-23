# Kata-Persistent-Bugger



Description:
--
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

What is multiplicative persistence ?
--
In mathematics, the persistence of a number is the number of times one must apply a given operation to an integer before reaching a fixed point at which the operation no longer alters the number.

Usually, this involves additive or multiplicative persistence of an integer, which is how often one has to replace the number by the sum or product of its digits until one reaches a single digit. Because the numbers are broken down into their digits, the additive or multiplicative persistence depends on the radix. In the remainder of this article, base ten is assumed.

The single-digit final state reached in the process of calculating an integer's additive persistence is its digital root. Put another way, a number's additive persistence counts how many times we must sum its digits to arrive at its digital root.

For example:
--
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number







Test Cases:
-
describe('Initial Tests', function () {
  Test.assertEquals(persistence(39),3);
  Test.assertEquals(persistence(4),0);
  Test.assertEquals(persistence(25),2);
  Test.assertEquals(persistence(999),4);
});

describe('Random tests', function () {
    function sol(num) {
        var c = num > 9 ? 1 : 0;
       while ((num = (num + '').split('').reduce((mul, cv) => mul * +cv, 1)) > 9)
            ++c;
        return c;
    }
    var rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
    var times = 100;
    while (--times >= 0) {
        var n = rand(1, 10000000);
        Test.assertEquals(persistence(n), sol(n));
    }
});
