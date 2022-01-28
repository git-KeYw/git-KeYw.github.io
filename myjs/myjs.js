var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}

var full_page2 = document.getElementsByClassName("post-bg");
if (full_page2.length != 0) {
    full_page2[0].style.background = "transparent";
}



var full_page3 = document.getElementById("footer");
    full_page3.style.backgroundImage="";
    
var title1="text=KZblog又有新评论啦~！--by Valine"
var SCKEY_Server=""
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Server(){
    var text="desp=";
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data=text+"|昵称："+"|邮箱："+"|网站地址："+"|当前页面："+"|评论内容："+"|跳转链接："+"|评论时间"+"\n"+"|----|----|----|----|"+"\n"+"|   "+vnick+"   |   "+vmail+"  |  "+vlink+"|   "+res+"| "+veditor+"| "+pageurl+"|" +ptime.toLocaleString()+"|";
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://sc.ftqq.com/'+'SCT116647TOm3BrjsLYr0AmqiomA8dqc9r'+'.send', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Server;