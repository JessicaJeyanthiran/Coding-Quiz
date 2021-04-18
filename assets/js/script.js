var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');


// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
  
// Use the `setInterval()` method to have count down decrement by 1000 milliseconds
  var timeInterval = setInterval(function() {
    
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = 'Times Up!';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

startBtn.onclick = countdown
