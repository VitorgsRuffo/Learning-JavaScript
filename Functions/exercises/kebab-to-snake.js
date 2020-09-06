function kebabToSnake(str){
    return str.replace(/\-/g, "_");  //replaces every occurrence of the char '-' in the string 'str' for '_'
}

console.log(kebabToSnake("vitor-gs-ruffo")); //vitor_gs_ruffo