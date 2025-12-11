document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rating-form');
    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');

    

    ratingValue.textContent = ratingInput.value;

    

    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
        updateRatingColor(ratingValue, ratingInput.value);
    });

    form.addEventListener('input', () => {
        submitForm(); 

    });
});



function submitForm() {
    const form = document.getElementById('rating-form');
    const formData = new FormData(form); 

    const rating = formData.get('rating');
    const comments = formData.get('comments');

    

    

    const modal = document.getElementById('rating-modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); 

}



function updateRatingColor(element, value) {
    if (value >= 7) {
        element.style.color = '#00FF00'; 

    } else if (value >= 4) {
        element.style.color = '#FFA500'; 

    } else {
        element.style.color = '#FF0000'; 

    }
}
