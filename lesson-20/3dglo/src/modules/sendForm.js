const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form = document.getElementById('form1'),
        formFooter = document.getElementById('form2'),
        formPopUp = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        }); 

        postData(body).then( (response) =>{
            if (response.status !==200){
                throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            form.querySelectorAll('input').forEach( item => item.value ='');
        }).catch( (error) => {
            form.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            
            console.error(error);
        });


    });

    formFooter.addEventListener('submit', (event) => {
        event.preventDefault();
        formFooter.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formFooter);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        }); 
        postData(body).then( (response) =>{
            if (response.status !==200){
                throw new Error('status network not 200');
            }
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = successMessage;
        }).catch( (error) => {
            formFooter.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    formPopUp.addEventListener('submit', (event) => {
        event.preventDefault();
        formPopUp.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff';
        const formData = new FormData(formPopUp);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body).then( (response) =>{
            if (response.status !==200){
                throw new Error('status network not 200');
            }
            formPopUp.querySelectorAll('input').forEach( item => item.value ='');
            statusMessage.textContent = successMessage;
        }).catch( (error) => {
            formPopUp.querySelectorAll('input').forEach( item => item.value ='');
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
};

export default sendForm;