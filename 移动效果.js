function moveMessage(elem, final_x, final_y, interval) {
    var repeat = moveMessage(elem, final_x, final_y, interval);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x & ypos == final_y) {
        return true;
    }
    if(xpos < 200) {
        xpos++;
    }
    if(xpos > 200) {
        xpos--;
    }
    if(ypos < 100) {
        ypos++;
    }
    if(ypos > 100) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout(repeat(), 10); //循环
}

