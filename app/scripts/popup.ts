// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'

console.log(`'Allo 'Allo! Popup`);

function showMessage() {
  console.log('click button');
}

const actionButton: HTMLInputElement =<HTMLInputElement>document.getElementById('action-button');
actionButton.addEventListener('click', showMessage);
