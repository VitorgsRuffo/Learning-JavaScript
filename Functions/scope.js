//Context in which some code are being runned on.

    //Test 1:

        //global scope:
        
            //local scope:
                function doMath(){ 
                    var x = 10;
                    var y = 20;
                    console.log(x + y);
                }
            //

            //error: We cannot access variables that are in a local scope from a global scope. 
            console.log(x + y); 

            //everything is fine: This variables are declared in global scope thus they're visible in the global scope.
            var x = "Hey ";
            var y = "Vitor!";
            console.log(x + y); //Hey Vitor!

            //everything is fine: x and y from the local scope of doMath are different from x and y from global scope. That's why we print 30 and not "Hey Vitor!".
            doMath(); //30
        //
    
    //Test 2: child scopes (e.g, local) have access to their parent scope (e.g, global).

        //global scope:
                
            var y = 99;

            //local scope:
                function someMath(){
                    console.log(y); //99
                    y = 100;
                    console.log(y); //100
                }    
            //
            
            console.log(y); //100

            //everything is fine: We can access a varible from the global scope inside a local scope (and even change its value).
        //
            

    //Test 3: local varibles exist only inside their scope.

        //global scope:
                
        var sentence = "Hello there!";

        //local scope:
            function doSomething(){
                var sentence = "Good morning!";
                console.log(sentence); //Good morning!
            }    
        //
        
        console.log(sentence); //Hello there!

        //everything is fine: If we declare a local variable that has the same name of a global one, we're not gonna change the latter.
    //
        
    //Obs: each function has its own scope and it isn't shared with other ones.
