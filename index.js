const ratings = document.querySelectorAll('[data-rating');
let text = document.querySelector(".select").innerHtml;


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(rating => {
            rating.classList.remove('select')
        })
        rating.classList.add('select')   
        document.getElementById('rating-selected').textContent = text 
    })
})




function changeState() {
    let initialState = document.querySelector('.rating-state')
    let thankYouState = document.querySelector('.thank-you-state')

    initialState.classList.add('hidden');
    thankYouState.classList.remove('hidden')
}

