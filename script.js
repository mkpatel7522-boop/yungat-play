let currentCoins = localStorage.getItem('yungat_coins');

if (currentCoins === null) {
    currentCoins = 1000;
    localStorage.setItem('yungat_coins', currentCoins);
} else {
    currentCoins = parseInt(currentCoins);
}

function updateDisplay() {
    document.getElementById('coin-balance').innerText = currentCoins;
}

updateDisplay();

const allPlayButtons = document.querySelectorAll('.play-btn');

allPlayButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        if (currentCoins >= 50) {
            currentCoins -= 50;
            localStorage.setItem('yungat_coins', currentCoins);
            updateDisplay();
            alert("50 coins deducted! Game is starting...");
        } else {
            event.preventDefault(); 
            alert("Insufficient coins to play!");
        }
    });
});

