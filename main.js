$('.one').click(function(evt){
    var currentID = this.id || "No ID!";
    var element = document.getElementById("dis-one");
    element.classList.toggle("invisible");
    console.log(`this is the id ${element}`)
  });

$('.two').click(function(evt){
    var currentID = this.id || "No ID!";
    var element = document.getElementById("dis-two");
    element.classList.toggle("invisible");
    console.log(`this is the id ${element}`)
  });

$('.three').click(function(evt){
    var currentID = this.id || "No ID!";
    var element = document.getElementById("dis-three");
    element.classList.toggle("invisible");
    console.log(`this is the id ${element}`)
  });
function submitForm(){
    alert("your data has been received")
  }