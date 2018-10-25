
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

let randomBack = () =>{
    let corp = document.getElementById("body");

    let random1 = Math.floor(Math.random()* 4)+1 ;
    
    console.log(random1);
    if (random1 == 1){
        corp.style.backgroundImage ='url("https://images.unsplash.com/photo-1530020156-25ba55766787?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d29d140473c0d9bf4d78844f0ef844e3&auto=format&fit=crop&w=1051&q=80")';
        corp.style.backgroundSize = "cover";
    } else if (random1 == 2){  
        corp.style.backgroundImage = 'url("https://images.unsplash.com/photo-1536894258192-522525d42bc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0f262d6db175f6c65244b173b7fca60&auto=format&fit=crop&w=1106&q=80")';
        corp.style.backgroundSize = "cover";
    }else if (random1 == 3){
        corp.style.backgroundImage ='url("https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f5d193d06f7ebcea646619c419a05ce6&auto=format&fit=crop&w=1050&q=80")';
        corp.style.backgroundSize = "cover";
    }else{
        corp.style.backgroundImage ='url("https://images.unsplash.com/photo-1491986246887-3e56faa95239?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ab595221bdc49468b75a339fa0eca67&auto=format&fit=crop&w=1051&q=80")';
        corp.style.backgroundSize = "cover";
    }
}
randomBack();










