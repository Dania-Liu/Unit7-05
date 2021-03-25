// Sets default values.
let age = 0
let day = 0

// Connects button to JavaScript function.
document.getElementById('button').addEventListener('click', button)

// Indicates what the function does.
function button () {
  // Takes the values from the HTML textboxes.
  age = document.getElementById('ages').value
  age = parseInt(age)
  day = document.getElementById('days').value

  // Case 1: It is a weekday and the age is under 18.
  if ((age <= 18 && day === 'Monday') || (age <= 18 && day === 'Tuesday') || (age <= 18 && day === 'Wednesday') || (age <= 18 && day === 'Thursday') || (age <= 18 && day === 'Friday')) {
    document.getElementById('answer').innerHTML = ('Uh oh, time to go to school!')

  // Case 2: It is a weekday and the age is not under 18.
  } else if ((age >= 17 && day === 'Monday') || (age >= 17 && day === 'Tuesday') || (age >= 17 && day === 'Wednesday') || (age >= 17 && day === 'Thursday') || (age >= 17 && day === 'Friday')) {
    document.getElementById('answer').innerHTML = ('Oh no, time to go to work!')

  // Case 3: It is not a weekday and the age is under 18.
  } else if ((age <= 18 && day === 'Sunday') || (age <= 18 && day === 'Saturday')) {
    document.getElementById('answer').innerHTML = ('Relax, it is the weekend!')

  // Case 4: It is not a weekday and the age is not under 18.
  } else if ((age >= 17 && day === 'Saturday') || (age >= 17 && day === 'Sunday')) {
    document.getElementById('answer').innerHTML = ('Relax, it is the weekend for everybody!')
  }
}
