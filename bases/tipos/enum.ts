
(() => {

    enum AudioLevel {
        Bajo = 1,
        Medio,
        Alta = 10,
    }
    console.log(AudioLevel.Bajo)
    let currentAudio: AudioLevel = AudioLevel.Medio
    console.log(currentAudio)
})()