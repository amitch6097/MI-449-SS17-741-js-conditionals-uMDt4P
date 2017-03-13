function mainRound () {
  //ask player if they want to play
  var play = window.confirm('In this game you pick if the next number is going to be higher or lower, based on the number given.  Numbers will be Integers from 1 to 100.  If you want to play press OK.')
  if (play) {
    //intialze some variables for game
    var number = Math.round(Math.random() * 100)
    var newNumber = Math.round(Math.random() * 100)
    var correct = 3
    // continue game until told to quit with cancel
    while (true) {
      //ask for higher or lower
      var input = window.prompt('The current number is ' + number + '.  Is the next number higer or lower? (Press Cancel to quit)')
      //player hit cancel
      if (input === null) {
        break
      //lower case
      } else if (input.toLowerCase().trim() === 'lower') {
        if (newNumber < number) {
          correct--
          window.alert('You are Correct! (' + correct + ' more correct to win)')
        } else {
          window.alert('You are Wrong!')
        }
      //higher case
      } else if (input.toLowerCase().trim() === 'higher') {
        if (newNumber > number) {
          correct--
          window.alert('You are Correct! (' + correct + ' more correct to win)')
        } else {
          window.alert('You are Wrong!')
        }
      //otherwise it is invalid
      } else {
        window.alert('That is not a valid input!')
      }
      //if we are done with the game
      if (correct === 0) {
        //do a bonus round
        if (bonusRound() == 1) { //player won the bonus round
          window.alert('YOU WON THE BONUS ROUND')
        } else  if (bonusRound() == 0){ //player lost the bonus round
          window.alert('YOU LOST THE BONUS ROUND')
        }
        //we are done with the game so break
        break
      }
      //set the new number to the main number and grab a new secret number
      number = newNumber
      newNumber = Math.round(Math.random() * 100)
    }
  //player did not want to play the game
  } else {
    window.alert('bummer')
  }
}

function bonusRound () {
  //ask player if they want to play bonus round
  var playBonus = window.confirm('This is the Bonus Round! Press OK to play or Cancel to quit')
  if (playBonus) { //they do
    //keep repeating till told otherwise
    while (true) {
      //pick random number
      var oneNumber = Math.round(Math.random() * 10)
      //ask them to guess that random number
      var input = window.prompt('Pick a number between 0 and 10')
      //if they hit cancel
      if (input === null) {
        break
      //if they did not enter a number
      } else if (isNaN(input)) {
        window.alert('Not a correct input!')
      //they did enter a number
      } else {
        //they get the correct number
        if (parseInt(input) === oneNumber) {
          return 1
        //the picked a number outside the range
        } else if (parseInt(input) > 10 || parseInt(input) < 0) {
          window.alert('The number has to be between 0 and 10')
        //they picked the wrong number
        } else {
          return 0
        }
      }
    }

  //they did not want to play the game
  } else {
    window.alert('No Bonus Round!')
    return -1
  }
}

//call the main game
mainRound()
