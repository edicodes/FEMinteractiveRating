const ratings = document.querySelectorAll('[data-rating');
const rated = document.querySelector('#rating-selected')


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(rating => {
            rating.classList.remove('select')
        })
        rating.classList.add('select')
        rated.textContent(rating)
    
    })
})


function changeState() {
    let initialState = document.querySelector('.rating-state')
    let thankYouState = document.querySelector('.thank-you-state')

    initialState.classList.add('hidden');
    thankYouState.classList.remove('hidden')
}

