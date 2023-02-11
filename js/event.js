
// First Section : Adding Style using Javascript ====================================================================

// Method: 1 -----------------------------------------------------------------------------

// Directly on html tag using onclick attribute 

// Method: 2 We will use this one most of the time --------------------------------------

function makeBlue() {
    document.getElementById("blue").style.backgroundColor = "#2563EB";
};

// Method: 3 -----------------------------------------------------------------------------

const makeTealButton = document.getElementById('btn-teal');
makeTealButton.onclick = makeTeal;

function makeTeal() {
    document.getElementById('teal').style.backgroundColor = '#0D9488';
};

// Method: 4 -----------------------------------------------------------------------------

const makeGreenButton = document.getElementById('btn-green');
makeGreenButton.addEventListener('click', makeGreen);

function makeGreen() {
    document.getElementById('green').style.backgroundColor = '#16A34A';
};

// Method: 5 -----------------------------------------------------------------------------

const makeYellowButton = document.getElementById('btn-yellow');

makeYellowButton.addEventListener('click', function makeYellow() {
    document.getElementById('yellow').style.backgroundColor = '#CA8A04';
});

// Method: 6 We will use this one most of the time --------------------------------------

document.getElementById('btn-orange').addEventListener('click', function () {
    document.getElementById('orange').style.backgroundColor = '#EA580C';
})

// Second Section : Change the text =================================================================================

function changeText() {
    document.getElementById('change-me').innerText = 'This is new text.'
}

// third section : add ==============================================================================================

document.getElementById('add-comment').addEventListener('click', function () {
    // where to add 
    const blogArea = document.getElementById('blog-area');

    // what to add 

    const comment = document.createElement('h5');

    const textArea = document.getElementById('comment');

    comment.innerText = textArea.value;
    blogArea.appendChild(comment);
    textArea.value = '';

});

// fourth section : delete with validation ============================================================================

document.getElementById('input-text').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function () {
    const deleteText = document.getElementById('delete-text');
    deleteText.style.display = 'none';
})

// fifth section : event bubble =========================================================================================

document.getElementById('aam').addEventListener('click', function (event) {
    console.log("aam clicked")
    event.stopPropagation();
})
document.getElementById('li-container').addEventListener('click', function () {
    console.log("ul clicked")
})
document.getElementById('ul-container').addEventListener('click', function () {
    console.log("div clicked")
})

// sixth section : event deligate ========================================================================================

document.getElementById('item-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

const addLi = document.getElementById('add-btn');
addLi.addEventListener('click', function(){
    const itemContainer = document.getElementById('item-container');

    const newListItem = document.createElement('li');
    newListItem.innerText = "New List Item";

    itemContainer.appendChild(newListItem);
})

