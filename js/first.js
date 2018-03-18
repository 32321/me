/**
 * Created by zlh on 2018.03.17.
 */
/* 为类名为first的div添加动画 */
var fir=document.getElementsByClassName("first")[0];
var oAbout=fir.getElementsByClassName("about-me")[0];
var oir=fir.getElementsByClassName("icon-right")[0];
var aDiv=oir.getElementsByTagName("div");
var oNav=document.getElementsByClassName("nav")[0];
var oTip=document.getElementsByClassName("tip")[0];
var oVer=document.getElementsByClassName("ver")[0];
var oSp=oir.getElementsByTagName("span")[0];

//提示这是一个导航按钮
oir.onmouseover=function () {
    oTip.style.display="block";
    oVer.style.display="block";
}
oir.onmouseout=function () {
    oTip.style.display="none";
    oVer.style.display="none";
}
//让本网站的导航显示
function oir_cli () {
    aDiv[0].style.display="none";
    aDiv[1].style.display="none";
    aDiv[2].style.display="none";
    oSp.style.display="inline-block";
    oNav.style.display="block";
    oir.onmouseover=null;
    var lis=oNav.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function () {
            this.style.fontStyle="italic";
            this.style.fontWeight="bolder";
            this.style.fontSize="20px";
        }
        lis[i].onmouseout=function () {
            this.style.fontStyle="normal";
            this.style.fontWeight="normal";
            this.style.fontSize="16px";
            oir.onmouseover=function () {
                oVer.style.display="block";
                oTip.style.display="block";
            };
        }
    }
    //再次点击导航按钮导航栏就会消失
    oir.onclick=function () {
        oNav.style.display="none";
        oir.onclick=oir_cli;
        oSp.style.display="none";
        aDiv[0].style.display="block";
        aDiv[1].style.display="block";
        aDiv[2].style.display="block";
    }
}
oir.onclick=oir_cli;
//当鼠标放在自我介绍上时的响应
oAbout.onmouseover=function () {
    oAbout.style.backgroundColor="#E8E8E8";
    oAbout.style.boxShadow="5px 5px 2px rgba(0,0,0,.5)";
    oAbout.onmousemove=function (e) {
        var x=e.clientX;
        if(x<fir.offsetWidth/2){
            oAbout.style.transform="rotateY("+(fir.offsetWidth/2-x)/50+"deg)";
        }
        if(x>oir.offsetWidth/2){
            oAbout.style.transform="rotateY("+(fir.offsetWidth/2-x)/50+"deg)";
            fir.style.perspectiveOrigin="right center";
        }
    }
}
//当鼠标离开自我介绍上时的响应
oAbout.onmouseout=function () {
    oAbout.style.backgroundColor="";
    oAbout.style.boxShadow="";
    oAbout.style.transform="rotateY(0deg)";
    fir.style.perspectiveOrigin="left center";
}
