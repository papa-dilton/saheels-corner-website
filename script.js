console.log('JS is working!');
//console.log('why hello, there, developer. Welcome to the console. I swear to god if you\'re debugging on internet expolorer you need to not. have fun.');

function ready(callbackFunction){
    if(document.readyState != 'loading')
      callbackFunction(event)
    else
      document.addEventListener("DOMContentLoaded", callbackFunction)
    }
    ready(event => {
        //detects when DOM has been parsed
        console.log('DOM is ready and parsed.');
        /*var contMeFootEl = document.getElementById('contMeFoot');
        contMeFootEl.addEventListener("click", alertMail);
        function alertMail() {
            console.log('Click event listener working!');
            alert("This page will open in your default email pre-addressed to Sahil Chatwal. Send your contact information and any inquiries you may have.")
        }*/
    })
