is_overlapping = false;
jerries = 0;

const jerry = document.getElementById('jerry');
const count = document.getElementById('jerry-count');
const music = new Audio('seinfeld-theme_1.mp3');
music.volume = 0.05;
music.loop = true;
music.play();

const sound_effect1 = new Audio('soundeffect1.mp3')
const sound_effect2 = new Audio('soundeffect2.mp3')
const sound_effect3 = new Audio('soundeffect3.mp3')
const sound_effect4 = new Audio('soundeffect4.mp3')

const sound_effects = [sound_effect1, sound_effect2, sound_effect3, sound_effect4]

jerry.addEventListener("click", function() {
    jerries += 1;
    count.innerText = "Jerry Count: " + jerries;
    sound_effects[Math.floor(Math.random() * sound_effects.length)].play();
    if (music.duration > 0 && !music.paused || music.paused) {
        music.play();
    }
});

