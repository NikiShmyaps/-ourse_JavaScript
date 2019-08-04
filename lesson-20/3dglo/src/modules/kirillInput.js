const kirillInput = () => {
    const inputName = document.querySelectorAll('[name=user_name]'),
        inputMessage = document.getElementById('form2-message');
    inputName.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[-+\/'"№<>_=?!*$.,0-9a-zA-Z]/g, '');
        });
    });
    inputMessage.addEventListener('input', (item) => {
        item.target.value = item.target.value.replace(/[-+\/'"№<>_=?!*$.,0-9a-zA-Z]/g, '');
    });
    
};

export default kirillInput;