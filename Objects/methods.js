//methods are functions that are properties inside objects..
//in js functions can be interpreted as a value, that can be passed to another function or be assigned to a variable.

    var math = {
        x: 10,
        y: 20,

        add: function(x,y){
            return x + y;
        }
    }

    math.add(15, 10);          //25
    math.add(math.x, math.y);  //30



    var dog = {
        color: "black",
        speak: function(){
            return "WOOF!";
        }
    }

    dog.speak(); //WOOF!

    var cat = {
        color: "white",
        speak: function(){
            return "MEOW!";
        }
    }

    cat.speak(); //MEOW!


//this keyword: it means different things in different contexts.

    var comments = {};
    comments.data = ["Good morning", "Hello!", "Bye!", "Heyy!"];

    //before, if we wanted to print the array property of comments object we would do like this:

        function printArray(arr){
            arr.forEach(function(element){
                console.log(element);
            });
        }

        printArray(comments.data);
        //   Good morning
        //   Hello!
        //   Bye!
        //   Heyy!

    //now as we learned, we can put functions, that are related to the data inside an object, inside this object.

        comments.printComments = function(){
            this.data.forEach(function(element){ //this === comments
                console.log(element);
            });
        };

        //in this context (inside object methods) the 'this' keyword will mean the object that all of this is happenning inside.

        comments.printComments();
        //   Good morning
        //   Hello!
        //   Bye!
        //   Heyy!