// custom.js - 为X和Y输入框添加+/-调节按钮功能

(function() {
  // 等待 DOM 加载完成后绑定事件
  function initStepButtons() {
    const graphX = document.getElementById('graphX');
    const graphY = document.getElementById('graphY');
    
    // 原有±1按钮
    const incX = document.getElementById('incX1');
    const decX = document.getElementById('decX1');
    const incY = document.getElementById('incY1');
    const decY = document.getElementById('decY1');
    
    // 新增±5、±10按钮
    const incX5 = document.getElementById('incX5');
    const decX5 = document.getElementById('decX5');
    const incX10 = document.getElementById('incX10');
    const decX10 = document.getElementById('decX10');
    
    const incY5 = document.getElementById('incY5');
    const decY5 = document.getElementById('decY5');
    const incY10 = document.getElementById('incY10');
    const decY10 = document.getElementById('decY10');

    if (!graphX || !graphY) {
      console.warn('Input elements not found, retrying...');
      return;
    }

    // 防止多次绑定
    if (initStepButtons.bound) return;
    initStepButtons.bound = true;

    function adjustInput(inputEl, delta) {
      if (!inputEl) return;
      let val = parseFloat(inputEl.value);
      if (isNaN(val)) val = 0;
      inputEl.value = val + delta;
      // 触发 input 事件，以便其他监听器（如更新画布）能够响应
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // 绑定X轴按钮
    if (incX) incX.addEventListener('click', () => adjustInput(graphX, 1));
    if (decX) decX.addEventListener('click', () => adjustInput(graphX, -1));
    if (incX5) incX5.addEventListener('click', () => adjustInput(graphX, 5));
    if (decX5) decX5.addEventListener('click', () => adjustInput(graphX, -5));
    if (incX10) incX10.addEventListener('click', () => adjustInput(graphX, 10));
    if (decX10) decX10.addEventListener('click', () => adjustInput(graphX, -10));

    // 绑定Y轴按钮
    if (incY) incY.addEventListener('click', () => adjustInput(graphY, 1));
    if (decY) decY.addEventListener('click', () => adjustInput(graphY, -1));
    if (incY5) incY5.addEventListener('click', () => adjustInput(graphY, 5));
    if (decY5) decY5.addEventListener('click', () => adjustInput(graphY, -5));
    if (incY10) incY10.addEventListener('click', () => adjustInput(graphY, 10));
    if (decY10) decY10.addEventListener('click', () => adjustInput(graphY, -10));
  }

  // 尝试在 DOMContentLoaded 时执行，如果已经加载完则立即执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStepButtons);
  } else {
    initStepButtons();
  }

  // 同时设置一个后备，以防脚本在动态内容之后加载
  setTimeout(initStepButtons, 200);
})();