const list = document.getElementById("list");
const icon = document.getElementById("icon");
let boo = true;
icon.addEventListener("click", function(){
    if (boo) {
        list.style.display="block";
    }else{
        list.style.display="none";
    }
    boo = !boo;
})