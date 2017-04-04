var isSherlock = (function(){
 var sherlock =false;
  return function(){ sherlock = !sherlock; return sherlock}
})()


var birdMurderer="Simon"
var whoDunnit = function(){
  var sherlock=isSherlock()
  if(sherlock){
    var detective = "Sherlock Holmes"
   birdMurderer = "Simon's cat"
 } else {
  detective = "Some doofus"
  birdMurderer = "Simon"
 }
 console.log("Detective ",detective, "blames", birdMurderer, "for the dead bird")
}

whoDunnit()
whoDunnit()
whoDunnit()
whoDunnit()
