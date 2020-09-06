//Passing one argument:
    function square(num){
        console.log(num * num);
    }

    square(10);  //100
    square(3);   //9

    function sayHello(name){
        console.log("Hello " + name + "!");
    }

    sayHello("Vitor");   //Hello Vitor!
    sayHello("Gabriel"); //Hello Gabriel!


//Passing two arguments:
    function calculateArea(length, width){
        console.log(length * width);
    }

    calculateArea(5, 10); //50


//Not passing one of the arguments:

    function hello(name1, name2, name3){
        console.log("Hello " + name1);
        console.log("Hello " + name2);
        console.log("Hello " + name3); //Hello undefined
    }

    hello("Vitor", "Uelitin"); //as we're not passing the 3rd argument, name3 parameter will have the undefined value.