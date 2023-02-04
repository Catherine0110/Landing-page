

document.addEventListener('scroll', function() {
    document.querySelectorAll('.js-line').forEach(element => {
        if (document.documentElement.scrollTop >= document.querySelector('.skills').offsetTop) {        
            element.classList.add('is-active');                
        }else {
            element.classList.remove('is-active');                
            }
    });

});

