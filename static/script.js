document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    let clickStage = 0;

    openBtn.addEventListener('click', function() {
        if (clickStage === 0) {
            openBtn.textContent = "Sike press me again";
            openBtn.style.position = "fixed";
            openBtn.style.bottom = "15%";
            openBtn.style.left = "70%";
            openBtn.style.transform = "translateX(-50%)";
            openBtn.style.transition = "all 0.5s cubic-bezier(.4,2,.6,1)";
            clickStage = 1;
        } else if (clickStage === 1) {
            openBtn.textContent = "You really thought lmao";
            const randTop = Math.random() * 70 + 10;
            const randLeft = Math.random() * 70 + 10; 
            openBtn.style.top = randTop + "%";
            openBtn.style.left = randLeft + "%";
            openBtn.style.bottom = "unset";
            openBtn.style.transform = "translate(-50%, -50%)";
            clickStage = 2;
        } else if (clickStage === 2) {
            openBtn.textContent = "One more time hehe";
            const randTop = Math.random() * 70 + 10;
            const randLeft = Math.random() * 70 + 10; 
            openBtn.style.top = randTop + "%";
            openBtn.style.left = randLeft + "%";
            openBtn.style.bottom = "unset";
            openBtn.style.transform = "translate(-50%, -50%)";
            clickStage = 3;
        } else if (clickStage === 3) {
            openBtn.style.display = "none"; 
            openEnvelope();
        }
    });

    function openEnvelope() {
        const envelope = document.getElementById('envelope');
        const letterContent = envelope.querySelector('.letter-content');
        envelope.classList.add('open');
        fetch('/get_letter')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    letterContent.innerHTML = data.content;
                }, 1000);
            });
    }
});