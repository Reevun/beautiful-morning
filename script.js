// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate random confetti
function generateConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
    confettiPiece.style.animationDelay = Math.random() * 2 + 's';
    confettiPiece.style.backgroundColor = getRandomColor(); // Set random color
    confettiContainer.appendChild(confettiPiece);
  }
}

// Start confetti animation
generateConfetti();

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change body background color every 1 second
setInterval(() => {
  document.body.style.backgroundColor = getRandomColor();
}, 1500);

let clickCount = 0;

// Array of messages
const messages = [
  "holaw ayy-",
  "ETSSS :)))",
  "HALOOO CICI AKUUU <33",
  "sebelumnya",
  "hari apa yh hari ini??",
  "YAPP, kamu bakal tw nanti!",
  "anw",
  "JANGAN BURU BURU YA KLIKNYA!!!",
  "oke",
  "1",
  "2",
  "3",
  ".",
  "..",
  "...",
  "....",
  ".....",
  "EHEHEHEHE NUNGGUIN YAH :D ",
  "ABIS INI SERIUS ^^",
  "hehehe",
  "HAPPY",
  "BIRTHDAY",
  "BUAT KAMU",
  "CANTIKNYA AKU",
  "i wish you'are always be a good girl dan makin pekaa yahhh :)",
  "jangan teriak teriak mulu yah",
  "EHEHEH BECANDAA :D",
  "ga banyak wish aku ke kamu, pokoknya BEST WISH EVER buat kamu banyak banyakkk",
  "apa lagi yahh ...",
  "4 klik lagi kali yah, oke",
  "happy cici day's sekali lagi <333",
  "sayang kamu banyak banyakkkkkk!!!! <3333",
  "kalo mau liat dari awal refresh aja ya!",
  "sekian, maaf kalo cringe :b",
];

// Function to show hidden message
function showHiddenMessage() {
  const hiddenMessage = document.getElementById('hiddenMessage');
  hiddenMessage.textContent = messages[clickCount]; // Set message content
  hiddenMessage.style.display = 'block';
}

// Function to show next button after the previous button is clicked
function showNextButton() {
  clickCount++;
  if (clickCount < 35) {
    const nextButton = document.getElementById(`showAgainButton${clickCount}`);
    nextButton.style.display = 'block';
  } else {
    alert('You have reached the maximum limit of repetitions!');
  }
}

// Add event listener to the "Show Hidden Message" button
const showMessageButton = document.getElementById('showMessageButton');
showMessageButton.addEventListener('click', () => {
  showHiddenMessage();
  showNextButton();
});

