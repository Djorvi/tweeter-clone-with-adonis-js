document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', () => {
        alert('Action en cours de développement !');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll("video");

    window.addEventListener("scroll", function () {
        videos.forEach(video => {
            let rect = video.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                video.pause();
            }
        });
    });
});