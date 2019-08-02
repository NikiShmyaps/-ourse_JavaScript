window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining , hours, minutes, seconds};
        }
        function updateClock(){
            let timer = getTimeRemaining();

            if(timer.timeRemaining < 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }else{
                if(timer.hours.toString().length < 2){
                    timerHours.textContent = '0' + timer.hours;
                }else{
                    timerHours.textContent = timer.hours;
                }
                if(timer.minutes.toString().length < 2){
                    timerMinutes.textContent = '0' + timer.minutes;
                }else{
                    timerMinutes.textContent = timer.minutes;
                }
                if(timer.seconds.toString().length < 2){
                    timerSeconds.textContent = '0' + timer.seconds;
                }else{
                    timerSeconds.textContent = timer.seconds;
                }
                if(timer.timeRemaining > 0){
                    setInterval(() =>{
                        updateClock();
                    }, 1000);
                }
            }
        }
        updateClock();
    }
    countTimer('21 july 2019');

    // menu 
    const toggleMenu = () =>{
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');
        
        const handlerMenu = () => { 
            menu.classList.toggle('active-menu'); 
        };

        body.addEventListener('click', (event) => {
            let target = event.target;
            
            if(target && target.classList.contains('menu')){
                handlerMenu();
                return;
            }
            if (target && target.classList.contains('close-btn')){
                handlerMenu();
                return;
            }else if(target && target.closest('menu>ul>li')){
                handlerMenu();
                return;
            }else if(target && target.classList.contains('active-menu')){
                return;
            }
            target = target.closest('.menu');

            if(target && target.classList.contains('menu')){
                handlerMenu();
                return;
            }
            menu.classList.remove('active-menu');
            return;
            
          });

    }; 
    toggleMenu(); 

    // popup 
    const togglePopUp = () => { 
        const popup = document.querySelector('.popup'), 
            popupBtn = document.querySelectorAll('.popup-btn'), 
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((elem) => { 
            elem.addEventListener('click', () => { 
                let clientWidth = document.documentElement.clientWidth;
                if(clientWidth > 768){
                    popup.style.display = 'block';
                    
                    let statrAnimate = Date.now(), //Время начала
                        timerAnimate = setInterval(function(){
                            let timePassed = Date.now() - statrAnimate; // Пройденное время
                            if(timePassed >= 1000){
                                clearInterval(timerAnimate);
                                return;
                            } 
                            playAnimate(timePassed);
                        }, 10);
                    const playAnimate = (timePassed) => {
                        popupContent.style.top = timePassed / 15 + 'px';

                    };
                }else{
                    popup.style.display = 'block';
                }

                }); 
        }); 

        popup.addEventListener('click', (event) =>{
            let target = event.target;
            // contains проверка на наличие класса, вернет false || true
            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            }else{
                // closest проверка элемента на класс, если нет то поднимается выше
                target = target.closest('.popup-content');

            if(!target){
                popup.style.display = 'none';
            }
            }

            

        });
    };   
    togglePopUp();

    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
            
        });
    };
    tabs();

    // Точки для слайдера
    const addDots = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dots = document.querySelector('.portfolio-dots');
            
        slide.forEach(() => {
            let newDot = document.createElement('li');
            newDot.className = 'dot';
            dots.appendChild(newDot);
        });
    };
    addDots();
    
    // Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }


            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if(target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }   
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            } 
        });

        
        startSlide(1500);
    };
    slider();

    //Калькулятор только цифры
    const onlyNumber = () => {
        let inputItems = document.querySelectorAll('.calc-item');
        
        inputItems.forEach((elem) => {
            elem.addEventListener('input', (item) => {
                item.target.value = item.target.value.replace(/\D/g, '');
            });
        });
    };
    onlyNumber();

    //Калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count') ,
            totalValue = document.getElementById('total');
        
        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value && calcCount.value > 1) {
                countValue += (calcCount.value && calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };
    calc(100);

    // Изменение фото команды
    const changePhoto = () => {
        let blockImg = document.querySelectorAll('.command .row img');
        
        blockImg.forEach(elem => {
            let newImg;

            elem.addEventListener('mouseover', (event) => {
                newImg = event.target.src;
                event.target.src = event.target.dataset.img;
            });

            elem.addEventListener('mouseout', (event) => {
                event.target.src = newImg;
            });
        });
    };
    changePhoto();

    // только + и числа для полей с номером телефона
    const onlyNumberPhone = () => {
        const inputItems = document.querySelectorAll('.form-phone');

        inputItems.forEach((elem) => {
            elem.addEventListener('input', (item) => {
                item.target.value = item.target.value.replace(/[^\+\d]/g, '');
            });
        });
    };
    onlyNumberPhone();

    // Только Кириллица и пробелы для полей "Ваше имя" и "Ваше сообщение"
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
    kirillInput();

    //send-ajax-form
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
            postData(body, () => {
                form.querySelectorAll('input').forEach( item => item.value ='');
                statusMessage.textContent = successMessage;

            }, (error) => {
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
            postData(body, () => {
                formFooter.querySelectorAll('input').forEach( item => item.value ='');
                statusMessage.textContent = successMessage;
            }, (error) => {
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
            postData(body, () => {
                formPopUp.querySelectorAll('input').forEach( item => item.value ='');
                statusMessage.textContent = successMessage;

            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        const postData = (body, outputData, errorData) => {
            return new Promise((resolve, reject) =>{
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    
                    if(request.readyState !== 4){
                        return;
                    }
                    if(request.status === 200){
                        resolve();
                        outputData();
                        
                    }else{
                        reject();
                        errorData(request.status);
                        
                    }
                });

                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
            
                request.send(JSON.stringify(body));
            });    
        };
    };
    sendForm();
});