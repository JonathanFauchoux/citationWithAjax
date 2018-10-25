
let object = {};
let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://thatsthespir.it/api', true)  //Call the open function, GET-type of request, url, true-asynchronous

//Call the onload 
xhr.onload = function() { 

    let quote = document.querySelector("#quote"); // Bloc de citation
    let author = document.getElementById("author"); // Bloc de nom de l'auteur 
    let photo = document.getElementById("photo"); //photo de l'auteur

    if (this.status === 200) { //check if the status is 200)
        object = JSON.parse(this.responseText); //return server response as an object with JSON.parse
        quote.innerHTML = object.quote;
        author.innerHTML = object.author;
        photo.innerHTML = photo.setAttribute('src', object.photo);
        if (object.photo == "") {
            photo.src ="img/image.JPG";    
        }
  
        }
            
}

xhr.send(); //Call send









