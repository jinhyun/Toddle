var calcMain = {
    calcObj: {},
    isPushFuncBtn: false
};

var calcObj = function() {
    this.resultNumber = 0;
    this.srcInputNumber = 0;
    this.newInputNumber = 0;
    this.funcName = '';
};

calcMain.init = function(){
    calcMain.calcObj = new calcObj();
    var numberButtons = document.getElementById('number_buttons').children;

    for (var i = numberButtons.length; i--;){
        numberButtons[i].onclick = function (){
            calcMain.pushNumberBtn(this);
        }
    }

    document.getElementById('func_clear').onclick = function() {
        calcMain.clearCalcDisplay();
    };

    document.getElementById('func_plus').onclick = function() {
        calcMain.pushPlusBtn();
    };

    document.getElementById('func_equal').onclick = function() {
        calcMain.pushEqualBtn();
    };
};

calcMain.pushNumberBtn = function(numberButtonsElem) {
    var inputNumber = Number(numberButtonsElem.value),
        newInputNumber = calcMain.calcObj.newInputNumber;

    if (calcMain.calcObj.isPushFuncBtn) {
        calcMain.calcObj.srcInputNumber = calcMain.calcObj.newInputNumber;
        calcMain.calcObj.newInputNumber = inputNumber;
        calcMain.calcObj.isPushFuncBtn = false;
    } else {
        calcMain.calcObj.newInputNumber = Number('' + newInputNumber + inputNumber);
    }

    document.getElementById('calcDisplay').innerHTML = calcMain.calcObj.newInputNumber;
};

calcMain.clearCalcDisplay = function() {
    calcMain.calcObj = new calcObj();
    calcMain.showResultNumber();
};

calcMain.pushPlusBtn = function() {
    var calcObj = calcMain.calcObj,
        calcNumber = calcObj.resultNumber + calcObj.newInputNumber;

    calcMain.calcObj.isPushFuncBtn = true;
    calcMain.calcObj.resultNumber = calcNumber;
    calcMain.calcObj.funcName = 'plus';
    calcMain.showResultNumber();
};

calcMain.pushEqualBtn = function() {
    switch (calcMain.calcObj.funcName){
        case ('plus'):
            calcMain.pushPlusBtn();
            break;
        default :
            break;
    }
};

calcMain.showResultNumber = function() {
    document.getElementById('calcDisplay').innerHTML = '' + calcMain.calcObj.resultNumber;
};
