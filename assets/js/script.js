const lampImg = document.querySelector("#lamp");
const turnOnOff = document.querySelector(".turnOnOff");

const lampIsBroken = () => {
    return lampImg.src.indexOf("broken") > -1;
}

const lampOn = () => {
    if(!lampIsBroken()) {
        lampImg.src = "./assets/img/on.png";
    }
    
}

const lampOff = () => {
    if(!lampIsBroken()) {
        lampImg.src = "./assets/img/off.png";
    }
}

const turnLamp = () => {
    if(turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
        turnOnOff.classList.remove("active");
    }else {
        lampOff();
        turnOnOff.textContent = "Ligar";
        turnOnOff.classList.add("active");
    }
}

const lampBroken = () => {
    lampImg.src = "./assets/img/broken.png";
}

turnOnOff.addEventListener("click", turnLamp)
lampImg.addEventListener("mouseenter", lampOn);
lampImg.addEventListener("mouseleave", lampOff);
lampImg.addEventListener("dblclick", lampBroken);

