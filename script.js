const toggleSwitch=document.querySelector('input[type="checkbox"]');
const textbox=document.querySelector("#text-box")
const nav=document.querySelector("#nav")
const image1=document.querySelector("#image1")
const image2=document.querySelector("#image2")
const image3=document.querySelector("#image3")
const toggleIcon=document.querySelector("#toggle-icon")
const darkMode=()=>{
    document.documentElement.setAttribute("data-theme",'dark')
    nav.style.bacgroundColor='rgba(0 0 0 / 50%)'
    textbox.style.bacgroundColor='rgba(255 255 255 / 50%)'
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    image1.src='img/undraw_proud_coder_dark.svg'
    image2.src='img/undraw_feeling_proud_dark.svg'
    image3.src='img/undraw_conceptual_idea_dark.svg'
    localStorage.setItem("theme","dark")
    toggleSwitch.checked=true
}
const lightMode=()=>{
    nav.style.bacgroundColor='rgba(255 255 255 / 50%)'
    textbox.style.bacgroundColor='rgba(0 0 0 / 50%)'
    toggleIcon.children[0].textContent='LightMode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    image1.src='img/undraw_proud_coder_light.svg'
    image2.src='img/undraw_feeling_proud_light.svg'
    image3.src='img/undraw_conceptual_idea_light.svg'
    localStorage.setItem("theme","light")
    document.documentElement.setAttribute("data-theme",'light')
    toggleSwitch.checked=false

}
const switchTheme=(event)=>{
    
    if (event.target.checked) {
        darkMode()
    }else{
        lightMode();
    }
}
const initTheme=()=>{
    const theme=localStorage.getItem("theme");
    if (theme=='dark') {
        darkMode();
    }
    if (theme=='light') {
        lightMode();
    }
}

toggleSwitch.addEventListener('change',switchTheme)
initTheme()