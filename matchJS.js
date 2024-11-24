let firstSelectedCard = null;

// Add event listeners to all cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => handleCardSelection(card));
});

function handleCardSelection(card) {
    // Ignore clicks on already matched (hidden) cards
    if (card.classList.contains('hidden')) return;

    // If no card is currently selected, store the first card
    if (!firstSelectedCard) {
        firstSelectedCard = card;
        card.classList.add('selected');
    } else {
        // Check if the selected card matches the first card
        const isMatch = card.dataset.match === firstSelectedCard.dataset.match;

        if (isMatch && card !== firstSelectedCard) {
            // If matched, hide both cards
            card.classList.add('hidden');
            firstSelectedCard.classList.add('hidden');
            displayFeedback('Correct! Good job!', true);
        } else {
            // If not matched, show "Try Again" feedback
            displayFeedback('Try Again!', false);
        }

        // Clear the selection
        firstSelectedCard.classList.remove('selected');
        firstSelectedCard = null;
    }
}

// Function to display feedback
function displayFeedback(message, isCorrect) {
    const feedback = document.querySelector('.feedback');
    feedback.textContent = message;
    feedback.style.color = isCorrect ? '#388e3c' : '#d32f2f';
}
