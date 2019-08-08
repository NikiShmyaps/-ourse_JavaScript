function sendForm() {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Пожалуйста подождите, идет загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const formOne = document.getElementById('form1'),
        formTwo = document.getElementById('form2'),
        formBanner = document.getElementById('banner-form'),
        formCardOrder = document.getElementById('card_order'),
        formFooter = document.getElementById('footer_form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';

    formOne.addEventListener('submit', (event) => {
        event.preventDefault();
        formOne.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 15px';
        const formData = new FormData(formOne);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            formOne.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            formOne.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    formTwo.addEventListener('submit', (event) => {
        event.preventDefault();
        formTwo.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 15px';
        const formData = new FormData(formTwo);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            formTwo.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            formTwo.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    formBanner.addEventListener('submit', (event) => {
        event.preventDefault();
        formBanner.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'color: #ffffff;  margin-top: 15px';
        const formData = new FormData(formBanner);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            formBanner.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            formBanner.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    formCardOrder.addEventListener('submit', (event) => {
        event.preventDefault();
        formCardOrder.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'margin-top: 15px; text-align: center';
        const formData = new FormData(formCardOrder);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body).then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            formCardOrder.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            formCardOrder.querySelectorAll('input').forEach( item => item.value ='');
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
            statusMessage.textContent = successMessage;
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
        }).catch((error) => {
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
}

export default sendForm;