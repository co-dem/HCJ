function btnClicked(btn){
    let elem = document.getElementById('input_place');
    if(btn == 'C'){
        elem.removeAttribute('value');
    } else if (btn == '=') {
        let res = eval(elem.getAttribute("value"));
        if (res != null) elem.setAttribute('value', res);
    } else if (btn == '√') {
        elem.setAttribute('value', Math.sqrt(eval(elem.getAttribute("value"))));
    } else if (btn == '←'){
        let str = elem.getAttribute("value");
        elem.setAttribute('value', str.slice(0, str.length-1));
    } else {
        if (elem.getAttribute("value") == null) elem.setAttribute('value', btn);
        else elem.setAttribute('value', elem.getAttribute("value") + btn);
    }
}