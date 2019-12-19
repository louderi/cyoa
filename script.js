var name;
var species;

let getname = function(){

let name = document.getElementById("name").value;



var finalname2 = confirm("So, your name is " + name + "?");
if(finalname2 === true){
  finalname = name 
}else if(finalname2 === false){
  finalname = alert("Please retype your name.")
}
document.getElementById("output").innerHTML = "Your name is "  + finalname + ".<br> <br> <input type='button' value='Next.' onclick='getspecies()'>" 
}

let getspecies = function(){

document.getElementById("output").innerHTML = finalname + ", what kind of animal are you? <br> <br> <br> <input type='radio' value='fox' id='fox' name='species'> Fox <br> <input type='radio' value='deer' id='deer' name='species'> Deer <br> <input type='radio' value='wolf' id='wolf' name='species'> Wolf <br> <br> <input type='submit' value='Create me.' onclick='reveal()'>"
}
let reveal = function(){

var species = document.getElementsByName("species");


for (var i = 0, length = species.length; i < length; i++) {
    if (species[i].checked) {
        // do whatever you want with the checked radio
        species = (species[i].value);
        

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 document.getElementById("output").innerHTML = finalname + ", you are a " + species + ". <br> <br> <input type='button' value='Begin.' onclick='path1()'>";

}

let path1 = function(){

document.getElementById("output").innerHTML = "You meet a barn cat not too far from you. He looks friendly, but you can't be for sure. <br> <br> <input type='button' value='Approach him.' onclick='path2()'> <input type='button' value='Run away.' onclick='pathend1()'> <input type='button' value='Observe him.' onclick='path1a()'>"

}

let pathend1 = function(){

document.getElementById("output").innerHTML = "You decided to run away from the barn cat. Too bad, you have just missed the most important part of the story. <br> <br> <input type='submit' value='Alright.'>"
}

let path1a = function(){

document.getElementById("output").innerHTML = "You observe the barn cat. He seems to be sitting in the sun, looking comfortable in the tall grass. He seems harmless, so you are even more sure about approaching him. <br> <br> <input type='button' value='Run away anyway.' onclick='pathend1()'> <input type='button' value='Approach him.' onclick='path2()'>"
}

let path2 = function(){
  document.getElementById("output").innerHTML = "You finally decide to approach the barn cat. You startle him at first as he did not expect to see a " + species + " around these parts. He quickly realises you do not mean any harm, and asks for your name. <br> <br> <input type='button' value='Tell him your name.' onclick='path3()'>"
}

let path3 = function(){

document.getElementById("output").innerHTML = "You decide to tell him your name. <br> '" + finalname + ", huh? That's an interesting name,' he says. I am happy to meet you.' "






}