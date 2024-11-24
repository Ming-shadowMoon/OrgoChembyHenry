// Function to check fill-in-the-blank answers
function checkFillBlank(inputId, correctAnswer) {
    const input = document.getElementById(inputId);
    const feedback = input.nextElementSibling;
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = '✔ Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = '✘ Try Again!';
        feedback.className = 'feedback wrong';
    }
}
// Function to check the selected multiple-choice answer
function checkMultipleChoice(button) {
    // Find the parent section and locate the selected choice
    const section = button.parentElement;
    const selectedChoice = section.querySelector('.choice.selected');
    const feedback = section.querySelector('.feedback');

    // Check if an answer has been selected
    if (!selectedChoice) {
        feedback.textContent = 'Please select an answer!';
        feedback.className = 'feedback wrong';
        return;
    }

    // Check the correctness of the selected answer
    const isCorrect = selectedChoice.dataset.status === 'correct';
    if (isCorrect) {
        feedback.textContent = '✔ Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = '✘ Try Again!';
        feedback.className = 'feedback wrong';
    }
}

// Add click event listener to answer choices for selection
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected class from all choices in the current section
        const section = button.parentElement.parentElement;
        section.querySelectorAll('.choice').forEach(choice => choice.classList.remove('selected'));

        // Add selected class to the clicked button
        button.classList.add('selected');
    });
});
