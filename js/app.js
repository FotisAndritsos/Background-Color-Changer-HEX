const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const btn = document.querySelector('.btn');
const title = document.getElementById('title');
const body = document.querySelector('body');

btn.addEventListener('click',changeColor);

function changeColor(){
    //# and loop through the array 6 times randomly
    //save it style the background color
    //output it on the screen
    let hex = '#';

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length);
            hex += hexValues[index];
        }
        title.textContent = hex;
        body.style.backgroundColor = hex;
}