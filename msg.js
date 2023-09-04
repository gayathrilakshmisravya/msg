const ip_text=document.getElementById("msg-ip");
function getmsg(){
    document.getElementById("msg-op").innerHTML=ip_text.value;
    ip_text.value="";
}