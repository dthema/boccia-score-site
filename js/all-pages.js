document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.href;
    let menuLinks = document.querySelectorAll(".inline-menu__link");

    menuLinks.forEach(function (link) {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("current");
        }
    });


});

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        let startTime = performance.now();

        window.addEventListener("load", function() {
            let endTime = performance.now();
            let loadTime = endTime - startTime;

            let footer = document.querySelector(".footer");
            let loadInfo = document.createElement("p");
            loadInfo.textContent = "Время загрузки страницы: " + loadTime.toFixed(2) + " мс";
            loadInfo.classList.add("page-load-info");
            footer.appendChild(loadInfo);
        });
    });
})();
