console.log('this is app .js');
// if user add a note added to the local storage
showNotes();
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById("addText")
    let addtitle = document.getElementById("addtitle")
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addText.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addText.value = "";
    addtitle.value = "";
    // console.log(notesobj);
    showNotes();
})
//function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
     <div  class=" notecard my-2 mx-2 card"  style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title"> ${element.title}</h5>
         <p class="card-text"> ${element.text} </p>
         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">delete note</button>
     </div>
 </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `nothing to show! use "Add a Note"section above to add notess`
    }
}
// function to delete a note
function deleteNote(index) {
    // console.log('i am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
let Search = document.getElementById('Searchtxt');
Search.addEventListener("input", function () {
    let inputval = Search.value.toLowerCase();
    // console.log('input event fired!', inputval);
    let notecards = document.getElementsByClassName('notecard')
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt);
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

















