//These are methods inside the Document object that helps us to quickly select objects inside the Document.

//getElementById: takes a string argument and returns one element with a matching ID.
//Obs: we don't have different elements with the same id in a page.
    var htmlTagObject = document.getElementById("highlight");  //Item 1


//getElementsByClassName: takes a string argument and returns a list (HTMLCollection) of elements that have a matching class.
//Obs: we can have multiple elements with the same class in a page.
    var htmlTagObjects = document.getElementsByClassName("bolded"); // [Item 2, Item 3]


//getElementsByTagName: takes a string argument and returns a list of all elements of the given tag.
    var htmlTagObjects = document.getElementsByTagName("li"); // [Item 1, Item 2, Item 3]


//querySelector: takes a CSS selector and returns the first element that matches it.
    var specificLi = document.querySelector("#highlight"); // Item 1

    var firstOccurrenceOfTheClass = document.querySelector(".bolded"); //Item 2


 //querySelectorAll: takes a CSS selector and returns all the elements that match it.

    var allH1s = document.querySelectorAll("h1");

    var allLisInsideUlWithClassBolded = document.querySelectorAll("ul li.bolded");

