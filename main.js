window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 0)
})


// show/hide navbar
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})

// close nav bar
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)


// close and open services desc
const buy__house = document.querySelectorAll('.how');

buy__house.forEach(how => {
        how.addEventListener('click', () => { 
            how.classList.toggle('open');

    // change icon
    const icon = how.querySelector('.how__icon i');
    if(icon.className === 'uil uil-angle-down') {
        icon.className = "uil uil-angle-up";
    }    else {
            icon.className = "uil uil-angle-down";
        }
    })
})



// search items js
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product__list")
    const property = document.querySelectorAll(".each__property")
    const pname = storeitems.getElementsByTagName("h3")

    for (var i = 0; i < pname.length; i++) { 
        let match = property[i].getElementsByTagName('h3')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) { property[i].style.display = "";
            } 
                else {
                    property[i].style.display = "none";
                }
            }
    }
}