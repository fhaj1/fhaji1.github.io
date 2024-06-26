document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('#stars span');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('selected');
            }
        });
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        const description = document.getElementById('description').value;
        if (selectedRating && description) {
            document.getElementById('feedbackRating').innerText = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);
            document.getElementById('feedbackDescription').innerText = description;
            document.getElementById('feedback').style.display = 'block';
        } else {
            alert('Please provide a rating and description.');
        }
    });
});
