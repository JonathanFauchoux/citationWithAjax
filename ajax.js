
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
    let body = document.querySelector("#body");
    let random1 = Math.floor(Math.random()* 3)+1 ;
    if (random1 == 1){
        body.style.background ='url("https://images.ecosia.org/-3VZKOlzP83U-TTfrQ3Wve4tgJE=/0x390/smart/https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F00%2F57%2F54%2F34%2F240_F_57543467_z6bcsQ0jMSajakFxZyRsmZVYqJyk5yhu.jpg")';
    } else if (random1 == 2){
        body.style.background = 'url("https://images.ecosia.org/QGn330npsfb25hkfuydDiboFe9g=/0x390/smart/http%3A%2F%2Fst.gde-fon.com%2Fwallpapers_original%2F130243_zhyoltye_lepestki_zelyonoe_nasekomoe_glaza_fokus_f_1920x1285_www.Gde-Fon.com.jpg")';
    }else{
        body.style.background ='url("https://wonderfulengineering.com/wp-content/uploads/2014/09/Green-Wallpaper-9.jpg")';
    }
}
randomBack();
console.log(random1)









