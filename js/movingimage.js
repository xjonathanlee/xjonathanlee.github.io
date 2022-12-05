function show(id){
  var content = document.getElementById(id);
  if(window.innerWidth>576){
    if(content.src!=null){
      content.style.display = "block";
      content.style.transition = "all 0.12s ease";
    }
  }
}

function hide(id){
  var content = document.getElementById(id);
  if(window.innerWidth>576){
    content.style.display="none";
    content.style.transition="none";
  }
}

var xOffset = 10;
var yOffset = 0;

function updatePosition(e){
  var samplephoto = document.getElementById('sample-photo');
  if(samplephoto.style.display=="block"){
                samplephoto.style.top = e.y + 100 + window.scrollY + "px";
            samplephoto.style.left = e.x + 60 + "px";
  }
}

document.onmousemove = updatePosition;