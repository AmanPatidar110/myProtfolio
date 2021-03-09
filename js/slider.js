const slides = document.getElementsByClassName('slide');
const indicators = document.querySelector('.indicator').children;
let count = 0;


const displaySlide = () => {
    for(let element of slides){
        element.style.display = "none";
    };
    for(let ind of indicators){
        ind.classList.remove("activeIndicator");
    };
    
    if(count >= slides.length) count = 0
    if(count < 0) count = slides.length - 1;

    indicators[count].classList.add("activeIndicator");
    slides[count].style.display = "flex";
}

displaySlide();

const next = () => {
    if(count < 0) {
        count = 0;
    } else {
        slides[count].classList.add("slideAway");
        setTimeout(() => {
            slides[count].classList.remove("slideAway");
            count++;
            displaySlide();
        }, 500); 
    }
}

let timer = setInterval(next, 5000);

const changeCount = (newCount) => {
    clearInterval(timer);
    count = newCount;
    displaySlide();
    timer = setInterval(next, 5000);
}




