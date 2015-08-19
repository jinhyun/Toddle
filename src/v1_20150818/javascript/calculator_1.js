var calcMain_1 = {
    calcObj: {}
};

var CalcObj = function () {
    this.resultNumber = 0;
    this.inputNumber = 0;
    this.isSetInputNumber = false;
    this.calculateCount = 0;
    this.funcName = '';
};

calcMain_1.init = function () {
    calcMain_1.calcObj = new CalcObj();

    var numberBtns = document.getElementById('number_btns'),
        funcPlus = document.getElementById('func_plus'),
        funcMultiply = document.getElementById('func_multiply'),
        funcEqual = document.getElementById('func_equal'),
        funcClear = document.getElementById('func_clear'),
        i;

    for (i = numberBtns.children.length; i = i - 1;){
        numberBtns.children[i].onclick = function () {
            calcMain_1.pushNumberBtn(this);
        };
    }

    funcPlus.onclick = function () {
        calcMain_1.funcPlus();
    };

    funcMultiply.onclick = function () {
        calcMain_1.funcMultiply();
    };

    funcEqual.onclick = function () {
        calcMain_1.funcEqual();
    };

    funcClear.onclick = function () {
        calcMain_1.funcClear();
    };

};

calcMain_1.pushNumberBtn = function (numberBtnsElem) {
    var inputNumber = calcMain_1.calcObj.inputNumber;
    calcMain_1.calcObj.calculateCount = 0;

    if(calcMain_1.calcObj.isSetInputNumber){
        calcMain_1.calcObj.isSetInputNumber = false;
        calcMain_1.calcObj.inputNumber = Number(numberBtnsElem.value);
        calcMain_1.showInputNumber();

    } else {
        calcMain_1.calcObj.inputNumber = (inputNumber == 0) ?
                                            Number(numberBtnsElem.value) :
                                            '' + inputNumber + numberBtnsElem.value;
        calcMain_1.showInputNumber();
    }
};

calcMain_1.showInputNumber = function () {
    document.getElementById('calcDisplay').innerHTML = calcMain_1.calcObj.inputNumber;
};

calcMain_1.showResultNumber = function () {
    document.getElementById('calcDisplay').innerHTML = calcMain_1.calcObj.resultNumber;
};

calcMain_1.funcPlus = function (ignoreCount) {
    var inputNumber = calcMain_1.calcObj.inputNumber,
        resultNumber = calcMain_1.calcObj.resultNumber,
        calculateCount = calcMain_1.calcObj.calculateCount;

    if (ignoreCount == undefined){
        ignoreCount = false;
    }

    if (calculateCount == 1 && !ignoreCount){
        return;
    }

    calcMain_1.calcObj.resultNumber = Number(resultNumber) + Number(inputNumber);
    calcMain_1.calcObj.savedInputNumber = calcMain_1.calcObj.inputNumber;
    calcMain_1.calcObj.isSetInputNumber = true;
    calcMain_1.calcObj.calculateCount = Number(calcMain_1.calcObj.calculateCount) + 1;
    calcMain_1.calcObj.funcName = 'plus';
    calcMain_1.showResultNumber();
};

calcMain_1.funcMultiply = function (ignoreCount) {
    var inputNumber = calcMain_1.calcObj.inputNumber,
        resultNumber = calcMain_1.calcObj.resultNumber,
        calculateCount = calcMain_1.calcObj.calculateCount;

    resultNumber = (resultNumber == 0) ? 1 : resultNumber;

    if (ignoreCount == undefined){
        ignoreCount = false;
    }

    if (calculateCount == 1 && !ignoreCount){
        return;
    }

    calcMain_1.calcObj.resultNumber = Number(resultNumber) * Number(inputNumber);
    calcMain_1.calcObj.savedInputNumber = calcMain_1.calcObj.inputNumber;
    calcMain_1.calcObj.isSetInputNumber = true;
    calcMain_1.calcObj.calculateCount = Number(calcMain_1.calcObj.calculateCount) + 1;
    calcMain_1.calcObj.funcName = 'multiply';
    calcMain_1.showResultNumber();
};

calcMain_1.funcEqual = function () {
    var funcName = calcMain_1.calcObj.funcName,
        ignoreCount = true;

    switch (funcName){
        case 'plus':
            calcMain_1.funcPlus(ignoreCount);
            break;
        case 'multiply':
            calcMain_1.funcMultiply(ignoreCount);
            break;
        default :
            break;
    }
};

calcMain_1.funcClear = function () {
    calcMain_1.calcObj = new CalcObj();
    calcMain_1.showResultNumber();
};
