const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const openBtn = document.getElementById("openInvitation");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    music.play();

    cover.style.opacity = "0";

    setTimeout(() => {
        cover.style.display = "none";
        invitation.style.display = "block";
        observeSections();
    }, 800);

});

function observeSections(){

    const sections = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }

        });

    });

    sections.forEach(section => observer.observe(section));

}

const weddingDate = new Date("2026-09-25T15:30:00");

function updateCountdown(){

    const now = new Date();

    const diff = weddingDate - now;

    const msg = document.getElementById("specialMessage");

    if(diff > 0){

        const days = Math.floor(diff/(1000*60*60*24));

        const hours =
        Math.floor((diff%(1000*60*60*24))/(1000*60*60));

        const minutes =
        Math.floor((diff%(1000*60*60))/(1000*60));

        const seconds =
        Math.floor((diff%(1000*60))/1000);

        document.getElementById("days").textContent=days;
        document.getElementById("hours").textContent=hours;
        document.getElementById("minutes").textContent=minutes;
        document.getElementById("seconds").textContent=seconds;

    }else{

        const daysPassed =
        Math.floor(Math.abs(diff)/(1000*60*60*24));

        document.getElementById("days").textContent="00";
        document.getElementById("hours").textContent="00";
        document.getElementById("minutes").textContent="00";
        document.getElementById("seconds").textContent="00";

        if(daysPassed === 0){
            msg.innerHTML =
            "❤️ Hoy celebramos nuestro gran día ❤️";
        }else{
            msg.innerHTML =
            `❤️ Han pasado ${daysPassed} días desde nuestro gran día ❤️`;
        }
    }

}

setInterval(updateCountdown,1000);
updateCountdown();
