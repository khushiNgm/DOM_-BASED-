let value =document.querySelector("h2");
let addVal=document.querySelector("#add");
let removeVal=document.querySelector("#remove");


addVal.addEventListener("click", function (){
    value.innerHTML="Friends";
    value.style.color ="green";
});

removeVal.addEventListener("click", function (){
    value.innerHTML="Stranger";
   value.style.color='#840000';
});

