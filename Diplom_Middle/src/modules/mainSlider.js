const mainSlider = () => {
  const slide = document.querySelectorAll('.main-slider>.slide'),
    slider = document.querySelector('.main-slider');


    // const ul = document.createElement('ul');
    // ul.setAttribute('class', 'slider-dots');
    // slider.appendChild(ul);
    // for (let i = 0; i < slide.length; i++) {
    //   const ul = slider.querySelector('.slider-dots'),
    //     li = document.createElement('li');
    //   if (i == 0) {
    //     li.setAttribute('class', 'main-dot dot-active');
    //     ul.appendChild(li);
    //   } else {
    //     li.setAttribute('class', 'main-dot');
    //     ul.appendChild(li);
    //   }
    // }

    // const dot = slider.querySelectorAll('.main-dot');

    let currentSlide = 0;

    const autoPlaySlide = () => {
      slide[currentSlide].classList.remove('slide-active');
      // dot[currentSlide].classList.remove('dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      slide[currentSlide].classList.add('slide-active');
      // dot[currentSlide].classList.add('dot-active');
    };

    const startSlide = () => {
      setInterval(autoPlaySlide, 5000);
    };

    // slider.addEventListener('click', (event) => {
    //   event.preventDefault();

    //   let target = event.target;

    //   if(!target.matches('.main-dot')){
    //     return;
    //   }

    //   slide[currentSlide].classList.remove('slide-active');
    //   dot[currentSlide].classList.remove('dot-active');
    //   if(target.matches('.main-dot')){
    //     dot.forEach((elem, index) => {
    //       if (elem === target){
    //         currentSlide = index;
    //       }
    //     });
    //   }
    //   slide[currentSlide].classList.add('slide-active');
    //   dot[currentSlide].classList.add('dot-active');
    // });

    startSlide();
    
  };

export default mainSlider;