// Dark/light mode toggle, persisted in localStorage
(function(){
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-mode');
  try{
    if(localStorage.getItem('theme') === 'dark'){
      body.classList.add('dark');
      if(toggleBtn) toggleBtn.className = 'ri-moon-fill';
    }
  }catch(e){}

  if(toggleBtn){
    toggleBtn.addEventListener('click', function(){
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      toggleBtn.className = isDark ? 'ri-moon-fill' : 'ri-sun-fill';
      try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
    });
  }

  const menuBtn = document.getElementById('menu-btn');
  const navLists = document.querySelector('.nav__lists');
  if(menuBtn && navLists){
    menuBtn.addEventListener('click', function(){
      navLists.style.display = navLists.style.display === 'flex' ? 'none' : 'flex';
      navLists.style.flexDirection = 'column';
      navLists.style.position = 'absolute';
      navLists.style.top = '64px';
      navLists.style.left = '0';
      navLists.style.right = '0';
      navLists.style.background = 'var(--panel)';
      navLists.style.padding = '20px';
      navLists.style.borderBottom = '1px solid var(--border)';
    });
  }
})();
