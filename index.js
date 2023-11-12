document.querySelectorAll('.number').forEach(rating => {
    rating.addEventListener('click', () => {
        rating.classList.toggle('selected');
    })
})

console.log('this works')