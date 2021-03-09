let burger = document.getElementsByClassName("menu-burger");
let items = document.getElementsByClassName("menu-items");
let bg = document.getElementsByClassName("menu-bg");
let toEvent = [burger[0],items[0]];
let toToggle = [items[0],burger[0],bg[0]];
const menuClick = () =>{
    toToggle.forEach(
        (value) =>{
            value.classList.toggle('fs');
        }
    );
    (burger[0].textContent==="☰" ? burger[0].innerHTML="✕" : burger[0].innerHTML="☰");
}
toEvent.forEach(
    (value)=>{
        value.addEventListener("click",menuClick);
    }
);