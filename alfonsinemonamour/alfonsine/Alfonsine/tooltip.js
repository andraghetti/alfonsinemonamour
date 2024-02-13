/*script per i tooltip*/

window.onload=enableTooltips;

function enableTooltips(){
var links=document.getElementsByTagName("a");
for(i=0;i<links.length;i++){
    t=links[i].getAttribute("title");
    if(t!=""){
        links[i].removeAttribute("title");
        links[i].style.position="relative";
        tooltip=document.createElement("div");
        tooltip.className="tooltip";
        tooltip.style.display="none";
        tooltip.appendChild(document.createTextNode(t));
        links[i].appendChild(tooltip);
        links[i].onmouseover=showTooltip;
        links[i].onmouseout=hideTooltip;
        }
    }
}

function showTooltip(event){
    this.style.zIndex="15";
    this.getElementsByTagName("div")[0].style.display="block";
    }

function hideTooltip(event){
    this.style.zIndex="24";
    this.getElementsByTagName("div")[0].style.display="none";
    }