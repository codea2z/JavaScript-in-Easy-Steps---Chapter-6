/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var rad = 4;
    
    var area = Math.PI * (rad * rad);
    var circ = 2 * (Math.PI * rad);
    
    panel.innerHTML = "Circle Radius: " + rad + " feet";
    panel.innerHTML += "<br>Area: " + area + " square feet";
    panel.innerHTML += "<br>Circumference: " + circ + " feet";
}

document.addEventListener("DOMContentLoaded", init,false);

