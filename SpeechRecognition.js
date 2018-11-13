

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
			var btn_falar = $("#rect");
			

        	//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
        	recognizer.continuous = true

        	recognizer.onresult = function(event){
        		transcription.val("");
        		for (var i = event.resultIndex; i < event.results.length; i++) {
					transcription.val(event.results[i][0].transcript);        			
        		}
			}
			
			recognizer.onaudiostart  = function(){
				
				//$(this).toggleClass('pulse red');
				$('#coordenadas').text('Ouvindo...');
			}

			recognizer.onaudioend  = function(){
				//$('form').submit();
				//$(this).toggleClass('pulse red');
				$('#coordenadas').text('Aguarde...');
				setTimeout($('form').submit(), 8000);
				$('#coordenadas').text('Buscando endereço...');
			}

			

        	document.querySelector("#rect").addEventListener("click",function(){
        		try {
		            recognizer.start();
		          } catch(ex) {
		          	alert("error: " + ex.message);
		          }
			});

			// $(btn_falar).mouseup(function(){
			// 	$(this).toggleClass('pulse red');
			// });
			// $(btn_falar).mousedown(function(){
			// 	$(this).toggleClass('pulse red');
			// });
			

        }

