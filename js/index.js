console.log('Welcome to notes app ');
showNotes();

let addBtn = document.getElementById("addBtn");
let delBtn = document.getElementById("delBtn");
// if user adds a note then add it to the localstorage

addBtn.addEventListener("click", (e) => {
    console.log('Button is cliked');
    let addText = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    console.log(notesObj);
    console.log(addText.value);
    addText.value = "";
    showNotes();
})

// function to show elements from LocalStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        </div>
        `
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h1> Nothing to show! Use "Add a Note" section above to add a Note </h1>`;
    }
}
// Function to delete the Notes
function delNote(index) {
    console.log('Deleting the ' + index + " Note");
    let notes = localStorage.getItem("notes");
    // console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    console.log(notesObj);
    showNotes();

}
let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", () => {
    let inputVal2 = searchTxt.value;
    let inputVal = searchTxt.value.toLowerCase();
    // console.log('Input Event Fired ' + inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    console.log(noteCards);

    Array.from(noteCards).forEach((ele) => {
        let cardtxt = ele.getElementsByTagName("p")[0].innerText;
        let cardtxt2 = cardtxt.toLocaleLowerCase();
        if (cardtxt2.includes(inputVal)) {
            ele.style.display = "block";
        }
        else if (cardtxt.includes(inputVal2)) {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }
        // console.log(cardtxt);

    })
})

// further features->
/*1. add title
2 add note as important
3 separate notes by user
4 sync and host to web server

*/
