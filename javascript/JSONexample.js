"use strict";

var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {

    var superHeroes = request.response; // superHeroes is the whole JSON we received
    console.log(JSON.stringify(superHeroes)); // we convert a JS value to JSON string

    // var myH1 = document.createElement('h1');
    // myH1.textContent = superHeroes['squadName'];
    // document.getElementsByTagName('body')[0].appendChild(myH1);

// we dive deeper into the json structure and get the first element from the members collection and then get that elements name
//uncomment the next 3 lines to see it work
//var myH2 = document.createElement('h2');
//myH2.textContent = JSON.stringify(superHeroes['members'][0].name);
//document.getElementsByTagName('body')[0].appendChild(myH2);

}