
function animateScroller(targetHeight) {
    targetHeight = document.body.scrollHeight - window.innerHeight > targetHeight + scrollY ? 
        targetHeight : document.body.scrollHeight - window.innerHeight;
    var initialPosition = window.scrollY;
    var SCROLL_DURATION = 27;
    var step_x = Math.PI / SCROLL_DURATION;
    var step_count = 0;
    requestAnimationFrame(step);
    function step() {
        if (step_count < SCROLL_DURATION) {
            requestAnimationFrame(step);
            step_count++;
            window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * step_count)), 2));
        }
    }
}

const actualPage = (pathname) => {  
    while(pathname[pathname.length - 1] === '/') {
        pathname = pathname.slice(0, pathname.length - 1);
    }   
    // Pathname no tiene / al final
    const title = pathname.slice(pathname.lastIndexOf('/') + 1).replace(/\b\w/g, l => l.toUpperCase())  
    return title
}

export {	
	animateScroller,
    actualPage
}
