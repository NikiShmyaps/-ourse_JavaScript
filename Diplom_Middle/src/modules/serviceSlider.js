const serviceSlider = () => {
    const slider = document.querySelector('.services-slider');
    let slide = document.querySelectorAll('.services-slider>.slide');
    
    const createBlock = () => {
        const newSliderBlock = document.createElement('div');
        newSliderBlock.setAttribute('class', 'slider-block');
        slider.appendChild(newSliderBlock);
        let sliderBlock = slider.querySelector('.slider-block');
        slide.forEach(element => {
            sliderBlock.appendChild(element);
        });
    };
    createBlock();

    const addToStart = () => {
        let sliderBlock = slider.querySelector('.slider-block'),
            last = sliderBlock.lastElementChild,
            lastClone = sliderBlock.lastElementChild.cloneNode(true);
        sliderBlock.insertAdjacentElement('afterbegin', lastClone);
        last.parentNode.removeChild(last);
    },
    addToEnd = () => {
        let sliderBlock = slider.querySelector('.slider-block'),
            first = sliderBlock.firstElementChild,
            firstClone = sliderBlock.firstElementChild.cloneNode(true);
        sliderBlock.insertAdjacentElement('beforeend', firstClone);
        first.parentNode.removeChild(first);
    };

    const createArrows = () => {
        const btnPrev = document.createElement('a'),
            btnNext = document.createElement('a');
        btnPrev.setAttribute('class', 'slider-btn prev');
        btnPrev.setAttribute('id', 'arrow-left');
        btnNext.setAttribute('class', 'slider-btn next');
        btnNext.setAttribute('id', 'arrow-right');
        slider.appendChild(btnPrev);
        slider.appendChild(btnNext);
    };
    createArrows();

    const buildSlide = () => {
        let sliderBlock = slider.querySelector('.slider-block'),
          sliders = sliderBlock.querySelectorAll('.slide');
        sliders.forEach(elem => {
          elem.classList.remove('services-slider-active');
        });
    
        for (let i = 0; i < 5; i++) {
          sliders[i].classList.add('services-slider-active');
        }
      };

    const move = (side) => {
        if (side === 'right') {
            addToEnd();
        }
        if (side ==='left') {
            addToStart();
        }
        buildSlide();
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('.slider-btn')) {
          return;
        }
    
        if (target.matches('#arrow-right')) {
          move('right');
        } else if (target.matches('#arrow-left')) {
          move('left');
        } 
      });

      buildSlide();
};

export default serviceSlider;