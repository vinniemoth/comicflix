    var icon = document.getElementById("busca");
    icon.onmouseover = mouseOver;
    icon.onmouseout = mouseOut;
    
    function mouseOver() { 
      myImage.src = "my_image_active.png";
    }
    function mouseOut() { 
      myImage.src = "my_image.png";
    }