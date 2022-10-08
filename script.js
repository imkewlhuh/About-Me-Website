const sbtn = document.getElementById("sbtn");
function admireBeauty() {
     document.getElementById('beauty').style.display = "inline-block";

    document.getElementById('sbtn').style.display = "none";
}
const btn = document.getElementById("btn");
function enter() {
    alert("Hello, welcome to my website!\nPlease navigate the pages in order from left to right.\nThese are the actual rooms in my home, but with a slight twist.")
}
btn.addEventListener("click", enter);