function focusInSearch(){
  document.getElementById("inputSearchModal").focus();
}

function enableHorizontalScroll() {
  var containers = document.querySelectorAll('.box-scroll');
  
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


// seleciona os elementos HTML relevantes
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const notices = document.querySelectorAll('.btn-image-notice');
const statusCircles = document.querySelectorAll('.indicators-status > div');

// define uma variável para manter o índice da notícia atual
let currentNoticeIndex = 0;

// adiciona eventos de clique aos botões de seta
prevButton.addEventListener('click', showPreviousNotice);
nextButton.addEventListener('click', showNextNotice);

// função para mostrar a notícia anterior
function showPreviousNotice() {
  // define a classe da notícia atual para disable
  notices[currentNoticeIndex].classList.remove('btn-image-notice-on');
  notices[currentNoticeIndex].classList.add('btn-image-notice-off');
  statusCircles[currentNoticeIndex].classList.remove('status-circle-on');
  statusCircles[currentNoticeIndex].classList.add('status-circle-off');
  
  // atualiza o índice da notícia atual
  currentNoticeIndex--;
  
  // se o índice for menor que 0, a notícia atual é a última
  if (currentNoticeIndex < 0) {
    currentNoticeIndex = notices.length - 1;
  }
  
  // define a classe da nova notícia atual para active
  notices[currentNoticeIndex].classList.remove('btn-image-notice-off');
  notices[currentNoticeIndex].classList.add('btn-image-notice-on');
  statusCircles[currentNoticeIndex].classList.remove('status-circle-off');
  statusCircles[currentNoticeIndex].classList.add('status-circle-on');
}

// função para mostrar a próxima notícia
function showNextNotice() {
  // define a classe da notícia atual para disable
  notices[currentNoticeIndex].classList.remove('btn-image-notice-on');
  notices[currentNoticeIndex].classList.add('btn-image-notice-off');
  statusCircles[currentNoticeIndex].classList.remove('status-circle-on');
  statusCircles[currentNoticeIndex].classList.add('status-circle-off');
  
  // atualiza o índice da notícia atual
  currentNoticeIndex++;
  
  // se o índice for maior ou igual ao número de notícias, a notícia atual é a primeira
  if (currentNoticeIndex >= notices.length) {
    currentNoticeIndex = 0;
  }
  
  // define a classe da nova notícia atual para active
  notices[currentNoticeIndex].classList.remove('btn-image-notice-off');
  notices[currentNoticeIndex].classList.add('btn-image-notice-on');
  statusCircles[currentNoticeIndex].classList.remove('status-circle-off');
  statusCircles[currentNoticeIndex].classList.add('status-circle-on');
}


//