var template = document.getElementById("template");

// traversing on local storage for favourites
for(let i = 0; i < localStorage.length; i++)
{
    if(isNaN(localStorage.key(i))){
        continue;
    }
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var card = template.content.cloneNode(true);
    
    //Data of character
    card.getElementById("name").innerHTML = 'Name : ' + temp.name;
    card.getElementById("id").innerHTML = 'Id : ' + temp.id;
    if(temp.squareImage){
        card.getElementById("img").innerHTML = "<img src = " + temp.squareImage + ">";
    }else if(temp.thumbnail){
        card.getElementById("img").innerHTML = "<img src = " + temp.thumbnail.path + "." + temp.thumbnail.extension + ">";
    }else{
        card.getElementById("img").innerHTML = "Image not provided by MarvelAPI";
    }

    card.getElementById("more-info").addEventListener('click',function(){
        localStorage.setItem('id',temp.id);
        window.location.assign('./about.html');
    });
    //if user click on remove icon
    card.getElementById("fav").addEventListener('click',function (){
        card.innerHTML = null;
        localStorage.removeItem(localStorage.key(i));
        window.location.assign('./favourites.html');
        alert('Removed from Favourites!')

    });

// appending to the list
    document.getElementById("superhero-list").appendChild(card);
}