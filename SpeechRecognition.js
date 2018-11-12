

      // Test browser support
      window.SpeechRecognition = window.SpeechRecognition       ||
                                 window.webkitSpeechRecognition ||
                                 null;
 
		//caso não suporte esta API DE VOZ                              
		if (window.SpeechRecognition === null) {
	    	document.getElementById('unsupported').classList.remove('hidden');
        }else {
            var recognizer = new window.SpeechRecognition();
            var transcription = $("#endereco");

        	//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
        	recognizer.continuous = true

        	recognizer.onresult = function(event){
        		transcription.val("");
        		for (var i = event.resultIndex; i < event.results.length; i++) {
					transcription.val(event.results[i][0].transcript);
        			// if(event.results[i].isFinal){
        			// }else{
		            // 	transcription.textContent += event.results[i][0].transcript;
        			// }
        		}
        	}

        	document.querySelector("#rect").addEventListener("click",function(){
        		try {
		            recognizer.start();
		          } catch(ex) {
		          	alert("error: " + ex.message);
		          }
        	});
        }

