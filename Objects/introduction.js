//It's a container for key-value pairs which have no order. Array are container for key-value pairs but they are in order, and the keys are numbers starting from 0.

//Creating an object:

    //Empty at first:
        var obj = {};
        obj.prop1 = "aaa";
        obj.prop2 = 22;
    
    //Initialized at first:
        var obj2 = {
            prop1 = "fsdf",
            prop2 = 323,
            prop3 = false
        }

    //With constructor:
        var obj3 = new Object();
        obj3.prop1 = null;

//Acessing:

    var person = {
        name: "Vitor",
        age: 18,
        city: "Prado Ferreira"
    }

    person["name"] //Vitor
    person["age"] += 1; //19
    //,or
    person.name //Vitor
    person.name = "Vitor Gabriel";
    
//Obs:   

    var object2 = {
        name:"hey",
        str:"hello"
    }

    var str = "name";
    object2.str;  //hello //tries to retrieve "str" property value if it exists in the object
    object2[str]; //hey   //retrives the "name" property value


//Objects, just like arrays, can hold any type of data:

    var junkObject = {
        number: 44,
        string: "hello",
        boolean: true,
        arr: [1, "343", false, undefined],
        obj : {
            anotherNumber: 99,
            secondString: "Hey",
            arr2: [11, false, true, null]
        }
    }