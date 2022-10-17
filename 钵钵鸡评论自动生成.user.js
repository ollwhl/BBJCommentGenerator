// ==UserScript==
// @name         钵钵鸡评论自动生成
// @namespace    钵钵鸡评论自动生成
// @version      0.1
// @description  自动生成钵钵鸡评论!
// @author       ollwhl
// @match        https://space.bilibili.com/*
// @match        https://www.bilibili.com/read/*
// @match        https://www.bilibili.com/video/*
// @match        https://t.bilibili.com/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js
// ==/UserScript==
//接下来会加入检测动态中的钵字才会生成按钮
(function() {
    'use strict';
 //原生js
 /*var int = self.setInterval(function(){
        var commentBtn=document.getElementsByClassName("ipt-txt")
            if (commentBtn.length!=0){
                console.log("comment element get"+commentBtn.length);
                for (let i = 0; i < commentBtn.length; i++) {
                    commentBtn[i].addEventListener("click",addButton());
                    console.log("lisetner added");
                }
                clearInterval(int);
            }else{
                console.log("no comment element");
            }
    }, 5000);*/
    listenKey(".ipt-txt",addButton);
    function addButton(element){
        let abbjaBtn = $(`<a id="boComment">生成钵钵鸡评论</a>`)
        let fbBtn
        abbjabtn.css({
            "display": "inline-block",
            "background-color": "#9a4ef1",
            "cursor": "pointer",
            "user-select": "none",
            "min-width": "74px",
            "height": "28px",
            "border-radius": "16px",
            "color": "#fff",
            "font-size": "14px",
            "line-height": "28px",
            "text-align": "center",
            "padding": "0px 10px",
            "margin-left": "16px"
        })
        abbjabtn.on('click', function() {
            const a="啊";
            const bo="钵钵鸡";
            const randomNum=Math.random()*10;
            var str="";
            for (let index = 0; index < randomNum; index++) {
                str=str.concat(a);
            }
            str=str.concat(bo);
            for (let index = 0; index < randomNum; index++) {
                str=str.concat(a);
            }
            $(this).prev().text(str);
        })
        element.after(abbjabtn)
    }

        function listenKey(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
        var targetNodes, btargetsFound;

        if (typeof iframeSelector == "undefined")
            targetNodes = $(selectorTxt);
        else
            targetNodes = $(iframeSelector).contents ()
                .find (selectorTxt);

        if (targetNodes && targetNodes.length > 0) {
            btargetsFound = true;
            targetNodes.each ( function () {
                var jThis  = $(this);
                var alreadyFound = jThis.data ('alreadyFound')  ||  false;

                if (!alreadyFound) {
                    //--- Call the payload function.
                    var cancelFound = actionFunction (jThis);
                    if (cancelFound) btargetsFound = false;
                    else jThis.data ('alreadyFound', true);
                }
            } );
        } else {
            btargetsFound = false;
        }

        var controlObj = listenKey.controlObj  ||  {};
        var controlKey = selectorTxt.replace (/[^\w]/g, "_");
        var timeControl = controlObj [controlKey];

        //--- Now set or clear the timer as appropriate.
        if (btargetsFound && bWaitOnce && timeControl) {
            clearInterval (timeControl);
            delete controlObj [controlKey]
        } else {
            if ( ! timeControl) {
                timeControl = setInterval ( function () {
                    listenKey(selectorTxt,actionFunction,bWaitOnce,iframeSelector);
                }, 300);
                controlObj [controlKey] = timeControl;
            }
        }
        listenKey.controlObj = controlObj;
    }

    // Your code here...
})();