//1. Primitive Data Types:

    //1.1. Numbers:
        4
        9.3
        -10

        //1.1.1. Operations:
            10 + 10
            4 - 2
            1 / 2
            2 * 8
            10 % 3  //remainder of the division.

            //Obs: they follow the usual math operators precedence.


    //1.2. Strings:
        "Hello World"
        "22"
        'Vitor751'
        "I'm Vitor" //single quotes can be placed inside double ones.

        //1.2.1. Operations:

            "Vitor" + " " + "Gabriel" //Concatenation: combining strings.

            "He said, \"hey I'm here\"" //Escaping: change the meaning of the char after it. In this case we want to use the double quotes as a char in our string instead of a container for strings.

            "Vitor".length //Property that returns the number of characteres that compose a string.
            
            "Vitor"[i] //Accessing the i-eth char in the string.

            "Vitor".indexOf("to"); //returns the index on which the sub-string "to" starts in the string "Vitor"
            
    //1.3. Booleans:
        true
        false


    //1.4. special values:
        null
        undefined


//2. Variables:

    var variable_name = "variable_value";

    var name = "Vitor";
    var age = 18;
    var isCool = true;

    //Recall the stored value by calling the variable name:

        "Hello " + name; //"Hello Vitor"

    //A Variable can change the data type they store: (Dynamic Typing)

        var number = 10;
        number = "Ten";

    //Naming convetion: CamelCase

        var variableNamesAreLikeThis;


//3. Null and Undefined:

    //Undefined: it's a value for a variable that has been declarated but hasn't been initialized.
        
        var msg;   //Undefined


    //Null: It mean that a variable is empty and doesn't have a value yet but pretty soon it's gonna have.

        var currentPlayer = "Vitor";
        currentPlayer = null; //The last player has lost and we don't have the next one yet so the value of currentPlayer is gonna be null for now.
        
//4. Built-in Methods:

    //alert:
        alert("Hello there!");
        alert(10*10);

    //console.log:
        console.log("This method prints its argument on the console");

    //prompt:
        var age = prompt("How old are you?"); //pops up a window for user to enter input then the method returns it.
