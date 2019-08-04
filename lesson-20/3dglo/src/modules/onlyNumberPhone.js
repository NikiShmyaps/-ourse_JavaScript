const onlyNumberPhone = () => {
    const inputItems = document.querySelectorAll('.form-phone');

    inputItems.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[^\+\d]/g, '');
        });
    });
};

export default onlyNumberPhone;