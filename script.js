document.addEventListener('DOMContentLoaded', function() {
    var confetti = document.getElementById('confetti');
    var colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    
    for (var i = 0; i < 200; i++) {
        var confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confetti.appendChild(confettiPiece);
    }
});

function showImage(elemId, imgSrc) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="light-beam"></div>
      <img src="${imgSrc}" alt="Фотография">
    `;
    document.body.appendChild(popup);
    document.getElementById(elemId).style.transform = 'translateY(-10px) scale(1.05)';
    popup.style.animation = 'popup 0.5s ease-out forwards';
  }
  
  function hideImage(elemId) {
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.remove();
      document.getElementById(elemId).style.transform = 'none';
    }
  }