//Events happens everywhere on the page: when clicking a button or hovering over an element.
//To actually notice those events on a specific element we have to add a listener to it that runs some code when it listens to an event.
    
    //Example 1:
        element.addEventListener(eventType, functionToCallWhenTheEventHappens);

    //Example 2:
        var button = document.querySelector("#btn1");
        button.addEventListener("click", function(){
            console.log("Someone clicked the button!");
        });

    //Example 3:

        //HTML:
        <button>Click Me</button>
        <p>No one clicked the button yet</p>

        //JS;
        var btn = document.querySelector("button");
        var p = document.querySelector("p");

        btn.addEventListener("click", function(){
            p.textContent = "Somebody just clicked the button!";
        });

        btn.addEventListener("click", function(){
            p.style.background = "orange";
        });
        //obs: we can add multiple event listeners to a single element.


    //Example 4: adding event listeners to a list of elements.
        
    //HTML: 
        <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
        </ul>

        //JS:
        var lis = document.querySelectorAll("li");

        for(var i = 0; i < lis.length; i++){
            lis[i].addEventListener("click", function(){
                console.log("Somebody clicked the " + this.textContent + " li, let's change its color to pink.");
                this.style.color = "pink"; 
                //inside addEventListener method the keyword 'this' refers to the element that called that method.
            });
        }

    //Example 5: we can declare the callback function separatedly and pass its reference to the addEventListener method.

        //HTML:
        <p>Hello there!</p>

        //JS:
        var p = document.querySelector("button");

        function changeParagraphText(){
            p.textContent = "Wassup?";
        }

        p.addEventListener("click", changeParagraphText);

    