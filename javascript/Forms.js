function returnLength(String1,String2){
    var newString = String1 + String2
    document.write(newString + " " + newString.length)

}
function getFName(){
    var fname = document.getElementById("name").elements[0].value;
    return fname;
}
function getLName(){
    var lname = document.getElementById("name").elements[1].value;
    return lname;
}
function getWord(){
    var word = document.getElementById("triple").elements[0].value;
    return word;
}

function printDetails(){
    var newPerson = new Person(getFName(),getLName())
    document.write(newPerson.firstName + " " + newPerson.lastName);
}


function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

function calculateWords(){
    var string = getWord();
    var total =0;
    for(var i = 1; i <string.length; i++){
        var lastLetter = string.substring(i-1,i);
        var currentLetter = string.substring(i,i+1);
        var nextLetter = string.substring(i+1,i+2);
        if(lastLetter == currentLetter && currentLetter === nextLetter){
            total = total + 1;
        }


    }
    document.write(total + "repetitions");
}