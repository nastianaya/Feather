const reviewBlocks = document.querySelectorAll('.reviews-card');


const color = [
    {
        bColor: "#E9672B",
        sColor: "#CBC6F4",
    },
    {
        bColor: "#225DCA",
        sColor: "#E7CB43",
    },
    {
        bColor: "#242947",
        sColor: "#A2D4C5",
    },
];

for (let i=0; i<reviewBlocks.length; i++){
    reviewBlocks[i].setAttribute("style", `--b-color:${color[i].bColor}; --s-color:${color[i].sColor}`)
    
    const stars = reviewBlocks[i].querySelector('.stars')
    for(let j=0; j<5; j++){
        stars.innerHTML += createSVGStar(color[i].sColor)
    }
}

function createSVGStar(color) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
        <path d="M12.198 0L15.568 7.437L23.8 8.292L17.651 13.742L19.368 21.708L12.198 17.64L5.028 21.708L6.746 13.743L0.597 8.292L8.828 7.437L12.198 0Z" fill=${color} />
    </svg>
    `
}


const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const reviews = document.querySelector('.reviews-blocks');
let position = 0;

arrowLeft.addEventListener('click', ()=>{
        if (position > -400 * (reviewBlocks.length - 1)){
        position -= 400;
        reviews.style.left = position + "px";
        }

})

arrowRight.addEventListener('click', ()=>{
       if (position < 0){
            position += 400;
            reviews.style.left = position + "px";   
        }

})

const start = document.querySelector('.get-started');
const floydFurnitur = document.querySelector('.floyd-furniture')

start.addEventListener ('click', ()=> {
    floydFurnitur.scrollIntoView({behavior: "smooth"});
})
