//They either take a function as argument or return one.

    //e.g, setInterval call a function (1st argument) every x miliseconds (2nd argument):

        function printSomething(){
            console.log("Something..");
        }

        var stop = setInterval(printSomething, 1000); //by passing just the name of the function we're passing a reference to it so that setInterval can call it for us.

        //setInterval returns a number that can be used to stop it:
        clearInterval(stop);

        //We could also, instead of defining a function first, pass an anonymous function to setInterval that will only be used here, in this moment:
        setInterval(function(){
            console.log("I'm an anonymous function..");
        }, 2000);