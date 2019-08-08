function gift(){
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.querySelector('#gift'),
        body = document.querySelector('body');
        console.log('gift: ', gift);

    fixedGift.addEventListener('click', () => {
        gift.style.display = 'block';
        fixedGift.style.display = 'none';
    });

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.closest('.close_icon')){
            gift.style.display = 'none';
            return;
        }else if(target && target.closest('.overlay')){
            gift.style.display = 'none';
            return;
        }else if (target && target.closest('.close-btn')){
            gift.style.display = 'none';
            return;
        }
    });
}

export default gift;