function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function mudarCor(color){
    const extras = document.querySelector('.extras');
    extras.style.background = color;
    const btn = document.querySelector('.btn');
    btn.style.background = color;
    const destaque = document.querySelector('.destaque');
    destaque.style.color = color;
}