// var rules = {
//     white: function(n) { return !(n == "white" || n == "black") },
//     red: function(n) { return n == "green" },
//     black: function(n) { return !(n == "white" || n == "green" || n == "orange") },
//     orange: function(n) { return (n  == "red" || n == "black") },
//     green:function(n) { return (n  == "orange" || n == "white") },
//     purple: function(n) {
//         return !(n  == "purple" || n == "green" || n == "orange" || n == "white")
//     }
// };
//
// var defuse = function(input) {
//     var operations = input.slice();
//     var exploded = input.find(function() {
//         let cur_wire = operations.shift();
//         return !rules[cur_wire](operations[0])
//     });
//     exploded ? console.log('Boom') : console.log("Bomb defused");
// };
//
// var input = ["white", "white", "green", "white"];
// defuse(input)

function wires(n1,n2){

    if(n1 == "white"){  if( !(n2 == "white" || n2 == "black")) {
        return true;
         }
    }

    if(n1 == "red") {
         if(n2 == "green"){
             return true;
        }
    }
    if(n1 == "black") {
        if (n2 == "white" || n2 == "green" || n2 == "orange") {
            return true;
        }
    }
    if(n1 == "orange") {
        if (n2 == "red" || n2 == "black") {
            return true;
        }
    }
    if(n1 == "green") {
        if (n2 == "orange" || n2 == "white") {
            return true;
        }
    }
    if(n1 == "purple") {
        if (!(n2 == "purple" || n2 == "green" || n == "orange" || n == "white")) {
            return true;
        }
    }
};

function defuse(input){
    var arr = input.slice();
    var progress;
    for(x in arr){
        if( wires(arr[x],arr[x+1] == true)){
            continue;
        } else{
            progress = false;
        }
    }
    if (progress = true){
        console.log("Bomb Defused");
    } else{
        console.log("boom");
    }
}
var input = ["white", "white", "green", "white"];
defuse(input)