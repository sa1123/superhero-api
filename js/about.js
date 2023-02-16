var resultId = localStorage.getItem('id');

fetch();
// getting all the data of the superhero
function fetch(){
    var xhrRequest = new XMLHttpRequest();

    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=ee77679846ae512c45cd75dad1704dfb&hash=1fe14f8427c9003551a27df276a5daed&ts=1`;

    xhrRequest.open('get', url, true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        document.getElementById('title').innerText = " " + response.data.results[0].name;
        var power = document.getElementById('power');
        var img = document.createElement('img');
        img.src = response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension;
        power.appendChild(img);

        linebreak = document.createElement("br");
        power.appendChild(linebreak);

        var p = document.createElement('p');
        
        if(response.data.results[0].description == " " || response.data.results[0].description == ""){
            p.innerText = "Description not provided by MarvelAPI"
        }else{
            p.innerText = "Description : " + response.data.results[0].description;
        }
        power.appendChild(p);

        linebreak = document.createElement("br");
        power.appendChild(linebreak);

        var p = document.createElement('p');
        p.innerText = "Number of Series Available : " + response.data.results[0].series.available;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Number of Stories Available : " + response.data.results[0].stories.available;
        power.appendChild(p);
    }
}