function randomNumber(num){
    return randNum = Math.floor(Math.random() * num +1);
}

function randomColor(){
    const randcol = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
    return randcol;

}

const container = document.querySelectorAll(".tile");
// container.addEventListener("click", function(event){
//   event.target.style.backgroundColor= randomColor();
// })
console.log(container);
container.forEach((item) => {
    item.addEventListener("click", function(event){
       item.style.backgroundColor= randomColor();
        
})
})