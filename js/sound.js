/*  sound.js, part of the ApolloPad Mixer

    GNU Library or 'Lesser' General Public License version 3.0 (LGPL-3.0)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>. */

/* --- Loop sounds --- */
function playLoop(el,soundfile) {
  if (el.mp3) {
  if(el.mp3.paused){
    el.mp3.currentTime = 0;
    el.mp3.play();
  } else el.mp3.pause();
    } else {
      el.mp3 = new Audio(soundfile);
      el.mp3.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
      }, false);
      el.mp3.play();
    }
}

/* --- Single play/pause --- */
function playSound(el,soundfile) {
  if (el.mp3) {
    if(el.mp3.paused){
      el.mp3.currentTime = 0;
      el.mp3.play();
    } else el.mp3.pause();
  } else {
    el.mp3 = new Audio(soundfile);
    el.mp3.play();
  }
}


function PromptFacebookLogin(){
  var response;
  FB.login(function(response){
    if (response.authResponse){
      FB.api('/me', function(response) {
        var divHTML = '<a target="_blank" href="' + response.link + '"><img src="https://graph.facebook.com/' + response.id + '/picture">';
        document.getElementById("output").innerHTML = divHTML;
        document.getElementById('fbLogin').style.display = "none";
        document.getElementById('fbPost').style.display = "block";
      });

      
    } else {
      alert("You are not logged in to Facebook or have not granted the required permissions. Please log in and grant the required permissions to use ApolloPad");
    }
  }, {scope:'publish_stream,email'});
}

function postToFeed() {
  FB.ui({
    method: 'feed',
    name: 'ApolloPad',
    link: 'http://gustawho.com/apollopad',
    picture: 'http://gustawho.com/apollopad/img/1024x1024.png',
    caption: 'Play FREE now!',
    description: 'Make music with real space sounds directly from your browser',
    message: 'Testing'
  });
}

window.fbAsyncInit = function() {
  FB.init({appId: '905951252758931', status: true, version: 'v2.3', xfbml: true, authResponse: true, oauth: true});
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));