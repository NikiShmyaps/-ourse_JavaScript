const onlyNumber = () => {
    let inputItems = document.querySelectorAll('.calc-item');
    
    inputItems.forEach((elem) => {
        if(elem.matches('select')){
            return;
        }else{
            elem.addEventListener('input', (item) => {
                item.target.value = item.target.value.replace(/\D/g, '');
            });
        }
    });
};

export default onlyNumber;