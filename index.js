function mainRound(){
  var play = window.confirm("In this game you pick if the next number is going to be higher or lower, based on the number given.  Numbers will be Integers from 1 to 100.  If you want to play press OK.")
  var number = Math.round(Math.random() * 100)
  var newNumber = Math.round(Math.random() * 100)
  var correct = 3

  if (play){
    while (true) {
      var input = window.prompt('The current number is ' + number + '.  Is the next number higer or lower? (Press Cancel to quit)')
      if (input === null) {
          break
      } else if (input.toLowerCase().trim() === 'lower') {
        if (newNumber < number) {
          correct -= 1
          window.alert('You are Correct! (' + (correct) + ' more correct to win)')
        } else {
          window.alert("You are Wrong!")
        }
      } else if (input.toLowerCase().trim() === 'higher') {
        if (newNumber > number) {
          correct -= 1
          window.alert('You are Correct! (' + (correct) + ' more correct to win)')
        } else {
          window.alert("You are Wrong!")
        }
      } else {
        window.alert("That is not a valid input!")
      }
      if (correct === 0){
        if (bonusRound()){
          window.alert("YOU WON THE BONUS ROUND")
        } else {
          window.alert("YOU LOST THE BONUS ROUND")
        }
        break
      }
      number = newNumber
      newNumber = Math.round(Math.random() * 100)
    }
  }
  else{
    window.alert("bummer")
  }
}

function bonusRound(){
  var playBonus = window.confirm("This is the Bonus Round! Press OK to play or Cancel to quit")
  if (playBonus) {
    while(true){
      var oneNumber = Math.round(Math.random() * 10)
      input = window.prompt("Pick a number between 0 and 10")
      if (input === null) {
        break
      } else if (isNaN(input)){
        window.alert("Not a correct input!")
      }else{
        if (parseInt(input) === oneNumber){
          return true
        } else if (parseInt(input) > 10 || parseInt(input) < 0){
          window.alert("The number has to be between 0 and 10")
        } else {
          return false
        }
      }
    }
  } else {
    window.alert("No Bonus Round!")
  }
}

mainRound()
