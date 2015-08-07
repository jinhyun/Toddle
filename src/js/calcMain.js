var calcMain = {
    btnFuncObj : ''
};

calcMain.init = function () {
    calcMain.btnFuncObj = {
        turnOn: false,
        funcName: '',
        srcContents: ''
    };

    calcMain.bind();
};

calcMain.init.btnFuncObjInit = function () {
    calcMain.btnFuncObj = {
        turnOn: false,
        funcName: '',
        srcContents: ''
    };
};

calcMain.bind = function () {
    var btnNum = function () {
        var btnNumsElemName = 'btn_num';
        var btnNums = document.getElementsByName(btnNumsElemName);
        var btnFuncObj;
        var srcContents;

        for(var i = btnNums.length; i--;){
            btnNums[i].onclick = function () {
                btnFuncObj = calcMain.btnFuncObj;
                if (btnFuncObj.turnOn) {
                    srcContents = '0';
                } else {
                    srcContents = calcMain.getCalcDisplay();
                }

                var contents = (srcContents == 0) ? this.value : srcContents + this.value;

                calcMain.setCalcDisplay(contents);
            };
        }
    };

    var btnFunc = function () {
        var btnFuncElemName = "btn_func";
        var btnFuncs = document.getElementsByName(btnFuncElemName);

        for(var i = btnFuncs.length; i--;){
            btnFuncs[i].onclick = function () {
                var func = this.id.replace(btnFuncElemName + '_', '');
                var contents;
                var btnFuncObj = calcMain.btnFuncObj;
                var srcContents;
                var destContents;

                switch (func){
                    case 'clear':
                        contents = '0';
                        calcMain.init.btnFuncObjInit();
                        break;
                    case 'plus':
                        // Value assigned to primitive will be lost
                        btnFuncObj.funcName = 'plus';
                        btnFuncObj.turnOn = true;
                        btnFuncObj.srcContents = calcMain.getCalcDisplay();

                        contents = calcMain.getCalcDisplay();
                        break;
                    case 'equal':
                        switch (btnFuncObj.funcName){
                            case 'plus':
                                srcContents = btnFuncObj.srcContents;
                                destContents = calcMain.getCalcDisplay();
                                contents = Number(srcContents) + Number(destContents);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        contents = calcMain.getCalcDisplay();
                }

                calcMain.setCalcDisplay(contents);
            };
        }
    };

    btnNum();
    btnFunc();
};

calcMain.getCalcDisplay = function () {
    return document.getElementById("calc_display").innerHTML;
};

calcMain.setCalcDisplay = function (contents) {
    document.getElementById("calc_display").innerHTML = contents;
};
