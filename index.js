const ratings = document.querySelectorAll('[data-rating');
const rated = document.querySelector('#rating-selected')
let ratedContent = document.querySelector(.select)


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(rating => {
            rating.classList.remove('select')
        })
        rating.classList.add('select')
        rated.textContent = ratedContent
    
    })
})


function changeState() {
    let initialState = document.querySelector('.rating-state')
    let thankYouState = document.querySelector('.thank-you-state')

    initialState.classList.add('hidden');
    thankYouState.classList.remove('hidden')
}

