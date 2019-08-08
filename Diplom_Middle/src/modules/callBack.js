function callBack(){
    const callbackBtn = document.querySelector('.callback-btn'),
        callbackForm = document.querySelector('#callback_form'),
        body = document.querySelector('body');

        callbackBtn.addEventListener('click', () => {
            callbackForm.style.display = 'block';
        });

        body.addEventListener('click', (event) => {
            let target = event.target;

            if(target && target.classList.contains('close_icon')){
                callbackForm.style.display = 'none';
                return;
            }else if(target && target.closest('.overlay')){
                callbackForm.style.display = 'none';
                return;
            }
        });
}

export default callBack;