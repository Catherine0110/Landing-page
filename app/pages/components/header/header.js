const body = document.querySelector('body'),
      burger = document.querySelector('.js-burger');

const modalMenu = document.createElement('div');
modalMenu.classList.add('header__modal-menu');
modalMenu.innerHTML = `
    <div class="header__modal-menu-inner">
    <nav class="header__menu">
    <a class="header__menu-link js-link js-link-modal" href="#main">Главная</a>
    <a class="header__menu-link js-link js-link-modal" href="#about">Об авторе</a>
    <a class="header__menu-link js-link js-link-modal" href="#projects">Работы</a>
    <a class="header__menu-link js-link js-link-modal" href="#process">Процесс</a>
    <a class="header__menu-link js-link js-link-modal" href="#contacts">Контакты</a>
    </nav>
    </div>`;    

body.append(modalMenu);

burger.addEventListener('click', (e) => {
    burger.classList.toggle('is-active');
    document.querySelector('.header__modal-menu').classList.toggle('is-open');
    if(document.querySelector('.header__modal-menu').classList.contains('is-open')) {
      document.documentElement.style.overflow = 'hidden'; 
    }else {
      document.documentElement.style.overflow = ''; 
    }
  });
  
  document.querySelectorAll('.js-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const linkHref = link.getAttribute('href').substr(1);
      const section = document.getElementById(linkHref);
      const sectionTop = section.getBoundingClientRect().top;
      window.scrollBy ({
        top: sectionTop,
        behavior: 'smooth'
      }); 
      
      
    });
  });
  
  document.querySelectorAll('.js-link-modal').forEach(link => {
    link.addEventListener('click', (e) => {
    burger.click();
    });
  
  });
  