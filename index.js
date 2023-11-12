
// select the span holding the rating numbers
const ratings = document.querySelectorAll('[data-rating');

//for each span rating, listen for a click, remove all classes of .select that change the bg color to indicate selection, then add it back to the one clicked. 
//also output the rating clicked inner text content into the span on the thank you page with the id #rating-selected
ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(rating => {
            rating.classList.remove('select')
        })
        rating.classList.add('select')   

        document.getElementById('rating-selected').textContent = rating.textContent
    })
})


//allow the button to move to the next page and add/remove the class .hidden from the respective divs
function changeState() {
    let initialState = document.querySelector('.rating-state')
    let thankYouState = document.querySelector('.thank-you-state')

    initialState.classList.add('hidden');
    thankYouState.classList.remove('hidden')
}

