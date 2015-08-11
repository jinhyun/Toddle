var calcMain = {
    calcObj : ''
};
calcMain.fn = {};

var calcObj = function(){
    this.srcNum = '0';
    this.destNum = '0';
    this.resultNum = '0';
    this.enterNum = '';
    this.btnFuncName = '';
};

calcMain.init = function(){
    calcMain.calcObj = new calcObj();

    var btnNums = document.getElementsByName('btn_num');

    for (var i = btnNums.length; i--;){
        btnNums[i].onclick = function(){
            calcMain.fn.clickBtnNum(this);
        }
    }

    document.getElementById('btn_func_plus').onclick = function() {
        calcMain.fn.plus();
    };

    document.getElementById('btn_func_clear').onclick = function(){
        calcMain.fn.clear();
    };

    document.getElementById('btn_func_equal').onclick = function(){
        calcMain.fn.equal();
    };
};

calcMain.fn.clickBtnNum = function(btnNumElement){
    var calcDisplay = document.getElementById('calcMain_display_div'),
        enterNum = calcMain.calcObj.enterNum;

    enterNum += btnNumElement.value;
    calcDisplay.innerHTML = enterNum;

    // set object
    calcMain.calcObj.enterNum = enterNum;
};

calcMain.fn.plus = function(){
    var srcNum = calcMain.calcObj.srcNum,
        destNum = calcMain.calcObj.destNum,
        enterNum = calcMain.calcObj.enterNum,
        resultNum = calcMain.calcObj.resultNum;

    calcMain.calcObj.btnFuncName = calcMain.fn.plus;

    if (enterNum == ''){
        resultNum = Number(srcNum) + Number(destNum);
        document.getElementById('calcMain_display_div').innerHTML = '' + resultNum;

    } else {
        destNum = enterNum;
        resultNum = Number(srcNum) + Number(destNum);

        calcMain.calcObj.srcNum = resultNum;
        calcMain.calcObj.destNum = '0';
        calcMain.calcObj.enterNum = '';
        calcMain.calcObj.resultNum = resultNum;
        document.getElementById('calcMain_display_div').innerHTML = '' + resultNum;
    }

    calcMain.fn.reloadSrcNum();
};

calcMain.fn.reloadSrcNum = function(){
    var calcDisplay = document.getElementById('calcMain_display_div'),
        calcDisplayValue = calcDisplay.innerHTML;

    calcDisplay.innerHTML = '&nbsp;';
    setTimeout(function () {
        calcDisplay.innerHTML = calcDisplayValue;
    }, 100);
};

calcMain.fn.clear = function(){
    calcMain.calcObj = new calcObj();
    document.getElementById('calcMain_display_div').innerHTML = calcMain.calcObj.resultNum;
};

calcMain.fn.equal = function(){
    calcMain.calcObj.btnFuncName();
};
