// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize your application here.
            } else {
                // TODO: This application was suspended and then terminated.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
            }
            args.setPromise(WinJS.UI.processAll().
                    then(function () {

                        //计算事件绑定
                        document.querySelector("#runCalculate").addEventListener("click", hddo);

                        //按下回车开始计算
                        document.onkeydown = function (event) {
                            var e = event || window.event || arguments.callee.caller.arguments[0];
                            if (e && e.keyCode == 13) { // enter 键
                                var resultData = calculate(chang.value, kuan.value, gao.value, diShaHouDu.value, diShaLeiXing.value, yuGangHengWen.value, shiNeiWenDu.value, yuGangGai.winControl.checked);
                                ouptutResultData(resultData);
                            }
                        };

                        //结果动画
                        var runAnimation = document.getElementById("runCalculate");
                        runAnimation.addEventListener("click", runEnterPageAnimation, false);

                        //注册打印事件
                        //registerForPrintContract();

                        //全球化
                        var topUserLanguage = Windows.System.UserProfile.GlobalizationPreferences.languages[0];
                        var userLanguage = new Windows.Globalization.Language(topUserLanguage);
                    })
                );
        }
    };

    function hddo() {

        var resultData = calculate(chang.value, kuan.value, gao.value, diShaHouDu.value, diShaLeiXing.value, yuGangHengWen.value, shiNeiWenDu.value, yuGangGai.winControl.checked);
        ouptutResultData(resultData);
    }

    function ouptutResultData(resultData) {
        document.getElementById("shuiTiRongLiang").innerHTML = resultData["shuiTiRongLiang"];
        document.getElementById("diShaRongLiang").innerHTML = resultData["diShaRongLiang"];
        document.getElementById("shuiTiZhongLiang").innerHTML = resultData["shuiTiZhongLiang"];
        document.getElementById("diShaZhongLiang").innerHTML = resultData["diShaZhongLiang"];
        document.getElementById("yuGangZhongLiang").innerHTML = resultData["yuGangZhongLiang"];
        document.getElementById("zongZhongLiang").innerHTML = resultData["zongZhongLiang"];

        document.getElementById("jiaReBangGongLv").innerHTML = resultData["jiaReBangGongLv"];
        document.getElementById("jiaReBangWaShu").innerHTML = resultData["jiaReBangWaShu"];

        document.getElementById("dengGuanGongLvCong").innerHTML = resultData["dengGuanGongLvCong"];
        document.getElementById("dengGuanGongLvZhi").innerHTML = resultData["dengGuanGongLvZhi"];
        document.getElementById("zuiJiaZhaoMingGongLv").innerHTML = resultData["zuiJiaZhaoMingGongLv"];

        document.getElementById("guoLvCong").innerHTML = resultData["guoLvCong"];
        document.getElementById("guoLvZhi").innerHTML = resultData["guoLvZhi"];
        document.getElementById("guoLvChao").innerHTML = resultData["guoLvChao"];

        document.getElementById("siYangTiShi0").innerHTML = resultData["siYangTiShi0"];
        document.getElementById("siYangTiShi1").innerHTML = resultData["siYangTiShi1"];

        document.getElementById("aquariumExperts").innerHTML = resultData["aquariumExperts"];
    }


    function runEnterPageAnimation() {
        var enterPage;
        var output = document.getElementById("output");
        // Animate the whole page together
        enterPage = WinJS.UI.Animation.enterPage(output, null);
    }

    //print
    //function registerForPrintContract() {
    //    var printManager = Windows.Graphics.Printing.PrintManager.getForCurrentView();
    //    printManager.onprinttaskrequested = onPrintTaskRequested;
    //}

    //var gHtmlPrintDocumentSource = null;

    //function onPrintTaskRequested(printEvent) {
    //    var printTask = printEvent.request.createPrintTask("Print Sample", function (args) {
    //        args.setSource(gHtmlPrintDocumentSource);
    //        // Register the handler for print task completion event
    //        printTask.oncompleted = onPrintTaskCompleted;
    //    });
    //}
    //print

    WinJS.Namespace.define("Sample", {
        calculateCommand: WinJS.UI.eventHandler(function (ev) {
            var command = ev.currentTarget;
            if (command.winControl) {
                document.getElementById("runCalculate").click();

                document.getElementById("aquariumcalculator-result").style.zIndex = "150";
            }
        }),


        backCommand: WinJS.UI.eventHandler(function (ev) {
            var command = ev.currentTarget;
            if (command.winControl) {
                document.getElementById("aquariumcalculator-result").style.zIndex = "50";
            }
        }),

        //downloadCommand: WinJS.UI.eventHandler(function (ev) {
        //    var command = ev.currentTarget;
        //    if (command.winControl) {
        //        window.open("http://www.windowsphone.com/zh-cn/store/app/鱼缸通用计算器/dfd55461-6c9a-415e-a1a2-c62196ea07f7");
        //    }
        //}),

        //outputCommand: WinJS.UI.eventHandler(function (ev) {
        //    //var status = document.querySelector(".status");
        //    var command = ev.currentTarget;
        //    if (command.winControl) {
        //        window.open("http://weibo.com/jefw");
        //        //var label = command.winControl.label || command.winControl.icon || "button";
        //        //var section = command.winControl.section || "";
        //        //var msg = section + " command " + label + " was pressed";
        //        //status.textContent = msg;
        //    }
        //}),
        mailComand: WinJS.UI.eventHandler(function (ev) {
            var command = ev.currentTarget;
            if (command.winControl) {
                window.location.href("mailto:jzfwlj@qq.com");

            }
        }),
        //shareCommand: WinJS.UI.eventHandler(function (ev) {
        //    var command = ev.currentTarget;
        //    if (command.winControl) {
        //        window.external.addFavorite(window.location.href, '鱼缸计算器的好选择');
        //    }
        //}),

        //printCommand: WinJS.UI.eventHandler(function (ev) {
        //    var command = ev.currentTarget;
        //    if (command.winControl) {
        //        MSApp.getHtmlPrintDocumentSourceAsync(document.getElementById("output").innerHTML).then(function (htmlPrintDocumentSource) {
        //            gHtmlPrintDocumentSource = htmlPrintDocumentSource;

        //            // If the print contract is registered, the print experience is invoked.
        //            Windows.Graphics.Printing.PrintManager.showPrintUIAsync();
        //        });
        //    }
 
            
        //})
    });



    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };

    app.start();
})();
