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

export default toggleMenu;