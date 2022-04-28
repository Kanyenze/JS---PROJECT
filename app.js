console.log("working")
let themeDots = document.getElementsByClassName("theme-dote")

for(var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener("click", function(){
    let mode = this.dataset.mode
    console.log("option clicked:", mode)
    setTheme(mode)
  })
}
function setTheme(mode){
  if(mode == "light"){
    document.getElementById("theme-styel").href = "default.css"
  }
}
function setTheme(mode){
  if(mode == "blue"){
    document.getElementById("theme-styel").href = "blue.css"
  }
}
function setTheme(mode){
  if(mode == "green"){
    document.getElementById("theme-styel").href = "green.css"
  } 
}
function setTheme(mode){
  if(mode == "purpole"){
    document.getElementById("theme-styel").href = "purpole.css"
  }
}