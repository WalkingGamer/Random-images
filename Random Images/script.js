const container = document.querySelector('.container');
const picSumUrl = "https://picsum.photos/";
const rows = 5;
const reloadBtn = document.querySelector('.reload');

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

function generateImg() {
    for(let i= 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${picSumUrl}${getRandomSize()}`;
        container.appendChild(img);
    }
};
function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`;
};
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
};

generateImg()