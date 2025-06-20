// 触发 Live2D 加载完成事件
document.addEventListener('DOMContentLoaded', () => {
  const checkLive2D = setInterval(() => {
    if (window.Live2D && document.querySelector('#live2d-canvas')) {
      clearInterval(checkLive2D);
      
      // 创建并触发自定义事件
      const live2dLoadedEvent = new Event('live2dLoaded');
      document.dispatchEvent(live2dLoadedEvent);
      
      console.log('Live2D 加载完成，已触发自定义事件');
    }
  }, 500);
});
