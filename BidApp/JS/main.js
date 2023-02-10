let bids = [];

// Create a function that will add the array of bids to the element (1)
function showBidsOnPage() {
    //grab the element to write to
    const element = document.getElementById('bidDisplayArea');
    //add the message to the element
    element.textContent = bids;
}
// Create a function that will take the text in an input box and add it to the array of bids
function getInfoFromInput(sibling) {
    bids.push(document.getElementById(sibling).value);
}
// Add the function above to the click event of the “Place Bid” buttons 
function placeBid(buttonID) {
    let sidInput = document.getElementById(buttonID).previousElementSibling.id;
    const inputValue = getInfoFromInput(sidInput);
    sidInput.textContent = '0';
    showHighBidOnPage();
    showBidsOnPage();
    
    let elementsArray = document.querySelectorAll('.bidButton');
    elementsArray.forEach(element => element.classList.toggle('hidden'));
  

}
// Create a function that will save the array of bids to localStorage

// Create a function that will retrieve the array of bids from localStorage

function highBid() { 
    let largest = 0;
    for (let i = 0; i<=bids.length; i++) {
        if (parseInt(bids[i])>parseInt(largest)) {
            largest = bids[i];
        }
    }
    return largest;
}

function showHighBidOnPage() {
    //grab the element to write to
    const element = document.getElementById('highBidDisplayArea');
    //add the message to the element
    element.textContent = highBid();
}

function onPageLoad() {
    showBidsOnPage();
}

window.onload = onPageLoad;