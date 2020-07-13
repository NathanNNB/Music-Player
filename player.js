window.player = {

    cover : document.querySelector(".card-image"),
    title : document.querySelector(".card-content h5"),
    artist:  document.querySelector(".artist"),
    audio : document.querySelector("audio"),
    audioData: audios,
    currentAudio:{},
    currentPlaying: 0,
    start(){
        this.update();

        this.audio.onended = () => this.next();
    },

    next(){
        this.currentPlaying++;
        if(this.currentPlaying == this.audioData.length){
            this.restart();
        }
        this.update();
        this.audio.play();
    },

    update(){

        this.currentAudio = this.audioData[this.currentPlaying];
        this.cover.style.background = `url('${path(player.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerText = player.currentAudio.title;
        this.artist.innerHTML =  player.currentAudio.artist;
        this.audio.src = path(player.currentAudio.file);

    },
    
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};

