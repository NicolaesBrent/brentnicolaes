// hier komt je code
// console.log("Hallo wereld!");
function main() {
  var divs = document.getElementsByTagName("p");
  var paragraaf = document.getElementsByTagName("p")[0];
  var teller = 0;
  var aantalrood = 0;

  while (teller < divs.length) {
    divs[teller].onclick = function(){
      if (this.className == "rood"){
        this.className ="";
        aantalrood -= 1;
      }
      else {
        this.className ="rood";
        aantalrood += 1;
      }
    }
    teller++;
  }
}

window.onload = function() {
       main();
  }
