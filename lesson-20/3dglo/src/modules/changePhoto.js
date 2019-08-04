const changePhoto = () => {
    let blockImg = document.querySelectorAll('.command .row img');
    
    blockImg.forEach(elem => {
        let newImg;

        elem.addEventListener('mouseover', (event) => {
            newImg = event.target.src;
            event.target.src = event.target.dataset.img;
        });

        elem.addEventListener('mouseout', (event) => {
            event.target.src = newImg;
        });
    });
};

export default changePhoto;