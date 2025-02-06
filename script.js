jerries = 0;

const jerry = document.getElementById('jerry');
const count = document.getElementById('jerry-count');
const music = new Audio('seinfeld-theme_1.mp3');
music.volume = 0.005;
music.loop = true;
music.play();

const sound_effect1 = new Audio('soundeffect1.mp3');
const sound_effect2 = new Audio('soundeffect2.mp3');
const sound_effect3 = new Audio('soundeffect3.mp3');
const sound_effect4 = new Audio('soundeffect4.mp3');

const sound_effects = [sound_effect1, sound_effect2, sound_effect3, sound_effect4];

jerry.addEventListener("click", function(event) {
    jerries += 1;
    count.innerText = "Jerry Count: " + jerries;
    sound_effects[Math.floor(Math.random() * sound_effects.length)].play();

    if (music.duration > 0 && !music.paused || music.paused) {
        music.play();
        music.volume = 0.005;
    }

});
/**
function createFallingJerry(x, y) {
    const clone = jerry.cloneNode(true);
    document.body.appendChild(clone);

    clone.style.position = "absolute";
    clone.style.left = x + "px";
    clone.style.top = y + "px";
    clone.style.width = jerry.offsetWidth + "px";
    clone.style.height = jerry.offsetHeight + "px";
    clone.style.pointerEvents = "none"; // Prevent clicking clones

    // Apply animation
    clone.animate([
        { transform: "scale(1)", opacity: 1, top: y + "px" },
        { transform: "scale(0.3)", opacity: 0, top: (y + 200) + "px" }
    ], {
        duration: 1000,
        easing: "ease-in"
    });

    // Remove after animation completes
    setTimeout(() => {
        clone.remove();
    }, 1000);
}
    **/
