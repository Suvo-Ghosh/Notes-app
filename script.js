const container = document.querySelector('.container')
const paraContainer = document.querySelector('.para-container')

showNotes()
document.querySelector('button').addEventListener('click' , ()=>{
    let notesPara = document.createElement('p')
    notesPara.className = 'note-para'
    notesPara.setAttribute('contentEditable','true')  
    paraContainer.appendChild(notesPara)

    let deleteImg = document.createElement('img')
    deleteImg.src = "./Images/icons8-delete-100.svg"
    notesPara.appendChild(deleteImg)
})

paraContainer.addEventListener('click' , (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'P'){ 
        notes = document.querySelectorAll('.note-para')
        notes.forEach(ele => {
            ele.onkeyup = function(){
                updateStorage()   
            }
        });
    }
})

document.addEventListener('keydown' , (e)=>{
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})

function updateStorage(){
    localStorage.setItem('notesContainer',paraContainer.innerHTML)
}

function showNotes(){
    paraContainer.innerHTML = localStorage.getItem('notesContainer')
}
