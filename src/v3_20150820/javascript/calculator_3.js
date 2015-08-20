/*
 Error
    Case 1: 5 * 2 = -
    Case 2: 2 * 4 -

 Solution
    Case 1: 숫자를 누르고 난 뒤에만 계산 되도록 변경
            연속된 기능버튼을 클릭할 경우 계산하지 않도록 변경
            숫자를 누를때 초기화처리
    Case 2:
*/
var calcMain_3 = {
        calcObj: {}
    }
;

var CalcObj = function () {
    var resultNumber = 0,
        inputNumber = 0,
        isInitInputNumber = false,
        functionBtnCount = 0;

    this.pushedFunctionBtn = function () {};

    this.setInputNumber = function (value) {
        inputNumber = value;
    };

    this.getInputNumber = function () {
        return inputNumber;
    };

    this.setResultNumber = function (value) {
        resultNumber = value;
    };

    this.getResultNumber = function () {
        return resultNumber;
    };

    this.trueIsInitInputNumber = function () {
        isInitInputNumber = true;
    };

    this.falseIsInitInputNumber = function (){
        isInitInputNumber = false;
    };

    this.isInitInputNumber = function () {
        return isInitInputNumber;
    };

    this.plusFunctionBtnCount = function () {
        functionBtnCount = functionBtnCount + 1;
    };

    this.pushedFunctionBtnCount = function () {
        return functionBtnCount;
    };

    this.initFunctionBtnCount = function () {
        functionBtnCount = 0;
    }
};

calcMain_3.init = function () {
    // Constructor
    calcMain_3.calcObj = new CalcObj();

    // numberBtnElem
    var numberBtns = document.getElementById('number_btns');

    for (var i = numberBtns.children.length; i--;){
        numberBtns.children[i].onclick = function () {
            calcMain_3.pushNumberBtn(this);
        }
    }

    // functionBtnElem
    document.getElementById('plus_btn').onclick = function () {
        calcMain_3.pushPlusBtn();
    };

    document.getElementById('minus_btn').onclick = function () {
        calcMain_3.pushMinusBtn();
    };

    document.getElementById('divide_btn').onclick = function () {
        calcMain_3.pushDivideBtn();
    };

    document.getElementById('multiply_btn').onclick = function () {
        calcMain_3.pushMultiplyBtn();
    };

    document.getElementById('equal_btn').onclick = function () {
        calcMain_3.pushEqualBtn();
    };

    document.getElementById('clear_btn').onclick = function () {
        calcMain_3.pushClearBtn();
    };
};

calcMain_3.pushNumberBtn = function (numberBtnElem) {
    var inputNumber;

    if (calcMain_3.calcObj.isInitInputNumber()){
        calcMain_3.calcObj.setInputNumber(0);
        calcMain_3.calcObj.falseIsInitInputNumber();
    }

    if (calcMain_3.calcObj.getInputNumber() == 0){
        inputNumber = numberBtnElem.value;
    } else {
        inputNumber = '' + calcMain_3.calcObj.getInputNumber() + numberBtnElem.value;
    }

    calcMain_3.calcObj.setInputNumber(inputNumber);
    calcMain_3.calcObj.initFunctionBtnCount();
    calcMain_3.showInputNumber();
};

calcMain_3.pushPlusBtn = function () {
    var calcObj = calcMain_3.calcObj,
        objInputNumber = calcMain_3.calcObj.getInputNumber(),
        objResultNumber = calcMain_3.calcObj.getResultNumber(),
        resultNumber;

    if (calcObj.pushedFunctionBtnCount() >= 1) {
        return;
    } else {
        calcObj.plusFunctionBtnCount();
    }

    resultNumber = Number(objInputNumber) + Number(objResultNumber);

    calcObj.setResultNumber(resultNumber);
    calcObj.trueIsInitInputNumber();
    calcObj.pushedFunctionBtn = calcMain_3.pushPlusBtn;
    calcMain_3.showResultNumber();
};

calcMain_3.pushMinusBtn = function () {
    var calcObj = calcMain_3.calcObj,
        objInputNumber = calcMain_3.calcObj.getInputNumber(),
        objResultNumber = calcMain_3.calcObj.getResultNumber(),
        resultNumber;

    if (calcObj.pushedFunctionBtnCount() >= 1) {
        return;
    } else {
        calcObj.plusFunctionBtnCount();
    }

    resultNumber = -Number(objInputNumber) + Number(objResultNumber);

    calcObj.setResultNumber(resultNumber);
    calcObj.trueIsInitInputNumber();
    calcObj.pushedFunctionBtn = calcMain_3.pushMinusBtn;
    calcMain_3.showResultNumber();
};

calcMain_3.pushMultiplyBtn = function () {
    var calcObj = calcMain_3.calcObj,
        objInputNumber = calcMain_3.calcObj.getInputNumber(),
        objResultNumber = calcMain_3.calcObj.getResultNumber(),
        resultNumber;

    if (calcObj.pushedFunctionBtnCount() >= 1) {
        return;
    } else {
        calcObj.plusFunctionBtnCount();
    }

    // multiply
    resultNumber = Number(objInputNumber) * Number(objResultNumber);

    calcObj.setResultNumber(resultNumber);
    calcObj.trueIsInitInputNumber();
    calcObj.pushedFunctionBtn = calcMain_3.pushMultiplyBtn;
    calcMain_3.showResultNumber();
};

calcMain_3.pushEqualBtn = function () {
    calcMain_3.calcObj.initFunctionBtnCount();
    calcMain_3.calcObj.pushedFunctionBtn();
    calcMain_3.calcObj.initFunctionBtnCount();
};

calcMain_3.pushClearBtn = function () {
    calcMain_3.calcObj = new CalcObj();
    calcMain_3.showResultNumber();
};

calcMain_3.showInputNumber = function () {
    document.getElementById('calc_display').innerHTML = calcMain_3.calcObj.getInputNumber();
};

calcMain_3.showResultNumber = function () {
    document.getElementById('calc_display').innerHTML = calcMain_3.calcObj.getResultNumber();
};
