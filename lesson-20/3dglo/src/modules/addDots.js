const addDots = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        dots = document.querySelector('.portfolio-dots');
        
    slide.forEach(() => {
        let newDot = document.createElement('li');
        newDot.className = 'dot';
        dots.appendChild(newDot);
    });
};

export default addDots;