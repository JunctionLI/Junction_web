// spark animation


document.addEventListener('mousemove', function(e) {
	const trail = document.createElement('div');
	trail.classList.add('trail');
	document.body.appendChild(trail);
  
	
	trail.style.left = e.pageX - 10 + 'px';
	trail.style.top = e.pageY - 10 + 'px'; 
  
	
	setTimeout(function() {
	  trail.style.transform = 'scale(0)'; 
	  trail.style.opacity = '0'; 
	}, 100); 
  });
  


  
  let menu = document.querySelector('#menu-icon');
  let nav = document.querySelector('.nav_list');
  
  menu.onclick = () => {
	  menu.classList.toggle('bx-x');
	  nav.classList.toggle('open');
  };
  
  window.onscroll = () => {
	  menu.classList.remove('bx-x');
	  nav.classList.remove('open');
  };