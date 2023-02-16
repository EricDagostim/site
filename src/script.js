function enableHorizontalScroll() {
    var container = document.querySelector('.box-scroll');
    
  
    var isDown = false;
    var startX;
    var scrollLeft;
  
    container.addEventListener('mousedown', function(e) {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    });
  
    container.addEventListener('mouseleave', function() {
      isDown = false;
      container.style.cursor = 'grab';
    });
  
    container.addEventListener('mouseup', function() {
      isDown = false;
      container.style.cursor = 'grab';
    });
  
    container.addEventListener('mousemove', function(e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var walk = (x - startX) * 1.5; // velocidade de rolagem
      container.scrollLeft = scrollLeft - walk;
    });
}

function enableHorizontalScrollNews() {
    var container = document.querySelector('.box-scroll-news');
    
  
    var isDown = false;
    var startX;
    var scrollLeft;
  
    container.addEventListener('mousedown', function(e) {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    });
  
    container.addEventListener('mouseleave', function() {
      isDown = false;
      container.style.cursor = 'grab';
    });
  
    container.addEventListener('mouseup', function() {
      isDown = false;
      container.style.cursor = 'grab';
    });
  
    container.addEventListener('mousemove', function(e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var walk = (x - startX) * 1.5; // velocidade de rolagem
      container.scrollLeft = scrollLeft - walk;
    });
}

enableHorizontalScroll();
enableHorizontalScrollNews();