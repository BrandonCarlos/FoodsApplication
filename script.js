const icons = document.querySelectorAll(".section-1-icons i")

let i = 1;

setInterval(() => {
    i++; //This is 1 till

    const icon = document.querySelector(".section-1-icons .change")

    icon.classList.remove("change");

    if(i > icons.length) {//For example if I have 3 items and i has 4, then came for the loop
        icons[0].classList.add("change");//then return to icons[0] and put "change" class
        i = 1; //and i has been declared like 1 again
    } else {//if i = 1 and icons length has 3 till we need to put "change" class in the next sibling class icon
        icon.nextElementSibling.classList.add("change");
    }


}, 4000)