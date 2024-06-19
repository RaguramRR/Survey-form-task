// Selecting all star elements
const stars = document.querySelectorAll('.star');

stars.forEach(function(star) {
    star.addEventListener('click', function() {
        // Get the clicked star's data-value attribute
        const rating = parseInt(star.getAttribute('data-value'));

        // Display the selected rating
        document.getElementById('rating-value').textContent = `You rated this ${rating} stars.`;

        // Mark all stars up to the clicked one as active
        stars.forEach(function(innerStar) {
            if (parseInt(innerStar.getAttribute('data-value')) <= rating) {
                innerStar.classList.add('active');
            } else {
                innerStar.classList.remove('active');
            }
        });
    });
});
