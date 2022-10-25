const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const list = document.querySelectorAll('.list');


let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx *510}px)`;
}

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

setInterval(carrossel, 3000);