let message = 0

let arr = [
  `Don't push the button!`,
  `Wait!`,
  `What are you doing?`,
  `If you press it again the world will explode`,
  `You monster!`,
  `STOP!`,
  `BOOOOOOOOOOOOOOOM`,
  `See... I told you`,
]

function changeMessage() {
  if (message < arr.length) {
    document.getElementById('displayMessage').innerHTML = arr[message]
    message++
  } else {
    message = 0
  }
}
