function onlyNumberPhone(){
    const inputItem = document.querySelectorAll('[name=phone]');

    inputItem.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[^\+\d]/g, '');
        });
        
    });
}

export default onlyNumberPhone;