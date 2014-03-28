/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var sq = Math.pow(5, 2);
    var cb = Math.pow(4, 3);
    
    panel.innerHTML = "Largest positive: " + Math.max(sq, cb);
    panel.innerHTML += "<br>Smallest positive: " + Math.min(sq, cb);
    panel.innerHTML += "<br>Largest negative: " + Math.max(-5, -4.75);
}

document.addEventListener("DOMContentLoaded", init,false);

