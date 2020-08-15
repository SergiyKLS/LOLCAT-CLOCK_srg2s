var wakeuptime = 7;
var sleepAgainTime = 9;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
    if (hours >= noon)
    {
      meridian = "PM";
    }

    if (hours > noon)
    {
      hours = hours - 12;
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "Lu_dream_E2.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "slp_jma.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "Lyusya_Igr.jpg";
    messageText = "Wake up!";
  }
    else if (time == sleepAgainTime)
  {
    image = "Lu_dream_E2.jpg";
    messageText = "Sleep tight!";
  }
  else if (time == lunchtime)
  {
    image = "07aeat_a_zzjn_.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "Lu_dream_E2.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "Lyusya_Igr.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "asleep_a_zm_s.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "asleep_a_zm_s.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#a3def8";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#229";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates sleepAgain selector
var sleepAgainTimeSelector =  document.getElementById("sleepAgainTimeSelector");

var sleepAgainEvent = function()
{
    sleepAgainTime = sleepAgainTimeSelector.value;
};

sleepAgainTimeSelector.addEventListener("change", sleepAgainEvent);



// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);