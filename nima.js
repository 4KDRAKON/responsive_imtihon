const elbody = document.querySelector(".nima")
const recording = new webkitSpeechRecognition()

recording.lang = "uz-UZ"




recording.onresult =(result) =>{
    const value = result.results[0][0].transcript;



    if(value.includes = "salom"){
        elbody.classList.toggle("--nima1")
        console.log("xechnima")
    }else{
        console.log("ishlamadi");
    }
    // recording.start()
}

recording.start()