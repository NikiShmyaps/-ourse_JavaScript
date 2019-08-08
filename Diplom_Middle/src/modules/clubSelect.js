function clubSelect(){
    const choose = document.querySelector('.clubs-list>ul'),
        body = document.querySelector('body');

    const selectActive = () => {
        choose.classList.toggle('active-select');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.closest('.club-select')){
            selectActive();
            return;
        }
        choose.classList.remove('active-select');
        return;
    });
}

export default clubSelect;