// To tell us what we're selecting
const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add Event Listener

/** The HTML document starts with the closedFace Emoji as the main element on screen
 * When you click the closedFace emoji, 
 * The event listener checks if the openFace emoji has
 * the class 'open' on it, if it does, it adds the class 'active' to the openFace 
 * element and removes * the class 'active' on the closedFace Emoji 
 * hence the openFace emoji shows up.
 * 
 * When you click again (on the now OpenFace emoji)
 * The event listener checks if the closedFace emoji has
 * the class 'closed' on it, which it has, and if it does, 
 * it adds the class 'active' to the closedFace 
 * element and removes * the class 'active' on the openFace Emoji 
 * now the closedFace emoji shows up.
 * 
 * This repeats and repeats as long as you click on the buttons
 * 
*/

closedFace.addEventListener('click', function(){
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    }
})

openFace.addEventListener('click', function() {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})

