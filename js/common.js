
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
  

function createIframe(element) {
    document.querySelector('.js-video-btn').addEventListener('click', (e) => {
        const iframe = document.createElement('iframe');
        let iframeUrl = `https://www.youtube.com/embed/${element.dataset.id}?autoplay=1&autohide=1`;        
        iframe.setAttribute('src', iframeUrl);
        iframe.setAttribute('frameborder', '0');                
        iframe.setAttribute('allow', 'autoplay');                

        element.appendChild(iframe);
        
    });
}
createIframe(document.querySelector('.js-video'));
    



document.addEventListener('scroll', function() {
    document.querySelectorAll('.js-line').forEach(element => {
        if (document.documentElement.scrollTop >= document.querySelector('.skills').offsetTop) {        
            element.classList.add('is-active');                
        }else {
            element.classList.remove('is-active');                
            }
    });

});


$.validator.addMethod("js-email", function(value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}, "Введите корректный email");




$('.js-input-name').on('input', function() {
    var value = $(this).val();
    value = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/ig, '');
    $(this).val(value);
});

$('.js-form').validate({
    errorPlacement: function(error, element) {
        var $parent = element.parent();
        $parent.append(error);
        
    },
    submitHandler: function(form) {
        $(form).trigger("formSubmit");
    }        
});





