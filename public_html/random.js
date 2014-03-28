/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var i, rand, temp, str, nums=[];
    
    for (i = 1; i < 50; i++)
    {
        nums[i] = i;
    }
    for (i = 1; i < 50; i++)
    {
        rand = Math.ceil(Math.random()*49);
        temp = nums[i];
        nums[i] = nums[rand];
    }
    str = "Your Six Lucky Numbers:<br>";
    for (i = 1; i < 7; i++)
    {
        str += nums[i];
        if (i !== 6)
        {
            str += "-";
        }
    }
    
    panel.innerHTML = str;
}

document.addEventListener("DOMContentLoaded", init,false);

