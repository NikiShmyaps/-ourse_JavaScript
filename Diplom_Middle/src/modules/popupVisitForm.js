function popupVisitForm(){
    const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.querySelector('#free_visit_form'),
        body = document.querySelector('body');

    // const formActive = () => {
    //     if(!freeVisitForm.style.display || freeVisitForm.style.display === 'block'){
    //         freeVisitForm.style.display = 'none';
    //     }else{
    //         freeVisitForm.style.display = 'block';
    //     }
    // };

    openPopup.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    });

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.closest('.close_icon')){
            freeVisitForm.style.display = 'none';
            return;
        }else if(target && target.closest('.overlay')){
            freeVisitForm.style.display = 'none';
            return;
        }
    });
}

export default popupVisitForm;