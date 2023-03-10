"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Bajo"] = 1] = "Bajo";
        AudioLevel[AudioLevel["Medio"] = 2] = "Medio";
        AudioLevel[AudioLevel["Alta"] = 10] = "Alta";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel.Bajo);
    let currentAudio = AudioLevel.Medio;
    console.log(currentAudio);
})();
