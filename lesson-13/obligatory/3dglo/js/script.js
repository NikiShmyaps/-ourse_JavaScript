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
        const btnMenu = document.querySelector('.menu'), 
            menu = document.querySelector('menu'), 
            closeBtn = document.querySelector('.close-btn'), 
            menuItems = menu.querySelectorAll('ul>li'); 
        
        const handlerMenu = () => { 
            menu.classList.toggle('active-menu'); 
        }; 
        btnMenu.addEventListener('click', handlerMenu); 
        closeBtn.addEventListener('click', handlerMenu); 
        
        // for(let i = 0; i < menuItems.length; i++){ 
        // menuItems[i].addEventListener('click',handlerMenu); 
        // } 
        menuItems.forEach((elem)=> elem.addEventListener('click', handlerMenu)); 
    }; 

    toggleMenu(); 

    // popup 

    const togglePopUp = () => { 
        const popup = document.querySelector('.popup'), 
            popupBtn = document.querySelectorAll('.popup-btn'), 
            popupClose = document.querySelector('.popup-close'),
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
            
        popupClose.addEventListener('click', () => { 
            popup.style.display = 'none'; 
        }); 
    }; 
        
    togglePopUp();
});