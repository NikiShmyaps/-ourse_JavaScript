const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Пожалуйста подождите, идет загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся',
        consentMessage = 'Пожалуйста подтвердите согласие на обработку персональных данных',
        contentClear = '';

    const formFooter = document.getElementById('footer_form'),
        formCardOrder = document.querySelector('.club-card_order'),
        thanks = document.getElementById('thanks');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';

    let getForm = (formID, formBTN, checkID) => {
        const form = document.getElementById(formID),
            fromBtn = document.querySelector(formBTN),
            check = document.getElementById(checkID);

            fromBtn.addEventListener('click', (event) => {
            if(check.checked === true){
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    if(form == document.getElementById('card_order')){
                        form.appendChild(statusMessage);
                        statusMessage.textContent = loadMessage;
                        statusMessage.style.cssText = 'color: #2e2e2e;  margin-top: 10px; text-align: center';
                    }else{
                        form.appendChild(statusMessage);
                        statusMessage.textContent = loadMessage;
                        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 10px';
                    }
        
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
                        if(fromBtn == document.querySelector('[name=send]')){
                            thanks.style.display = 'block';
                            statusMessage.textContent = contentClear;
                        }else if(form == document.getElementById('form1')){
                            const secretive = document.querySelector('.secretive-one');
                            secretive.style.display = 'none';
                            statusMessage.textContent = successMessage;
                            statusMessage.style.cssText = 'color: #ffffff;  margin-top: 150px; font-size: 20px';
                            setTimeout(() => {
                                secretive.style.display = 'block';
                                statusMessage.textContent = contentClear;
                            }, 2500);
                        }else if (form == document.getElementById('form2')){
                            const secretive = document.querySelector('.secretive-two');
                            secretive.style.display = 'none';
                            statusMessage.textContent = successMessage;
                            statusMessage.style.cssText = 'color: #ffffff;  margin-top: 150px; font-size: 20px';
                            setTimeout(() => {
                                secretive.style.display = 'block';
                                statusMessage.textContent = contentClear;
                            }, 2500);
                        }else if (form == document.getElementById('card_order')){
                            statusMessage.textContent = successMessage;
                            statusMessage.style.cssText = 'color: #2e2e2e;  margin-top: 15px; text-align: center';
                            setTimeout(() => {
                                statusMessage.textContent = contentClear;
                            }, 2500);
                        }
                        form.querySelectorAll('input').forEach( item => {
                            if (item.getAttribute("name") == 'name' || item.getAttribute("name") == 'phone') {
                                item.value = '';
                            }
                        });
                    }).catch((error) => {
                        if(form == document.getElementById('form1')){
                            const secretive = document.querySelector('.secretive-one');
                            secretive.style.display = 'none';
                            statusMessage.textContent = errorMessage;
                            statusMessage.style.cssText = 'color: #ffffff;  margin-top: 150px; font-size: 20px';
                            setTimeout(() => {
                                secretive.style.display = 'block';
                                statusMessage.textContent = contentClear;
                            }, 2500);
                        }else if (form == document.getElementById('form2')){
                            const secretive = document.querySelector('.secretive-two');
                            secretive.style.display = 'none';
                            statusMessage.textContent = errorMessage;
                            statusMessage.style.cssText = 'color: #ffffff;  margin-top: 150px; font-size: 20px';
                            console.error(error);
                            setTimeout(() => {
                                secretive.style.display = 'block';
                                statusMessage.textContent = contentClear;
                            }, 2500);
                        }else if(form == document.getElementById('card_order')){
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                            statusMessage.style.cssText = 'color: #2e2e2e;  margin-top: 15px; text-align: center';
                        }
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
                });
            }else{
                event.preventDefault();
                if(form == document.getElementById('card_order')){
                    form.appendChild(statusMessage);
                    statusMessage.textContent = consentMessage;
                    statusMessage.style.cssText = 'color: #2e2e2e;  margin-top: 5px; text-align: center';
                }else{
                    form.appendChild(statusMessage);
                    statusMessage.textContent = consentMessage;
                    statusMessage.style.cssText = 'color: #ffffff;  margin-top: 5px';
                }
            }
        });
    };

    formFooter.addEventListener('submit', (event) => {
        event.preventDefault();
        formFooter.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 15px; text-align: center';
        const formData = new FormData(formFooter);
        
        let body = {},
            item;

        formData.forEach((val, key) => {
            body[key] = val;
            item = document.querySelector(`#${'footer_form'} input[name=${key}]`);
        });

        postData(item, body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            thanks.style.display = 'block';
            statusMessage.textContent = contentClear;
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            const secretive = document.querySelector('.secretive-footer'),
                show = document.querySelector('.show');
            
            thanks.style.display = 'block';
            secretive.style.display = 'none';
            show.appendChild(statusMessage);
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
    getForm('card_order', '[name=send3]', 'card_check');
};

export default sendForm;