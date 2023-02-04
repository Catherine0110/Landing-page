
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
    
