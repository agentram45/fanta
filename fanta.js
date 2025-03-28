// window.addEventListener("scroll", () => {
//     // let scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     // let scrolled = window.scrollY;
//     // console.log(document.documentElement.scrollHeight); //total height of the window
//     // console.log(window.innerHeight); //height of 100vh of the window
//     // console.log(parseInt(window.scrollY));//dynamically logs out the value, how much you scrolled
//     // console.log(scrollable);

//     // if(parseInt(scrollable) === parseInt(scrolled)) {
//     //     alert("You've reached end of the page");
//     // }
//     // console.log(document.documentElement.scrollTop);
//     //clientheight is like innerheight
//     let percent = (parseInt(window.scrollY) / parseInt(document.documentElement.clientHeight)) * 100;
//     console.log(parseInt(percent));
// })

let fanta = document.getElementById("fanta-logo");

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    while(scrolled === 100) {
        fanta.style.transform = `translate(calc(${-(scrolled)/10}px - 380px), ${scrolled}px)`
    }
})