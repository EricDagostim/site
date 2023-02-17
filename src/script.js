function focus(){
    document.getElementById("inputSearchModal").focus();
}

function enableHorizontalScroll() {
  var containers = document.querySelectorAll('.box-scroll');
    // var container = document.getElementsByClassName('.box-scroll');
   
    for (let i = 0; i < containers.length; i++) {
      let container = containers[i];
    
      var isDown = false;
      var startX;
      var scrollLeft;
      
      container.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'auto';
      });
    
      container.addEventListener('mouseleave', function() {
        isDown = false;
        container.style.cursor = 'grab';
      });
    
      container.addEventListener('mouseup', function() {
        // isDown = false;
        // container.style.cursor = 'grab';
        // // container.style.cursor = 'pointer';
        // container.style.userSelect = 'auto';

        isDown = false;
        container.style.cursor = 'grab';
        container.style.userSelect = 'auto';
      });
    
      container.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - container.offsetLeft;
        var walk = (x - startX) * 1.5; // velocidade de rolagem
        container.scrollLeft = scrollLeft - walk;
      });


    }
  
}



enableHorizontalScroll();


