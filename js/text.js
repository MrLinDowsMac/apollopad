/*  text.js, part of the ApolloPad Mixer

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

/* --- Bottom verbose --- */
function textInfo(name) {
  document.getElementById("infoBox").innerHTML = 'Last sound played: ' + name;
}

/* --- Knobs logic (not yet implemented) --- */
$(function($) {

  $(".knob").knob({
//     change : function (value) {
//       //console.log(this.$.attr('value'));
//     },
//     release : function (value) {
//       //console.log(this.$.attr('value'));
//       console.log("release : " + value);
//     },
//     cancel : function () {
//       console.log("cancel : ", this);
//     },
//     /*format : function (value) {
//      *       return value + '%';
//   },*/
    draw : function () {
      if(this.$.data('skin') == 'tron') {

        this.cursorExt = 0.3;

        var a = this.arc(this.cv)
        , pa
        , r = 1;

        this.g.lineWidth = this.lineWidth;

        if (this.o.displayPrevious) {
          pa = this.arc(this.v);
          this.g.beginPath();
          this.g.strokeStyle = this.pColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
          this.g.stroke();
        }

        this.g.beginPath();
        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
        this.g.stroke();

        this.g.lineWidth = 2;
        this.g.beginPath();
        this.g.strokeStyle = this.o.fgColor;
        this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
        this.g.stroke();

        return false;
      }
    }
  });
});

//This variables are needed to know the state of the current button (is Playing or not)
var loopButtonA = false;
var loopButtonB = false;
var loopButtonC = false;
var loopButtonD = false;
var loopButtonE = false;
var loopButtonF = false;
var loopButtonG = false;
var loopButtonH = false;

/* --- Toggle on/off the "LEDS" --- */
function toggleClassA(){
  var NAME = document.getElementById("loopDivA");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonA = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonA = true;
  }
}

function toggleClassB(){
  var NAME = document.getElementById("loopDivB");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonB = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonB = true;
  }
}

function toggleClassC(){
  var NAME = document.getElementById("loopDivC");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonC = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonC = true;
  }
}

function toggleClassD(){
  var NAME = document.getElementById("loopDivD");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonD = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonD = true;
  }
}

function toggleClassE(){
  var NAME = document.getElementById("loopDivE");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonE = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonE = true;
  }
}

function toggleClassF(){
  var NAME = document.getElementById("loopDivF");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonF = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonF = true;
  }
}

function toggleClassG(){
  var NAME = document.getElementById("loopDivG");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonG = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonG = true;
  }
}

function toggleClassH(){
  var NAME = document.getElementById("loopDivH");
  if (NAME.className==="square lightsOnA")
  {
    NAME.className="square drumbeats";
    loopButtonH = false;
  }
  else
  {
    NAME.className="square lightsOnA";
    loopButtonH = true;
  }
}

var current_selected = null; //Variable to know what row is selected. 

//Function to select only one row selector button at time
function toggleClassRowSelector(elementid){
 var NAME = document.getElementById(elementid);
  //Selected a button and was already on? Turn it off.
  if (NAME.className==="circle lightsOnA")
  {
    $('.knobBar').hide(); //This hides the knobs (will be changed later)
    NAME.className="circle drumbeats";
    current_selected = null;
  }
  else //Selected a button and was off?
  {
    if (current_selected == null) { //Just turn it on and set as current selected.
      NAME.className="circle lightsOnA";
      current_selected = elementid;

      //Show the knobs (This will be changed later)
      $('.knobBar').show(); 

      //Get the current values of the gain nodes and apply them to the knobs
        $('.knob').each( function(key){  
          $('#gain' + (key + 1) ).val( 
            Math.floor( gains['gain_row_' + current_selected.substring(11) ][key].gain.value * 100)  ).trigger('change')  } );
    }
    else{ //Is there another button turned on? Turn it off and Turn it on this one.
      selected = document.getElementById(current_selected);
      selected.className = "circle drumbeats";
      NAME.className="circle lightsOnA"; 
      current_selected = elementid;

      //Get the current values of the gain nodes and apply them to the knobs
        $('.knob').each( function(key){  
          $('#gain' + (key + 1) ).val( 
            Math.floor( gains['gain_row_' + current_selected.substring(11) ][key].gain.value * 100)  ).trigger('change')  } );

    }
  }
}