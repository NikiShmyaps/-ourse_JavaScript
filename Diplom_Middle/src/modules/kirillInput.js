function kirillInput(){
    const inputItem = document.querySelectorAll('[name=name]');

    inputItem.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[-+\/'"№<>_=?!*$.,0-9a-zA-Z]/g, '');
        });
    });
}

export default kirillInput;