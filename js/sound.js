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

var context;
var bufferLoader;

window.onload = function() {

  context = new AudioContext();

  //ALL SAMPLES ARE LOADED HERE
  bufferLoader = new BufferLoader(
        context,
        [
        "audio/anillogic.ogg", //bufferLoader.bufferList[0];
        "audio/apollo8christmas.ogg", //bufferLoader.bufferList[1];
        "audio/athkl.ogg",      //bufferLoader.bufferList[2];
        "audio/bass.ogg",       //...and so on...
        "audio/behat.ogg",
        "audio/bigbeat.ogg",
        "audio/count.ogg",
        "audio/crash.ogg",
        "audio/customcm.ogg",
        "audio/decoy.ogg",
        "audio/detune.ogg",
        "audio/drum01.ogg",
        "audio/drum02.ogg",
        "audio/eagle.ogg",
        "audio/emfisis.ogg",
        "audio/enceladus.ogg",
        "audio/geardrop.ogg",
        "audio/guaymas.ogg",
        "audio/guitar01.ogg",
        "audio/guitar02.ogg",
        "audio/hats.ogg",
        "audio/hihat.ogg",
        "audio/interstellar.ogg",
        "audio/jfkmoon.ogg",
        "audio/jfkwechoose.ogg",
        "audio/jupiter_lighting.ogg",
        "audio/keplerb.ogg",
        "audio/keplerc.ogg",
        "audio/kick.ogg",
        "audio/lathk.ogg",
        "audio/launch.ogg",
        "audio/neptune.ogg",
        "audio/padloop.ogg",
        "audio/padloops.ogg",
        "audio/percussionloop.ogg",
        "audio/percussion.ogg",
        "audio/proton.ogg",
        "audio/saturnbg.ogg",
        "audio/saturn_spooky.ogg",
        "audio/saturn_waves.ogg",
        "audio/sechat.ogg",
        "audio/smallstep.ogg",
        "audio/snare.ogg",
        "audio/sputnik.ogg",
        "audio/stardust.ogg",
        "audio/techclap.ogg",
        "audio/vger.ogg",
        "audio/volcanoes.ogg",
        ],
        finishedLoading
    );

    bufferLoader.load();
}

function finishedLoading(bufferList) {
//function finishedLoading(bufferList) {
    // Create three sources and buffers
    console.log('Finished Loading');
    console.log(bufferList.toString());

    // Create Gain Nodes
    gain_1 = context.createGain();
    gain_2 = context.createGain();
    gain_3 = context.createGain();
    gain_4 = context.createGain();
    gain_5 = context.createGain();
    gain_6 = context.createGain();
    

    //Buses
    //sendmain_1 = context.createGain(); // Create routing gain node for main bus for channel 1
    main_bus = context.createGain();

    //Wiring
    gain_1.connect(main_bus);
    gain_2.connect(main_bus);
    gain_3.connect(main_bus);
    gain_4.connect(main_bus);
    gain_5.connect(main_bus);
    gain_6.connect(main_bus);

    main_bus.connect(context.destination);

    //ALL THE SOUND OBJECTS ARE REFERENCED HERE, THEY CONTAIN ITS RESPECTIVE BUFFER
    //guitar = { name : 'guitar', buffer: bufferLoader.bufferList[0] , runningNode : null };
    //kbeat  = { name : 'kbeat', buffer : bufferLoader.bufferList[1] , runningNode : null };
    //tick1  = { name : 'tick1', buffer : bufferLoader.bufferList[2], runningNode : null };
    //tick2  = { name : 'tick2', buffer : bufferLoader.bufferList[3], runningNode : null };
    anillogic = { name : 'anillogic', buffer: bufferLoader.bufferList[0] , runningNode : null };
    apollo8christmas = { name : 'apollo8christmas', buffer: bufferLoader.bufferList[1] , runningNode : null };
    athkl = { name : 'athkl', buffer: bufferLoader.bufferList[2] , runningNode : null };
    bass  = { name : 'bass', buffer: bufferLoader.bufferList[3] , runningNode : null };
    behat = { name : 'behat', buffer: bufferLoader.bufferList[4] , runningNode : null };
    bigbeat = { name : 'bigbeat', buffer: bufferLoader.bufferList[5] , runningNode : null };
    count = { name : 'count', buffer: bufferLoader.bufferList[6] , runningNode : null };
    crash = { name : 'crash', buffer: bufferLoader.bufferList[7] , runningNode : null };
    customcm = { name : 'customcm', buffer: bufferLoader.bufferList[8] , runningNode : null };
    decoy = { name : 'decoy', buffer: bufferLoader.bufferList[9] , runningNode : null };
    detune = { name : 'detune', buffer: bufferLoader.bufferList[10] , runningNode : null };
    drum01 = { name : 'drum01', buffer: bufferLoader.bufferList[11] , runningNode : null };
    drum02 = { name : 'drum02', buffer: bufferLoader.bufferList[12] , runningNode : null };
    eagle = { name : 'eagle', buffer: bufferLoader.bufferList[13] , runningNode : null };
    emfisis = { name : 'emfisis', buffer: bufferLoader.bufferList[14] , runningNode : null };
    enceladus = { name : 'enceladus', buffer: bufferLoader.bufferList[15] , runningNode : null };
    geardrop = { name : 'geardrop', buffer: bufferLoader.bufferList[16] , runningNode : null };
    guaymas = { name : 'guaymas', buffer: bufferLoader.bufferList[17] , runningNode : null };
    guitar01 = { name : 'guitar01', buffer: bufferLoader.bufferList[18] , runningNode : null };
    guitar02 = { name : 'guitar02', buffer: bufferLoader.bufferList[19] , runningNode : null };
    hats = { name : 'hats', buffer: bufferLoader.bufferList[20] , runningNode : null };
    hihat = { name : 'hihat', buffer: bufferLoader.bufferList[21] , runningNode : null };
    interstellar = { name : 'interstellar', buffer: bufferLoader.bufferList[22] , runningNode : null };
    jfkmoon = { name : 'jfkmoon', buffer: bufferLoader.bufferList[23] , runningNode : null };
    jfkwechoose = { name : 'jfkwechoose', buffer: bufferLoader.bufferList[24] , runningNode : null };
    jupiter_lighting = { name : 'jupiter_lighting', buffer: bufferLoader.bufferList[25] , runningNode : null };
    keplerb = { name : 'keplerb', buffer: bufferLoader.bufferList[26] , runningNode : null };
    keplerc = { name : 'keplerc', buffer: bufferLoader.bufferList[27] , runningNode : null };
    kick = { name : 'kick', buffer: bufferLoader.bufferList[28] , runningNode : null };
    lathk = { name : 'lathk', buffer: bufferLoader.bufferList[29] , runningNode : null };
    launch = { name : 'launch', buffer: bufferLoader.bufferList[30] , runningNode : null };
    neptune = { name : 'neptune', buffer: bufferLoader.bufferList[31] , runningNode : null };
    padloop = { name : 'padloop', buffer: bufferLoader.bufferList[32] , runningNode : null };
    padloops = { name : 'padloops', buffer: bufferLoader.bufferList[33] , runningNode : null };
    percussionloop = { name : 'percussionloop', buffer: bufferLoader.bufferList[34] , runningNode : null };
    percussion = { name : 'percussion', buffer: bufferLoader.bufferList[35] , runningNode : null };
    proton = { name : 'proton', buffer: bufferLoader.bufferList[36] , runningNode : null };
    saturnbg = { name : 'saturnbg', buffer: bufferLoader.bufferList[37] , runningNode : null };
    saturn_spooky = { name : 'saturn_spooky', buffer: bufferLoader.bufferList[38] , runningNode : null };
    saturn_waves = { name : 'saturn_waves', buffer: bufferLoader.bufferList[39] , runningNode : null };
    sechat = { name : 'sechat', buffer: bufferLoader.bufferList[40] , runningNode : null };
    smallstep = { name : 'smallstep', buffer: bufferLoader.bufferList[41] , runningNode : null };
    snare = { name : 'snare', buffer: bufferLoader.bufferList[42] , runningNode : null };
    sputnik = { name : 'sputnik', buffer: bufferLoader.bufferList[43] , runningNode : null };
    stardust = { name : 'stardust', buffer: bufferLoader.bufferList[44] , runningNode : null };
    techclap = { name : 'techclap', buffer: bufferLoader.bufferList[45] , runningNode : null };
    vger = { name : 'vger', buffer: bufferLoader.bufferList[46] , runningNode : null };
    volcanoes  = { name : 'volcanoes', buffer: bufferLoader.bufferList[47] , runningNode : null };

}


//Plays a sound, parametres are: 
//soundObject that contains the audio buffer
//time when it will be sound
//loopOption is boolean value to set sound is looped
//gain_node parameter is the gain in the channel strip where the pad is activated.
function playSound(soundObject, time, loopOption, gain_node ) { 
    var source = context.createBufferSource();
    source.buffer = soundObject.buffer;
    //source.connect(context.destination);
    source.connect(gain_node);
    source.loop = loopOption; //true or false
    source.onended = function() { soundObject.runningNode = null } ; //This sets to null once the object is unusable.
    source.start(time);
    soundObject.runningNode = source; // Keep a reference of the created Audio Node inside the received soundObject,
                                      // allowing to stop it.
}


function stopSound(soundObject, time) {
    soundObject.runningNode.stop();
    //soundObject.runningNode = null;
}

function loopisPlaying( loopButton ){
   if (loopButton == true){
    return true;
  }
  else {
    return false;
  }
}

function toogleSound(loopButton, soundObject, time, gain_node){
  if (loopisPlaying(loopButton) == false) {
    playSound(soundObject, time, loopOption = true, gain_node );
  }
  else {
    stopSound(soundObject, time);
  }
}

/* --- Loop sounds --- */
/*function playLoop(el,soundfile) {
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
*/
/* --- Single play/pause --- */
/*function playSound(el,soundfile) {
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
*/

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