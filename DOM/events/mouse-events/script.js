//mouseover: it fires at the moment that you start hovering over the element that has an event listener to mouseover.
//mouseout: it fires when you hover out an element that has an event listener to mouseout.

    var lis = document.querySelectorAll("li");

    for(var i = 0; i < lis.length; i++){
        lis[i].addEventListener("mouseover", function(){
            this.classList.add("over");
        });
    
        lis[i].addEventListener("mouseout", function(){
            this.classList.remove("over");
        });

        lis[i].addEventListener("click", function(){
            this.classList.toggle("border");
        });
    }
    