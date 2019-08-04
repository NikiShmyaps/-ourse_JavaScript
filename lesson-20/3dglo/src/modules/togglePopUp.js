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

export default togglePopUp;