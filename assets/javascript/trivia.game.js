function startGame() {
    //print timer
    output += '<h2>You have: <span class="time-left">' + timeLeft + '</span>s</h2>';
    startCountdown();
    printQuestions();
    output += '</br><button class="end-button">End Game</button>';
    target('.output').innerHTML = output;
    target('.end-button').addEventListener('click', function() {
      endGame()
    });
  }
  target('.start-button').addEventListener('click', function(){
    startGame();  
  });