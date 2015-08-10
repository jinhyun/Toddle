var calcMain = {
    'calculator': {
        'srcNumber': '0',
        'destNumber': '0',
        'resultNumber': '0',
        'calcFunc': ''
    }
};

calcMain.fn = {};

calcMain.init = function() {
    this.bind();
};

calcMain.bind = function() {
    var btnNums = document.getElementsByName('btn_num'),
        btnFunc = document.getElementsByName('btn_func');

    for (var i = btnNums.length; i--;) {
        btnNums[i].onclick = function() {
            calcMain.fn.pushBtnNum(this);
        };
    }

    for (var j = btnFunc.length; j--;) {
        btnFunc[j].onclick = function() {
            calcMain.fn.pushBtnFunc(this);
        }
    }
};

calcMain.fn.pushBtnNum = function(btnNumElement) {
    var calculator = calcMain.calculator,
        destNumber = (calculator.destNumber == '0') ? '' : calculator.destNumber;

    destNumber += btnNumElement.value;
    calculator.destNumber = destNumber;
    calcMain.fn.showDestNumber();
};

calcMain.fn.pushBtnFunc = function(btnFuncElement) {
    var funcName = btnFuncElement.id.replace('btn_func_', '');

    calcMain.fn.calculate(funcName);
    calcMain.fn.showResultNumber();
};

calcMain.fn.calculate = function(funcName) {
    var calculatorObj = calcMain.calculator,
        srcNumber = Number(calculatorObj.srcNumber),
        destNumber = Number(calculatorObj.destNumber),
        resultNumber;

    var setCalculatorObj = function(funcName){
        calculatorObj.resultNumber = '' + resultNumber;
        calculatorObj.srcNumber = calculatorObj.resultNumber;
        calculatorObj.destNumber = '0';
        calculatorObj.calcFunc = funcName;
    };

    var switchCalculate = function(funcName){
        switch (funcName) {
            case 'plus':
                resultNumber = srcNumber + destNumber;
                setCalculatorObj(funcName);
                break;
            case 'minus':
                resultNumber = srcNumber - destNumber;
                setCalculatorObj(funcName);
                break;
            case 'multiply':
                resultNumber = (srcNumber == 0) ? destNumber : srcNumber * destNumber;
                setCalculatorObj(funcName);
                break;
            case 'divide':
                resultNumber = (srcNumber == 0) ? destNumber : srcNumber / destNumber;
                setCalculatorObj(funcName);
                break;
            case 'equal':
                return switchCalculate(calculatorObj.calcFunc);
            default:
                break;
            console.log('test');
        }
    };

    switchCalculate(funcName);
};

calcMain.fn.showDestNumber = function() {
    document.getElementById('calcMain_display_div').innerHTML = calcMain.calculator.destNumber;
};

calcMain.fn.showResultNumber = function() {
    document.getElementById('calcMain_display_div').innerHTML = calcMain.calculator.resultNumber;
};

