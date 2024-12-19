
    let targetNumber;
    let attempts = 0;
    let minNumber, maxNumber;

    function setRange() {
        minNumber = parseInt(document.getElementById('minNumber').value);
        maxNumber = parseInt(document.getElementById('maxNumber').value);
        const messageElement = document.getElementById('message');

        if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
            alert("Please enter a valid range where min is less than max.");
            return;
        }

        // Generate a random number within the range
        targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        attempts = 0; // Reset attempts
        console.log(`Target number is ${targetNumber}`); 

        // Show the game area
        document.getElementById('gameArea').style.display = 'block';
        messageElement.textContent = "";
    }

    function checkGuess() {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        const messageElement = document.getElementById('message');

        if (isNaN(userGuess)) {
            messageElement.textContent = "Please enter a valid number.";
            return;
        }

        if (userGuess < minNumber || userGuess > maxNumber) {
            messageElement.textContent = `Out of range! Please guess a number between ${minNumber} and ${maxNumber}.`;
            return;
        }

        attempts++;
        console.log(`Attempt ${attempts}: User guessed ${userGuess}`);

        if (userGuess === targetNumber) {
            messageElement.textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
        } else if (userGuess < targetNumber) {
            if (targetNumber - userGuess > 10) {
                messageElement.textContent = "📉 Too small! Try a much higher number.";
            } else {
                messageElement.textContent = "↓ Small! Try a slightly higher number.";
            }
        } else {
            if (userGuess - targetNumber > 10) {
                messageElement.textContent = "📈 Too high! Try a much lower number.";
            } else {
                messageElement.textContent = "↑ High! Try a slightly lower number.";
            }
        }
    }

