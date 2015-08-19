var calcMain = {
    calcObj: {}
};

var CalcObj = function () {
    this.resultNumber = 0;
    this.inputNumber = 0;
    this.isSetInputNumber = false;
    this.calculateCount = 0;
    this.funcName = '';
};

calcMain.init = function () {
    calcMain.calcObj = new CalcObj();

    var numberBtns = document.getElementById('number_btns'),
        funcPlus = document.getElementById('func_plus'),
        funcMultiply = document.getElementById('func_multiply'),
        funcEqual = document.getElementById('func_equal'),
        funcClear = document.getElementById('func_clear'),
        i;

    for (i = numberBtns.children.length; i = i - 1;){
        numberBtns.children[i].onclick = function () {
            calcMain.pushNumberBtn(this);
        };
    }

    funcPlus.onclick = function () {
        calcMain.funcPlus();
    };

    funcMultiply.onclick = function () {
        calcMain.funcMultiply();
    };

    funcEqual.onclick = function () {
        calcMain.funcEqual();
    };

    funcClear.onclick = function () {
        calcMain.funcClear();
    };

};

calcMain.pushNumberBtn = function (numberBtnsElem) {
    var inputNumber = calcMain.calcObj.inputNumber;
    calcMain.calcObj.calculateCount = 0;

    if(calcMain.calcObj.isSetInputNumber){
        calcMain.calcObj.isSetInputNumber = false;
        calcMain.calcObj.inputNumber = Number(numberBtnsElem.value);
        calcMain.showInputNumber();

    } else {
        calcMain.calcObj.inputNumber = (inputNumber == 0) ?
                                            Number(numberBtnsElem.value) :
                                            '' + inputNumber + numberBtnsElem.value;
        calcMain.showInputNumber();
    }
};

calcMain.showInputNumber = function () {
    document.getElementById('calcDisplay').innerHTML = calcMain.calcObj.inputNumber;
};

calcMain.showResultNumber = function () {
    document.getElementById('calcDisplay').innerHTML = calcMain.calcObj.resultNumber;
};

calcMain.funcPlus = function (ignoreCount) {
    var inputNumber = calcMain.calcObj.inputNumber,
        resultNumber = calcMain.calcObj.resultNumber,
        calculateCount = calcMain.calcObj.calculateCount;

    if (ignoreCount == undefined){
        ignoreCount = false;
    }

    if (calculateCount == 1 && !ignoreCount){
        return;
    }

    calcMain.calcObj.resultNumber = Number(resultNumber) + Number(inputNumber);
    calcMain.calcObj.savedInputNumber = calcMain.calcObj.inputNumber;
    calcMain.calcObj.isSetInputNumber = true;
    calcMain.calcObj.calculateCount = Number(calcMain.calcObj.calculateCount) + 1;
    calcMain.calcObj.funcName = 'plus';
    calcMain.showResultNumber();
};

calcMain.funcMultiply = function () {

};

calcMain.funcEqual = function () {
    var funcName = calcMain.calcObj.funcName,
        ignoreCount = true;

    switch (funcName){
        case 'plus':
            calcMain.funcPlus(ignoreCount);
            break;
        default :
            break;
    }
};

calcMain.funcClear = function () {
    calcMain.calcObj = new CalcObj();
    calcMain.showResultNumber();
};
