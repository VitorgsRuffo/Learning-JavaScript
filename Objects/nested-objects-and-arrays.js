//Let's represent a list of blog posts: Each post is gonna be an object and we can use an array to hold all those posts.
    
    var posts = [
        {
            title: "Internet: new awesome invention",
            author: "Bill Gates",
            date: "26/06/1999",
            comments: ["It is really wonderful!", "vERY NICE"]

        },
        {
            title: "World cup: Brazil team",
            author: "John Copper",
            date: "15/03/2002",
            comments: []
        },
        {
            title: "I'm a programmer",
            author: "Vitor Ruffo",
            date: "04/08/2020",
            comments: ["Hey boy, you're awesome!", "You're very good!!"]
        }
    ];

    posts[2].author //Vitor Ruffo

    posts[0].comments[1] //vERY NICE

//Another exemple:

    var randomObject = {
        friends: [
            {name: "bigXandy"},
            {name: "jpins"},
            {name: "eric"}
        ],
        color: "dark blue",
        isOpen: false
    };

    //retrieving "jpins":
    randomObject.friends[1].name;