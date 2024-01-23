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
  


  //situmlate Email sending
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
	  event.preventDefault();

	  // 模拟发送电子邮件
	  simulateEmailSending();
  });

  function simulateEmailSending() {
	  // 这里模拟发送邮件的过程，实际上这是一个假的演示
	  setTimeout(function() {
		  // 模拟成功发送邮件，弹出提示窗口
		  showSuccessMessage();
	  }, 1000); // 假设发送电子邮件需要 2 秒钟
  }

  function showSuccessMessage() {
	  // 弹出提示窗口
	  alert('Email has been sent successfully!');
  }


