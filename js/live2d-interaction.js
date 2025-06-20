document.addEventListener('DOMContentLoaded', () => {
  const waitForLive2D = setInterval(() => {
    const canvas = document.querySelector('#live2d-canvas');
    if (canvas) {
      clearInterval(waitForLive2D);
      initInteractions(canvas);
    }
  }, 500);
  
  function initInteractions(canvas) {
    // 点击脸部事件
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const yPercent = (e.clientY - rect.top) / rect.height;
      
      if (yPercent < 0.4) {
        showMessage(getRandomFaceMessage(), 2000);
        addAnimation('scale(1.05)');
      }
    });
    
    // 点击身体事件 (双击)
    canvas.addEventListener('dblclick', (e) => {
      showMessage(getRandomBodyMessage(), 1500);
      addAnimation('translateX(10px)', 100);
    });
    
    // 消息函数
    function showMessage(text, duration) {
      const dialog = document.querySelector('.live2d-tips');
      if (dialog) {
        dialog.textContent = text;
        dialog.style.display = 'block';
        setTimeout(() => dialog.style.display = 'none', duration);
      }
    }
    
    // 动画函数
    function addAnimation(transform, delay = 300) {
      canvas.style.transition = 'transform 0.3s ease';
      canvas.style.transform = transform;
      setTimeout(() => canvas.style.transform = '', delay);
    }
    
    // 随机消息
    function getRandomFaceMessage() {
      const messages = ["别戳啦！", "再戳要生气了", "脸都肿了", "QWQ 好痛"];
      return messages[Math.floor(Math.random() * messages.length)];
    }
    
    function getRandomBodyMessage() {
      const messages = ["禁止H！", "非礼啊！", "警察叔叔就是这个人", "H是不行的"];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
});
