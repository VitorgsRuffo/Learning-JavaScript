//attributes are the things related to an HTML element like: href, src..


//Reading and writing attributes:

    var link = document.querySelector("a");
    console.log(link.getAttribute("href")); //www.google.com
    link.setAttribute("href", "www.dogs.com"); //<a href="www.dogs.com">link to google</a>
    console.log(link.getAttribute("href")); //www.dogs.com

    
    var img = document.querySelector("img");
    setTimeout(function(){
        img.setAttribute("src", "dog2.jpg");
    }, 1000);