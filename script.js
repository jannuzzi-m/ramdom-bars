const container = document.getElementById("container");
const modal = document.getElementById("modal");
const form = document.getElementById("start-form");
const barCountInput = document.getElementById("bar-count");

const barsList = [];
const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;
    
const colors = ["red", "green", "yellow", "purple", "aqua", "gray", "silver", "pink"]

const setBars = (params) => {
    const barWidth = `${Math.ceil(innerWidth / (params))}px`
    for (let i = 0; i < params; i++) {
        const newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.width = barWidth;
        newBar.style.backgroundColor = colors[getRandomIndex(colors)];
        container.appendChild(newBar)
        barsList.push({
            bar: newBar,
            height: 0
        })
    }
    const loop = setInterval(() => {
        const height = increaseBar(barsList[getRandomIndex(barsList)]);
        if(height >= innerHeight){
            clearInterval(loop)
        }
    }, 10)
}

const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length);
}

const increaseBar = (params) => {
    params.height += 5;
    params.bar.style.height = `${params.height}px`
    return params.height;
}

form.addEventListener("submit", e => {
    e.preventDefault()
    modal.style.display = "none";
    setBars(barCountInput.value)
})


