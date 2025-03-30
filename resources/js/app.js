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


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".tab-indicator");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Supprime la classe active de tous les onglets
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Déplace l'indicateur sous l'onglet sélectionné
            indicator.style.transform =  `translateX(${index * 100}%)`;
        });
    });
});
