//Accessing the elements
const generate = document.getElementById('btn')
const colorbox = document.getElementById('color')
const hexcode = document.getElementById('displaycode')
//hex code generator
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)

}
generate.addEventListener('click',(e)=>{
    console.log(e)
    let randomColor = '#'
    for (let number = 0 ; number<6 ; number++){
        randomColor += hex[getRandomNumber()]
    }
    colorbox.style.backgroundColor = randomColor;
    hexcode.textContent = randomColor;
    
})