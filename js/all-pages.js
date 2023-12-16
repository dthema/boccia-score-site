document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.href;
    let menuLinks = document.querySelectorAll(".inline-menu__link");

    menuLinks.forEach(function (link) {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("current");
        }
    });

    let isListen = false;
    let annyangScript = document.createElement('script');
    annyangScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js';
    document.body.appendChild(annyangScript);

    annyangScript.onload = function() {
        let speechkittScript = document.createElement('script');
        speechkittScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js';
        document.body.appendChild(speechkittScript);

        speechkittScript.onload = function() {
            initializeAnnyang();
        };
    };

    function initializeAnnyang() {
        if (annyang) {
            annyang.setLanguage('ru');

            annyang.addCommands({
                "открой главную": () => navigateTo("index.html"),
                "открой текущие игры": () => navigateTo("games.html"),
                "открой соревнования": () => navigateTo("competitions.html"),
                "открой рейтинг": () => navigateTo("ranking.html"),
            });

            SpeechKITT.annyang();
            SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
            SpeechKITT.vroom();

            console.log('Annyang is ready!');
        } else {
            console.error('Annyang not available.');
        }
    }

    function navigateTo(url) {
        window.location.href = url;
    }

    function handleKeyPress(event) {
        // Проверка, что нажата именно клавиша 'L'
        if (event.key === 'L' || event.key === 'l') {
            if (isListen) {
                annyang.abort();
            } else {
                annyang.start();
            }
            isListen = !isListen;
        }
    }

    document.addEventListener('keydown', handleKeyPress);
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