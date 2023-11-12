document.querySelectorAll('.number').forEach(rating => {
    rating.addEventListener('click', () => {
        rating.classList.toggle('select');
    })
})

console.log('this works')