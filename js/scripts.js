/*######################################
DOM Selectors 
######################################*/
const Element = element => {
    return document.querySelector(element)
}

const Elements = element => {
    return document.querySelectorAll(element)
}

/*######################################
Effects
######################################*/
const fadeOut = element => {
    element.style.opacity = 1;
    (fade = () => {
        if ((element.style.opacity -= .1) < 0) {
            element.style.display = "none"
        } else {
            requestAnimationFrame(fade)
        }
    })()
}

const fadeIn =  (element, display) => {
    element.style.opacity = 0;
    element.style.display = display || "block";
  
    (fade = () => {
      let val = parseFloat(element.style.opacity)
      if (!((val += .1) > 1)) {
        element.style.opacity = val;
        requestAnimationFrame(fade)
      }
    })()
  }

/*######################################
Page Loaded
######################################*/
const documentReady = () => {
    (hidePreloader = () => {
        const preloaderFadeOutTime = 500
        const preloader = Element('.spinner-wrapper')
        setTimeout(() => {
            fadeOut(preloader)
        }, preloaderFadeOutTime)
    })()
}

if (document.readyState !== 'loading') {
    documentReady();
} else {
    document.addEventListener('DOMContentLoaded', documentReady);
}