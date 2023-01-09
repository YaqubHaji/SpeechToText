var speechText = document.getElementById("speech")

function speechToText(start) {
    if('webkitSpeechRecognition' in window) {
        var speech  = new webkitSpeechRecognition();
            speech.continuous = true;
            speech.interimResults = true;
            speech.lang = 'en-GB';
        speech.start();
        //if the microphone is turned on
        if(start === true) {
            
            var finalScript = '';

            speech.onresult = function(script) {
                var interimScripts = '';

                for(var i = script.resultIndex; i < script.results.length; i++){
                    var transcript = script.results[i][0].transcript;
                    transcript.replace("\n", "<br>") //makes a new line
                    if(script.results[i].isFinal){
                        finalScript += transcript;
                    }
                    else{
                        interimScripts += transcript;
                    }
                }
                speechText.innerHTML = finalScript + '<span style="color: #999">' + interimScripts + '</span>'; //interim scripts are grey 
            }
        }
        else {
            speech.stop(); //microphone is turned off
        }
    }
}

function getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var result;
    if(day == 1){
        result = days[today.getDay()] + " the " + day + "st" + " of " + months[today.getMonth()];
    }
    else if(day == 2){
        result = days[today.getDay()] + " the " + day + "nd" + " of " + months[today.getMonth()];
    }
    else if(day == 3){
        result = days[today.getDay()] + " the " + day + "rd" + " of " + months[today.getMonth()];
    }
    else{
        result = days[today.getDay()] + " the " + day + "th" + " of " + months[today.getMonth()];
    }
    document.getElementById("date").innerHTML = result;
}
