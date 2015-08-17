var calcMain = {};
calcMain.init = function(){
    var numberButtons = document.getElementById('number_buttons').children;

    for (var i = numberButtons.length; i--;){
        numberButtons[i].onclick = function (){
            calcMain.pushNumberBtn(this);
        }
    }

    document.getElementById('func_clear').onclick = function() {
        calcMain.clearCalcDisplay();
    }
};

calcMain.pushNumberBtn = function(numberButtonsElem) {
    var calcDisplayElem = document.getElementById('calcDisplay');
    var calcDisplayValue = calcDisplayElem.innerHTML.trim();

    calcDisplayElem.innerHTML =
        (calcDisplayValue == '0') ? numberButtonsElem.value : calcDisplayValue + numberButtonsElem.value;
};

calcMain.clearCalcDisplay = function() {
    document.getElementById('calcDisplay').innerHTML = '0';
};
