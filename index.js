document.querySelectorAll('.number').forEach(rating => {
    rating.addEventListener('click', () => {
        rating.classList.remove('select');
        rating.classList.add('select')
    })
})


function changeState() {
    let initialState = document.querySelector('.rating-state')
    let thankYouState = document.querySelector('.thank-you-state')

    initialState.classList.add('hidden')
    thankYouState.classList.remove('.hidden')
}