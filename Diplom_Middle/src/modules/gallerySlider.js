const gallerySlider = () => {
    const slide = document.querySelectorAll('.gallery-slider>.slide'),
        slider = document.querySelector('.gallery-slider');
        
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'slider-dots');
    slider.appendChild(ul);
    for (let i = 0; i < slide.length; i++) {
        const ul = slider.querySelector('.slider-dots'),
            li = document.createElement('li');
        if (i == 0) {
            li.setAttribute('class', 'main-dot dot-active');
            ul.appendChild(li);
        } else {
            li.setAttribute('class', 'main-dot');
            ul.appendChild(li);
        }
    }

    const btnPrev = document.createElement(`a`),
    btnNext = document.createElement(`a`);
    btnPrev.setAttribute("class", "slider-btn prev");
    btnPrev.setAttribute("id", "arrow-left");
    btnNext.setAttribute("class", "slider-btn next");
    btnNext.setAttribute("id", "arrow-right");
    slider.appendChild(btnPrev);
    slider.appendChild(btnNext);

    const dot = slider.querySelectorAll('.main-dot');
      
    let currentSlide = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].classList.remove('gallery-slide-active');
        dot[currentSlide].classList.remove('dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
          currentSlide = 0;
        }
        slide[currentSlide].classList.add('gallery-slide-active');
        dot[currentSlide].classList.add('dot-active');
    };
  
    const startSlide = () => {
        setInterval(autoPlaySlide, 3000);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
  
        let target = event.target;

        if(!target.matches('#arrow-right, #arrow-left, .main-dot')){
            return;
        }
  
        slide[currentSlide].classList.remove('gallery-slide-active');
        dot[currentSlide].classList.remove('dot-active');
        if(target.matches('.main-dot')){
          dot.forEach((elem, index) => {
            if (elem === target){
              currentSlide = index;
            }
          });
        }else if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }

        slide[currentSlide].classList.add('gallery-slide-active');
        dot[currentSlide].classList.add('dot-active');
    });

    startSlide();
};

export default gallerySlider;