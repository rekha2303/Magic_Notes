console.log("hello");

//if user adds a note
showNotes();
let addbtn = document.getElementById('addbtn');

addbtn.addEventListener("click",function(e){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes")

    if(notes==null)
    {
        notesObj=[];

    }
    else{
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value= " ";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    
    if(notes==null)
    {
        notesObj=[];

    }
    else{
        notesObj = JSON.parse(notes);

    }
    let html="";
    notesObj.forEach(function(element, index){
       html +=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title"> Note ${index+1}</h5>
    <p class="card-text">${element} </p>
    <button id="${index}" onClick="deleteNotes(this.id)"  class="btn btn-primary">delete</button>
  </div>
</div> `;
    });
    console.log(html);
    let notesElm = document.getElementById("notes");
    if(notesObj.length!=0){
    notesElm.innerHTML= html;
    }
    else {
         notesElm.innerHTML = `Nothing to show use "Add a NOte" section above to add notes.`;
    }
}
//function to delete a note

function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    
    if(notes==null)
    {
        notesObj=[];

    }
    else{
        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchtxt');

let inputVal = search.value;
search.addEventListener("input",inputVal);
console.log('Input event fired', inputVal);
let notesCards = document.getElementsByClassName('noteCard');
Array.from(notesCards).forEach(function(element){
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if(cardtxt.includes(inputVal))
    {
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
})