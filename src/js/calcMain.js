var calcMain = {};

calcMain.init = function () {
    calcMain.bind();
};

calcMain.bind = function () {
    var btnNum = function () {
        var btnNumsElemName = 'btn_num';
        var btnNums = document.getElementsByName(btnNumsElemName);

        for(var i = btnNums.length; i--;){
            btnNums[i].onclick = function () {
                var srcContents = calcMain.getCalcDisplay();
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

                switch (func){
                    case 'clear':
                        contents = '0';
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
