//document.write('Hello World !!');
/*
alert();
document.write();
console.log():
confirm();
var;
prompt();
parseInt();
Typeof();
= , += , -= , *= , /= , %=
++ , -- 
+ , * , - , / , % 
< , > , <= , >=
== , === , != , !==
*/
var valeur1 = prompt('Please enter valeur 1');
var valeur2 = prompt('Please enter valeur 2');

var valeur3 = parseInt(valeur1) + parseInt(valeur2); 

document.write('la somme est : '+valeur3+'\n');
/*
if (valeur3 > 0) {
    document.write('la somme est > 0');
} else if (valeur3 < 0) {
    document.write('la somme est < 0');
}else {
    document.write('la somme est = 0');
}
*/

//document.write((valeur3 > 0 ) ? 'la somme est > 0' : 'la somme est < 0');

let i = 0;

while (i <  5) {
    document.write(i);
    i++;
}
for (let index = 0; index < valeur3; index++) {
    document.write(index);  
}

==UserScript==
@name         refrech Timer Control with infovissa
@namespace    httptampermonkey.net
@version      0.9
@description  Add a continuous timer control panel with social media links and auto-refresh
@author       You
@match        httpsauth.visas-fr.tlscontact.comauthrealmsatlasprotocolopenid-connectauthresponse_type=code&client_id=web_app&scope=openid%20roles%20atlas%20web-origins%20email%20offline_access%20profile%20address%20phone&state=v0JYIxmQdeHaDLpKPoTHQXNcZV7PGh6Bsknl9L05YYc%3D&redirect_uri=httpsvisas-fr.tlscontact.comloginoauth2codeoidc&issuer=maAGA2fr
@author       httpsfr.tlscontact.comappointmentmamaCAS2fr16880869
@author       httpsfr.tlscontact.comformGroupmamaCAS2fr
@match        httpsit.tlscontact.commaCAS
@match        httpsvisa-fr.tlscontact.com
@match       httpsfr.tlscontact.comvisama
@match        httpsfr.tlscontact.comvisama
@grant        none
==UserScript==

(function() {
   'use strict';
   const style = `
       #controlPanel {
           position fixed;
           top 10px;
           right 10px;
           background #fff;
           border 1px solid #000;
           padding 10px;
           z-index 9999;
           font-size 12px;  Small text size 
       }
       #controlPanel button {
           display block;
           margin 5px;
           padding 10px;
           border none;
           color white;
           cursor pointer;
       }
       #controlPanel #startButton {
           background green;
       }
       #controlPanel #stopButton {
           background red;
       }
       #controlPanel #setRateButton {
           background blue;
       }
       #controlPanel #timer {
           display block;
           margin-top 10px;
       }
       #controlPanel #rateInput {
           margin-top 10px;
           width 60px;
       }
       #controlPanel .social-button {
           display inline-block;
           margin-top 10px;
           cursor pointer;
           width 24px;   Smaller image width 
           height 24px;  Smaller image height 
           vertical-align middle;
       }
       #controlPanel .social-button img {
           width 100%;
           height 100%;
           object-fit contain;  Ensures images fit within their containers 
       }
       #controlPanel .social-label {
           font-size 10px;  Small text for labels 
           margin-left 5px;
           vertical-align middle;
       }
   `;

   const styleSheet = document.createElement(style);
   styleSheet.type = textcss;
   styleSheet.innerText = style;
   document.head.appendChild(styleSheet);
   const controlPanel = document.createElement('div');
   controlPanel.id = 'controlPanel';
   controlPanel.innerHTML = `
       button id=startButtonStart Refreshbutton
       button id=stopButtonStop Refreshbutton
       input id=rateInput type=number value=10 min=1 step=1  seconds
       button id=setRateButtonSet Refresh Ratebutton
       div id=timerAuto-refresh stopped.div
       div
           a class=social-button href=httpst.meinfovissa target=_blank
               img src=httpsimg.icons8.comcolor48telegram-app.png alt=Telegram
           a
           span class=social-labelTelegramspan
       div
       div
           a class=social-button href=httpswww.instagram.cominfovisaaigsh=MWcyOXc0amt4M3VvbA== target=_blank
               img src=httpsimg.icons8.comcolor48instagram-new.png alt=Instagram
           a
           span class=social-labelInstagramspan
       div
       div
           a class=social-button href=httpswww.youtube.com target=_blank
               img src=httpsimg.icons8.comcolor48youtube-play.png alt=YouTube
           a
           span class=social-labelYouTubespan
       div
   `;
   document.body.appendChild(controlPanel);
   let refreshTimeout;
   let refreshRate = parseInt(localStorage.getItem('refreshRate'))  10000;
   let isRefreshing = localStorage.getItem('isRefreshing') === 'true';
   let timeRemaining = parseInt(localStorage.getItem('timeRemaining'))  refreshRate;
   function updateTimer() {
       const seconds = Math.ceil(timeRemaining  1000);
       document.getElementById('timer').innerText = `Next refresh in ${seconds} seconds.`;
   }

   function scheduleRefresh() {
       refreshTimeout = setInterval(() = {
           timeRemaining -= 1000;
           updateTimer();

           if (timeRemaining = 0) {
               localStorage.setItem('timeRemaining', refreshRate);
               location.reload();
           }
           localStorage.setItem('timeRemaining', timeRemaining);

       }, 1000);
   }
   function startRefreshing() {
       if (!isRefreshing) {
           isRefreshing = true;
           localStorage.setItem('isRefreshing', 'true');
           localStorage.setItem('timeRemaining', refreshRate);
           scheduleRefresh();
       }
   }

   function stopRefreshing() {
       if (isRefreshing) {
           isRefreshing = false;
           clearInterval(refreshTimeout);
           localStorage.setItem('isRefreshing', 'false');
           document.getElementById('timer').innerText = 'Auto-refresh stopped.';
       }
   }

   function setRefreshRate() {
       const rate = parseInt(document.getElementById('rateInput').value, 10);
       if (!isNaN(rate) && rate  0) {
           refreshRate = rate  1000;
           localStorage.setItem('refreshRate', refreshRate);
           timeRemaining = refreshRate;
           if (isRefreshing) {
               clearInterval(refreshTimeout);
               scheduleRefresh();
           }
       }
   }
   document.getElementById('startButton').addEventListener('click', startRefreshing);
   document.getElementById('stopButton').addEventListener('click', stopRefreshing);
   document.getElementById('setRateButton').addEventListener('click', setRefreshRate);

   if (isRefreshing) {
       scheduleRefresh();
   }

   updateTimer();

})();
