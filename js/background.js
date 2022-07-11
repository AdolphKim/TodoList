const img = [
    "img/back01.jpg","img/back03.jpg"
]

const backImg = document.createElement("img");
const randImg = img[Math.floor(Math.random()*img.length)];

backImg.src = randImg;
backImg.classList.add("backgroundimg")
document.body.appendChild(backImg);