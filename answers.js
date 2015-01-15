function maxOfTwoNumbers(x, y) {
    if (x < y) {
    return console.log(y);
} else {
    return console.log(x);
}
}
maxOfTwoNumbers(1, 2);

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return console.log(x);
    } else if (y > x && y > z) {
        return console.log(y);
    } else {
        return console.log(z);
    }
}
maxOfThree(11, 20, 10)

function isVowel(alpha) {
    var vowels = ["a", "e", "i", "o", "u", "y"];
    for (var i = 0; i < vowels.length; i++) {
        if (alpha == vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
}
isVowel("d");

var myArray = [1, 2, 3, 4];
function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
sumArray(myArray);

function multArray(array) {
    var mult = 1;
    for (var i = 0; i < array.length; i++) {
       mult *= array[i];
    }
    console.log(mult);
}
multArray(myArray);

function reverseString(string) {
     var nameArray = string.split("");
     nameArray.reverse();
     var revString = nameArray.join("");
     console.log(revString);
}
reverseString("Calvin")

function reVerse(string) {
    var sArray = string.split("");
    for (var i = sArray.length; i > sArray.length; i--) {
        return newArray = sArray[i].push("");
    }
    var x = newArray.join();
    console.log(newArray);
}
reVerse("Calvin");

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
};