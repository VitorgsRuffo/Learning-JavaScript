//Selecting the html object that has the id "highlight":
var item1 = document.querySelector("#highlight"); 


//Manipulating that object style:
item1.style.color = "red";
item1.style.border = "10px solid blue";
item1.style.fontSize = "20px";

    //instead of changing the style directly with JS we could toggle a class on and off with 
    //JS to manipulate the style of a selected element.

        var item2 = document.querySelector(".bolded");

        //classList: every element object has a read-only list inside of it called classList. That list contains all the current classes of the html object.
            
            //to add a new one we can use the method add():
            item2.classList.add("cool");

            //to remove an existing class:
            item2.classList.remove("bolded");

            //if the element has the given class this method will remove it, if not the method will add it:
            item2.classList.toggle("cool");
