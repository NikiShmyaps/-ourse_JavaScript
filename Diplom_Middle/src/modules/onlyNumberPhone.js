function onlyNumberPhone(){
    const inputItem = document.querySelectorAll('[name=phone]');

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange){
            elem.setSelectionRange(pos, pos);
        }else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
         
    function mask(event) {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type == "blur") {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    inputItem.forEach((elem) => {
        elem.addEventListener('input', mask, false);
        elem.addEventListener("focus", mask, false);
        elem.addEventListener("blur", mask, false);
        
    });
}

export default onlyNumberPhone;