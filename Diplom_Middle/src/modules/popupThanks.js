const popupThanks = () => {
    const body = document.querySelector('body'),
    thanks = document.querySelector('#thanks');

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.closest('.close_icon')){
            thanks.style.display = 'none';
            return;
        }else if(target && target.closest('.overlay')){
            thanks.style.display = 'none';
            return;
        }else if(target && target.closest('.close-btn')){
            thanks.style.display = 'none';
            return;
        }
    });
};

export default popupThanks;