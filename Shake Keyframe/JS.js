window.onload = function () {
    var div = document.getElementById('preload');
    preload(div, 50);   
};

function preload(el, interval) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            el.style.display = 'none';
            el.className = '';
        }
        el.style.opacity = op;
        op -= op * 0.1;
    }, interval);
};