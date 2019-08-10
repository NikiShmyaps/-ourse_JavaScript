const clubSelect = () => {
    const choose = document.querySelector('.clubs-list>ul'),
        body = document.querySelector('body');

    const selectActive = () => {
        choose.classList.toggle('active');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.closest('.club-select')){
            selectActive();
            return;
        }
        choose.classList.remove('active');
        return;
    });
};

export default clubSelect;