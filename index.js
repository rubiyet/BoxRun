let time = null;
const element = document.getElementById("animate");   
let pos = 0;
let height = 0;
clearInterval(time);
time = setInterval(frameone, 1);
function frameone() {
  if(window.innerHeight < window.innerWidth){
    if (pos == window.innerHeight - 150) {
    clearInterval(time);
    time = setInterval(frametwo, 1);
  } else {
    pos++;
      height++;
      element.style.left = pos + "px";  
      element.style.top = pos + "px";  
  }
  }
  if(window.innerHeight > window.innerWidth){
    if (pos == window.innerWidth - 150) {
    clearInterval(time);
    time = setInterval(frametwo, 1);
  } else {
    pos++;
      height++;
      element.style.left = pos + "px";  
      element.style.top = pos + "px";  
  }
  }
}
function frametwo() {
  if (pos == 0) {
    clearInterval(time);
    time = setInterval(frameone, 1);
  } else {
    pos--;
      element.style.left = pos + "px";  
      element.style.top = pos + "px";  
  }
}