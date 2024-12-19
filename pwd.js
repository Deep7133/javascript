const passwordDisplay = document.getElementById('passwordDisplay');
const lengthInput = document.getElementById('lengthInput');
const generateBtn = document.getElementById('generateBtn');

const options = {
  uppercase: false,
  lowercase: false,
  digits: false,
  specialChars: false,
};

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    options[button.id] = !options[button.id];
    button.style.background = options[button.id] ? '#00ff99' : '#00c6ff';
  });
});

generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthInput.value);
  const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    specialChars: '!@#$%^&*()_+[]{}|;:,.<>?',
  };

  let charPool = '';
  Object.keys(options).forEach(key => {
    if (options[key]) charPool += characters[key];
  });

  if (!charPool) {
    passwordDisplay.textContent = 'Select at least one option!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }

  passwordDisplay.textContent = password;
});