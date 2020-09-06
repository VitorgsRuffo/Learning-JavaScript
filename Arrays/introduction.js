//They group data in a list.
//Declaring an array:
    var arr1 = [];  //empty array.
    var arr2 = new Array(); //empty array;
    var friends = ["Matsu", "Uelitin", "Jao"];

//Accessing an element:
    console.log(friends[0]); //Matsu;

//Modifying an element:
    friends[0] = "Jaozin";

//Expanding the array: (arrays' length are dynamic)
    friends[3] = "Fefe";

    friends[10] = "Eric"; //Obs: All elements from index 4 till 9 will have an undefined value (like an empty space because nothing were put in those places yet).

//Array can have elements of different types:

    var stuff = [10, true, [1,2,3], null, "Vitor", "c", 33.2214, undefined];

//getting the number of elements that compose an array:
    var numbers = [1,2,3,4,5];
    var numbersLength = numbers.length;
    console.log("The length is: " + numbersLength);

    console.log("Last element of numbers array: " + numbers[numbersLength-1]);