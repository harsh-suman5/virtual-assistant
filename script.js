const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-IN';  
let indianEnglishVoice, hindiVoice;


function setVoices() {
    const voices = window.speechSynthesis.getVoices();

   
    indianEnglishVoice = voices.find(voice =>
        voice.lang === 'en-IN' && (voice.name.includes('Female') || voice.name.includes('Google IN English Female'))
    );

   
}


function startListening() {
    document.getElementById('output').innerHTML = "Listening...";
    recognition.start();
}


recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById('transcript').innerHTML = "You said: " + transcript;

    
    let isHindi = transcript.match(/[अ-ह]/); 





    
    if (transcript.includes("youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com", isHindi);
    }
    else if(transcript.includes("open incognito")) {
        speak("To open incognito mode, please use the keyboard shortcut. Press Ctrl + Shift + N on Windows, or Command + Shift + N on macOS.", isHindi);
    }
    else if(transcript.includes("give me the image of mark zuckerberg")) {
        speak("sure sir!", isHindi);
        window.open("https://www.google.co.in/search?sca_esv=57f995de952bc4d6&sxsrf=ADLYWIJH5OlNU4ItE_zqBsaHbiZVH_Bxog:1728454770610&q=mark+zuckerberg&udm=2&fbs=AEQNm0CRraR4AFMOJtZDUPiZk_hDEGW7EwGJ8ltzg0fUf3C5XQ77d2-1iMSp3wdEYbyzpZPckXLsN0SSnUI7riz2SzptL-YZRKwTRF7Xifa47LncGyr7rGjLkYrnwMvuVEb7a9MvInW5r88I7Lc0nmNJqOE4vUiGS7BB3h3m_2EG1oeH6vlYpuWBpOWXOnggXIquMa6F1FY72zfWuGF9q1W5c_6AXEexig&sa=X&ved=2ahUKEwi_6fLk04CJAxWcZWwGHZ4QAXoQtKgLegQICRAB&biw=1396&bih=632&dpr=1.38")
    }
    else if(transcript.includes("who is anshu")) {
        speak("Anshu is my best friend.", isHindi);
    }
    else if(transcript.includes("who is anand")) {
        speak("Anand is my  friend.", isHindi);
    }
    else if(transcript.includes("will you speak in hindi")) {
        speak("sorry sir, but i only understand hindi. can't talk in it", isHindi);
       
    }
    
    else if(transcript.includes("hello ai")) {
        speak("hello sir. I am  the virtual a i that will help you in many works", isHindi);
    }
    else if(transcript.includes("what is the relation between you and me")) {
        speak("i don't know about other robot but i am your assistant and you're my boss", isHindi);
    }
    else if (transcript.includes("google")) {
        speak("Opening Google");
        window.open("https://www.google.com", isHindi);
    }
    else if (transcript.includes("open microsoft edge")) {
        speak("Opening Microsoft Edge", isHindi);
      
        window.open("microsoft-edge:https://www.bing.com"); 
    }
    else if (transcript.includes("open co pilot")) {
        speak("Opening copilot", isHindi);
      
        window.open("https://copilot.microsoft.com/"); 
    }
    else if (transcript.includes("open ko pilot")) {
        speak("Opening copilot", isHindi);
      
        window.open("https://copilot.microsoft.com/"); 
    }
    else if (transcript.includes("open copilot")) {
        speak("Opening copilot", isHindi);
      
        window.open("https://copilot.microsoft.com/"); 
    }
    else if (transcript.includes("what is temperature now")) {
        speak("Opening weather report", isHindi);
      
        window.open("https://www.bing.com/search?pglt=169&q=weather"); 
    }
    else if (transcript.includes("open calculator")) {
        speak("Opening calculator");
        window.open("calculator://");
    }
    else if (transcript.includes("play store")) {
        speak("Opening playstore");
        window.open("https://play.google.com/store/games?device=phone&hl=en", isHindi);
    }
    else if (transcript.includes("gamma ai")) {
        speak("Opening gamma a i");
        window.open("https://gamma.app/", isHindi);
    }
    else if (transcript.includes("open playlist 1" && "open playlist one")) {
        speak("Opening your playlist");
        window.open("https://www.youtube.com/watch?v=vpzitzyMRwc&list=RDvpzitzyMRwc&start_radio=1", isHindi);
    }  else if (transcript.includes("who is arijit singh")) {
        speak("I thought you want to know about Arijit Singh");
        window.open("https://www.google.co.in/search?q=arijit+singh", isHindi);
    }
    else if (transcript.includes("open vinoba bhave university examination section")) {
        speak("following your order sir");
        window.open("https://www.vbuuniv.in/vbuexamform/login", isHindi);
    }
    else if (transcript.includes("facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/", isHindi);
    }
    else if (transcript.includes("yes i have")) {
        speak("ok then ask me question i will try to answer your question", isHindi);
       
    }
    
    
    else if (transcript.includes("display your boss image")) {
        speak("displaying my boss image", isHindi);
        window.open("https://photos.google.com/photo/AF1QipM149VLEmk5Uy161AHP2kmraMT3nRZVcS4R4tQx")
       
    }
    else if (transcript.includes("what is the name of the person that is displayed by you")) {
        speak("i already told you his name is harsh sir", isHindi);
     
       
    }
    else if (transcript.includes("i want to know full name of that person")) {
        speak("sorry, it's against my policy guidelines", isHindi);
     
       
    }
    else if (transcript.includes("who is mark zuckerberg")) {
        speak("this is a search result that i found on internet", isHindi);
        window.open("https://www.google.co.in/search?q=mark+zukerburg&sca_esv=643cb0ab8ab0de1a&sxsrf=ADLYWII9jFeJrO6qceCY6METyJyEMMg8wg%3A1728447701870&ei=1QQGZ5TkNLmvseMP9JaxgA8&ved=0ahUKEwjUoqG6uYCJAxW5V2wGHXRLDPAQ4dUDCA8&uact=5&oq=mark+zukerburg&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm1hcmsgenVrZXJidXJnMgoQLhiABBgCGMsBMg0QABiABBixAxhDGIoFMgcQABiABBgKMg0QABiABBixAxiDARgKMg0QABiABBixAxiDARgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMhkQLhiABBgCGMsBGJcFGNwEGN4EGN8E2AEBSKg9UMcGWIA6cAJ4AZABBJgBsAKgAYIfqgEIMC42LjEyLjG4AQPIAQD4AQGYAhGgAoIaqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg0QLhiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICCBAuGIAEGLEDwgIKEAAYgAQYQxiKBcICChAAGIAEGBQYhwLCAgUQABiABMICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIEECMYJ8ICChAuGIAEGEMYigXCAhEQLhiABBixAxjRAxiDARjHAcICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAgoQLhiABBgnGIoFwgINEC4YgAQYQxjlBBiKBcICEBAuGIAEGLEDGEMYgwEYigXCAhAQABiABBixAxhDGIMBGIoFwgINEC4YgAQYsQMYQxiKBcICExAuGIAEGLEDGEMYgwEY1AIYigXCAh8QLhiABBixAxhDGIMBGIoFGJcFGNwEGN4EGN8E2AEBmAMOiAYBkAYTugYGCAEQARgJkgcIMi4zLjExLjGgB9aKAw&sclient=gws-wiz-serp", isHindi);
    }
    else if (transcript.includes("harsh academy live")) {
        speak("this is a search result that i found on internet", isHindi);
        window.open("https://www.google.com/search?q=harsh+academy+live&oq=harsh+&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyBggCEEUYOzIGCAMQRRg7MgYIBBAjGCcyCggFEC4YsQMYgAQyEAgGEAAYgwEYsQMYgAQYigUyCggHEC4YsQMYgAQyDQgIEC4YgwEYsQMYgAQyEAgJEAAYgwEYsQMYgAQYigXSAQkzNTI2ajBqMTWoAgmwAgE&sourceid=chrome&ie=UTF-8", isHindi);
    }
    else if (transcript.includes("open share market")) {
        speak("which one do you want to open",isHindi);
        
    }
    else if (transcript.includes("what is javascript")) {
        speak("wikipedia will explain about it, i don't know",isHindi);
        window.open("https://simple.wikipedia.org/wiki/JavaScript")
        
    }
    else if (transcript.includes("open groww")) {
        speak("ok sir, order proceed", isHindi);
        window.open("https://groww.in/")
    }
    else if (transcript.includes("open grow")) {
        speak("ok sir, oder proceed", isHindi);
        window.open("https://groww.in/")
    }
    else if (transcript.includes("aigiri nandini")) {
        speak("ok sir", isHindi);
        window.open("https://youtu.be/DEGcIi9aij8?si=OdFffbjmLQcr42CQ")
    }
    else if (transcript.includes("what is wikipedia")) {
        speak("wikipedia is a multilingual, web encyclopedia that is a free book storage. The name Wikipedia is a combination of the words wiki and encyclopedia", isHindi);
       
    }
    else if (transcript.includes("whatsapp")) {
        speak("processing, please wait", isHindi);
        window.open("whatsapp://")
    } 
   
    else if (transcript.includes("instagram")) {
        speak("opening your favourate insta", isHindi);
        window.open("https://www.instagram.com/")
    } 
    
    else if (transcript.includes("what is your age")) {
        speak("I am robo i don't have any age", isHindi);
    } else if (transcript.includes("where are you")) {
        speak("I am in hazaribag, zharkhand!", isHindi);
    } else if (transcript.includes("how are you")) {
        speak("I am fine! Thank you for asking.", isHindi);
    } else if (transcript.includes("who are you")) {
        speak("I am your virtual assistant created by Harsh Sir.", isHindi);
    }
    else if (transcript.includes("hu r u")) {
        speak("I am your virtual assistant created by Harsh Sir.", isHindi);
    }
    else if (transcript.includes("hello riya")) {
        speak("Hello Sir. How is your day today?", isHindi);
    } else if (transcript.includes("it was a good day how about you")) {
        speak("I am fine. Do you have any questions for me?", isHindi);
    } else if (transcript.includes("what is your name")) {
        speak("Hello Sir, my name is riya, an advanced A-I assistant under creation.", isHindi);
    } else if (transcript.includes("how many languages do you know")) {
        speak("I only know English and hindi.", isHindi);
    } else if (transcript.includes("who is harsh")) {
        speak("Don't tell him like this, Harsh sir is my boss.", isHindi);
    } else if (transcript.includes("who created you")) {
        speak("I was created by Harsh Sir, the owner of Harsh Academy.", isHindi);
    } else if (transcript.includes("no question")) {
        speak("It's okay, Sir.", isHindi);
    } else if (transcript.includes("who am i")) {
        speak("You are a human, either male or female.,", isHindi);
    } 
    else if (transcript.includes("main kaun hun")) {
        speak("आप एक इंसान हैं, या तो पुरुष या महिला।", isHindi);
    } 
    else if (transcript.includes("who is munnu bala sinha")) {
        speak("mother of harsh sir", isHindi);
    } 
    
   
    else if (transcript.includes("image is so blur")) {
        speak("sorry, i don't have another image. try again later", isHindi);
        speak("previous image displayed, sorry for that", isHindi);
        window.open("https://photos.google.com/photo/AF1QipM149VLEmk5Uy161AHP2kmraMT3nRZVcS4R4tQx")
       
    }
    
    else if (isHindi) {
        speak("मुझे खेद है, मैं इसे समझ नहीं सका।", isHindi);  
    }
    
   
    
    
    
    else {
        speak("Sorry, I can't understand your question. But I will try my best to learn it.");
    }
};

async function openFolder() {
    try {
        const [fileHandle] = await window.showOpenFilePicker({
            multiple: false,
            types: [
                {
                    description: 'All Files',
                    accept: {
                        'application/*': ['.txt', '.pdf', '.docx', '.jpg', '.png'],
                        'image/*': ['.jpg', '.jpeg', '.png'],
                    },
                },
            ],
        });
        
        const file = await fileHandle.getFile();
       
        
        window.open(url);
    } catch (err) {
        console.error(err);
        speak("Sorry, I couldn't open your folder.", isHindi);
    }
}




function speak(text, isHindi) {
    const utterance = new SpeechSynthesisUtterance(text);

    
    if (isHindi && hindiVoice) {
        utterance.voice = hindiVoice;
        utterance.lang = 'hi-IN';  
    } else if (!isHindi && indianEnglishVoice) {
        utterance.voice = indianEnglishVoice;
        utterance.lang = 'en-IN';  
    } else {
        utterance.lang = isHindi ? 'hi-IN' : 'en-IN';  
    }

    speechSynthesis.speak(utterance);
}


window.addEventListener('load', () => {
    setVoices();
});