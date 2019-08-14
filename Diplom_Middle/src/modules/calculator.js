const calculator = () => {
    const cardOrder = document.getElementById('card_order'),
        cardLetoMozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        priceInput = document.querySelector('.price input');


    cardOrder.addEventListener(`change`, (event) => {
        const target = event.target;
        if (target.matches(`.club input`) || target.matches(`.time input`) || target.matches(`.price input`)) {
            let total = 0,
                monthValue = cardOrder.querySelector('input[name="card-type"]:checked').value;
    
            if(cardLetoMozaika.checked) {
            if (monthValue == 1) {
                    total = 1999;
                } else if (monthValue == 6) {
                    total = 9900;
                } else if (monthValue == 9) {
                    total = 13900;
                } else if (monthValue == 12) {
                    total = 19900;
                }
            }else {
                if (monthValue == 1) {
                    total = 2999;
                } else if (monthValue == 6) {
                    total = 14900;
                } else if (monthValue == 9) {
                    total = 21900;
                } else if (monthValue == 12) {
                    total = 24900;
                }
            }

            if (priceInput.value === `ТЕЛО2019`) {
                total = total - (total * 0.3);
              }

            priceTotal.textContent = total;
        }
    });    
};

export default calculator;