document.addEventListener('DOMContentLoaded', function () {
    let audio = document.getElementById('click-sound');
    let image = document.querySelector('.donut');

    audio.addEventListener('canplaythrough', function () {
        document.querySelector('.container').style.visibility = 'visible';
    });

    image.addEventListener('load', function () {
        document.body.style.background = 'linear-gradient(135deg, #ff3b3b, #ffd966, #f1c232, #cc0000, #990000)';
    });
    // Force image load (useful if image is cached)
    if (image.complete) {
        image.dispatchEvent(new Event('load'));
    }
    image.addEventListener('click', () => {
        audio.play()
    })
    audio.load();
});
