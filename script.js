/* ======================================================
   CRÔNICA DE MARIA EDUARDA
   SCRIPT.JS
   PARTE 1
====================================================== */

const introScreen = document.getElementById("intro-screen");
const royalSeal = document.getElementById("royal-seal");

const bookWrapper = document.getElementById("book-wrapper");
const book = document.getElementById("book");

const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

const music = document.getElementById("goldenBrown");

let currentPage = 0;

/* =====================================
   INICIALIZAÇÃO
===================================== */

window.addEventListener("load", () => {

    showPage(0);

});

/* =====================================
   ABRIR LIVRO
===================================== */

function openBook() {

    introScreen.style.opacity = "0";

    setTimeout(() => {

        introScreen.style.display = "none";

        bookWrapper.classList.add("active");

    }, 1200);

    if (music) {

        music.volume = 0.35;

        music.play().catch(() => {

            console.log("Áudio aguardando interação");

        });

    }

}

/* =====================================
   EVENTO DO SELO
===================================== */

if (royalSeal) {

    royalSeal.addEventListener("click", openBook);

}

/* =====================================
   MOSTRAR PÁGINA
===================================== */

function showPage(index) {

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    updateButtons();

}

/* =====================================
   BOTÕES
===================================== */

function updateButtons() {

    if (currentPage === 0) {

        prevBtn.style.opacity = ".4";

    } else {

        prevBtn.style.opacity = "1";

    }

    if (currentPage >= pages.length - 1) {

        nextBtn.style.opacity = ".4";

    } else {

        nextBtn.style.opacity = "1";

    }

}

/* =====================================
   PRÓXIMA PÁGINA
===================================== */

function nextPage() {

    if (currentPage >= pages.length - 1) return;

    currentPage++;

    showPage(currentPage);

}

/* =====================================
   PÁGINA ANTERIOR
===================================== */

function previousPage() {

    if (currentPage <= 0) return;

    currentPage--;

    showPage(currentPage);

}

/* =====================================
   BOTÕES
===================================== */

if (nextBtn) {

    nextBtn.addEventListener("click", nextPage);

}

if (prevBtn) {

    prevBtn.addEventListener("click", previousPage);

}

/* =====================================
   TECLADO
===================================== */

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {

        nextPage();

    }

    if (e.key === "ArrowLeft") {

        previousPage();

    }

});

/* =====================================
   SWIPE MOBILE
===================================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", e => {

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", e => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe() {

    const distance = touchEndX - touchStartX;

    if (distance > 80) {

        previousPage();

    }

    if (distance < -80) {

        nextPage();

    }

}

console.log("Crônica de Maria Eduarda iniciada");
