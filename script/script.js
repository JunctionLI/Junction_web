// spark animation


document.addEventListener('mousemove', function(e) {
	const trail = document.createElement('div');
	trail.classList.add('trail');
	document.body.appendChild(trail);
  
	// 设置光影位置
	trail.style.left = e.pageX - 10 + 'px'; /* 光影水平位置 */
	trail.style.top = e.pageY - 10 + 'px'; /* 光影垂直位置 */
  
	// 使用定时器移除光影效果
	setTimeout(function() {
	  trail.style.transform = 'scale(0)'; /* 缩小光影 */
	  trail.style.opacity = '0'; /* 逐渐隐藏 */
	}, 100); // 设置光影消失时间
  });
  

