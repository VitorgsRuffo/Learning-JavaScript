//Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print out:

    var movieDB = [
        {
            title: "Harry Potter 7",
            rating: 9.3,
            hasWatched: true 
        },
        {
            title: "Avengers: Endgame",
            rating: 9.5,
            hasWatched: true 
        },
        {
            title: "Frozen 2",
            rating: 9.0,
            hasWatched: false 
        }
    ];

    function printMovie(movie){
        if(movie.hasWatched){
            console.log("You have seen \"" + movie.title + "\" - rating: " + movie.rating + ".");
        }else{
            console.log("You have not seen \"" + movie.title + "\" - rating: " + movie.rating + ".");
        }
    }

    movieDB.forEach(printMovie);