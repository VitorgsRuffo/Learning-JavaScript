//textContent property: represents all the text contained in a given element. (Even if the text are inside another tag)

    var p1 = document.querySelector(".paragraph");

    console.log(p1.textContent); //Hello people !
    p1.textContent = "Hey there !"; //Warning: we'll loose all the tags inside p1 which will be replaced by this text.

    var ul1 = document.querySelector("ul");
    console.log(ul1.textContent); //one two


//innerHTML property: represents all the HTML contained in a given element.

    console.log(p1.innerHTML); //Hello <strong>peope</strong> !
    
    p1.innerHTML = "Hello <i>there</i>, how is it <strong>going?</strong>"
