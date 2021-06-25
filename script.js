console.log('JS is working!');
var menuAccountedFor = false;
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
        window.addEventListener("load", function() {
          window.dispatchEvent(new Event('resize'));
      });
       
      window.onresize = function() {
        if (window.innerWidth <= 669 && menuAccountedFor == false) {
          
          const menuLinesEl = document.getElementById('menuLines');
          //Detects if menu lines have been clicked
          menuLinesEl.addEventListener("click", function() {
            console.log('element clicked!');
            //Creates contact me menu item
            const contMeDropEl = document.createElement('div');
            contMeDropEl.innerHTML = 'Contact Me'
            contMeDropEl.className = 'dropDiv'
            menuLinesEl.appendChild(contMeDropEl)
            //Detects if user clicks contact me
            contMeDropEl.addEventListener("click", function() {
              window.location.href = 'contact-me.html';
            })
          })
          menuAccountedFor = true;
        }
        }
    })
