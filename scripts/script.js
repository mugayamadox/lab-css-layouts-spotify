

window.onload=function(){
    const button = document.getElementById("toggler");
    button.addEventListener("click",toggleMenu);
    //fetch menu state
    const menu  = document.getElementById("mobile_menu");
    let state = menu.className;
    function toggleMenu(){
        switch(state){
            case "on":
                //turn menu off
                menu.classList.remove("on");
                menu.classList.add("off");
                state = "off"
            break;
            case "off":
                //turn menu on
                //turn menu off
                menu.classList.remove("off");
                menu.classList.add("on");
                state = "on"
            break;
        }
    }
    
}


