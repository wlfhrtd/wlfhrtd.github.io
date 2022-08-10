const images = [
    document.getElementById("bios"),
    document.getElementById("post"),
    document.getElementById("select_os"),
    document.getElementById("load_win"),
    document.getElementById("welcome"),
];

const timers = [2000, 3000, 30, 3500, 2500];

function changeImage($currentImage, $nextImage) {
    $currentImage.classList.remove("active");
    $currentImage.classList.add("pending");
    $nextImage.classList.remove("pending");
    $nextImage.classList.add("active");
}

function selectOsFragment() {
    let choiceMade = false;
    const $choice1 = document.getElementById("partition1");
    const $choice2 = document.getElementById("partition2");
    const choiceClass = "chosen";

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") choiceMade = true;

        if (e.key === "ArrowUp" || e.key === "ArrowDown"
            || e.key === "8" || e.key === "2") {
            if (!$choice2.classList.contains(choiceClass)) {
                $choice2.classList.add(choiceClass);
                $choice1.classList.remove(choiceClass);
            } else {
                $choice2.classList.remove(choiceClass);
                $choice1.classList.add(choiceClass);
            }
        }
    });

    let seconds = timers[2];
    const $timer = document.getElementById("timer");
    let interval;
    interval = setInterval(function () {
        if (seconds <= 0 || choiceMade) {
            clearInterval(interval);
            FinishFragment($choice1, choiceClass);
        }
        $timer.innerHTML = seconds.toString();
        seconds--;
    }, 1000);
}

function redirectToDesktop() {
    window.location.replace("jqueryDesktop/");
}

function redirectToTerminal() {
    window.location.replace("terminal/");
}

function showWelcome() {
    changeImage(images[3], images[4]);
    setTimeout(redirectToDesktop, timers[4]);
}

function FinishFragment($choice1, choiceClass) {
    changeImage(images[2], images[3]);

    if ($choice1.classList.contains(choiceClass)) {
        setTimeout(showWelcome, timers[3]);
    } else {
        setTimeout(redirectToTerminal, timers[3]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(changeImage, timers[0], images[0], images[1]);
    setTimeout(changeImage, timers[1], images[1], images[2]);
    setTimeout(selectOsFragment, timers[1]);
});
