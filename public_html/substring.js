/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var dfn = "JavaScript is the original dialect of the ECMAScript standard" + 
            " language whereas JScript is the dialect developed later by Microsoft.";
    
    panel.innerHTML += dfn.slice(0, 26);
    panel.innerHTML += dfn.slice(61, 70) + "<br>";
    panel.innerHTML += dfn.split(" ", 4) + "<br>";
    panel.innerHTML += dfn.substring(79, 94);
    panel.innerHTML += dfn.substring(121, 130);
    panel.innerHTML += dfn.substr(61, 10);
}

document.addEventListener("DOMContentLoaded", init,false);

