var letters = ['a', 'b', 'c'];

//PUSH: Adding a new element to the end of the array and returning its new length:
    var lettersNewLength = letters.push('d'); //['a', 'b', 'c', 'd']

//POP: Removing the last element of the array and returning this element:
    var removedElement = letter.pop(); //['a', 'b', 'c']

//UNSHIFT: Adding a new element to the beginning of the array and returning its new length:
    var lettersNewLength = letters.unshift('aA'); //['aA','a', 'b', 'c', 'd']

//SHIFT: Removing the first element of the array and returning this element:
    var removedElement = letter.shift(); //['a', 'b', 'c']

//IndexOf: Tries to find an element inside an array. If it finds the element it returns its index (if the element has multiple occurences the method only returns the first one), Else, it returns -1. 
    var indexOfB = letters.indexOf('b');  //1

//Slice: returns a portion of the array elements that are in the range [a, b) (i.e, from element 'a' to the one before 'b'). Obs: the original array isn't modified.
    var colors = ["blue", "red", "orange", "yellow", "purple"];
    var subColors = colors.slice(1, 4); //["red", "orange", "yellow"]

//Splice: removing a set of elements from an array and returning them:
    var toDoList = ["aaa", "bbb", "ccc", "ddd"];
    var deletedElements = toDoList.splice(removingStart, numberOfElementsToBeRemoved); //"in the specified array, from the index 'removingStart', remove 'numberOfElementsToBeRemoved' elements".
    //toDoList: ["aaa", "ddd"]
    //deletedElements: ["bbb", "ccc"]
