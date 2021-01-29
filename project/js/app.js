$(".show-side-btn").click(function () {
    $(".sidebar").animate({ marginLeft: 0 })
});

$(".hide-btn").click(function () {
    $(".sidebar").animate({marginLeft: "-100%"})
});

function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    }, 500);
};

$(function () {
    $('[data-toggle="popover"]').popover()
});

// ========= Full Screen Button ==========
let maxi = document.getElementById('btn-maxi');
let mini = document.getElementById('btn-mini');
let card = document.getElementById('table-card');

maxi.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('full-scr-btn');
    maxi.classList.add('d-none')
    mini.classList.add('d-inline-block');
});

mini.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.remove('full-scr-btn');
    mini.classList.remove('d-inline-block');
    maxi.classList.remove('d-none');
});