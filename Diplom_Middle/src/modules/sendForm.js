const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Пожалуйста подождите, идет загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся',
        consentMessage = 'Пожалуйста подтвердите согласие на обработку персональных данных',
        contentClear = '';

    const formCardOrder = document.getElementById('card_order'),
        formFooter = document.getElementById('footer_form'),
        thanks = document.getElementById('thanks');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';

    let getForm = (formID, formBTN, checkID) => {
        const form = document.getElementById(formID),
            fromBtn = document.querySelector(formBTN),
            check = document.getElementById(checkID);

            fromBtn.addEventListener('click', () => {
            if(check.checked){
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    statusMessage.style.cssText = 'color: #ffffff;  margin-top: 10px';
        
                    const formData = new FormData(form);
        
                    let body = {},
                        item;
                    
                    formData.forEach((val, key) => {
                        body[key] = val;
                        item = document.querySelector(`#${formID} input[name=${key}]`);
                    });
        
                    postData(item, body).then((response) => {
                        if(response.status !== 200){
                            throw new Error('status network not 200');
                        }
                        thanks.style.display = 'block';
                        statusMessage.textContent = contentClear;
                        form.querySelectorAll('input').forEach( item => item.value ='');
                    }).catch((error) => {
                        form.querySelectorAll('input').forEach( item => item.value ='');
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
                });
            }else{
                form.appendChild(statusMessage);
                statusMessage.textContent = consentMessage;
                statusMessage.style.cssText = 'color: #ffffff;  margin-top: 5px';
            }
        });
    };

    formCardOrder.addEventListener('submit', (event) => {
        event.preventDefault();
        formCardOrder.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #2e2e2e;  margin-top: 15px; text-align: center';
        const formData = new FormData(formCardOrder);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            thanks.style.display = 'block';
            statusMessage.textContent = contentClear;
            formCardOrder.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    formFooter.addEventListener('submit', (event) => {
        event.preventDefault();
        formFooter.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 15px; text-align: center';
        const formData = new FormData(formFooter);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            thanks.style.display = 'block';
            statusMessage.textContent = contentClear;
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (item, body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    getForm('form1', '[name=send1]', 'check');
    getForm('form2', '[name=send2]', 'check2');
    getForm('banner-form', '[name=send]', 'check1');
};

export default sendForm;