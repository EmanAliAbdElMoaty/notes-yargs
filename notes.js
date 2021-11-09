const fs = require('fs')

// const addNote = (title,body) =>{
//     const notes = loadNotes() // [{title:'title1',body:'body1'}]
//     notes.push({    
//         title:title,  //[{title:'title1',body:'body1'},{title:'title2',body:'body2'}]
//         body:body
//     })
//     saveNotes(notes)

// }
const addNote = (title,body)=>
{
    const notes = loadNotes()
    const duplicateTitles = notes.filter((note)=>
    {
        return note.title ===title
    })
    console.log(duplicateTitles)
    if(duplicateTitles.length===0)
    {
        notes.push({
          title:title,body:body
        })
        saveNotes(notes)
        console.log('save successfuly')
    }
    else
    {
        console.log('Error not saved')
    }
}

const loadNotes = () =>{
    // error --> file begining of program doesnot exist
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer)

    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)  // [{"title":'aaa',"body":'aasd'},{"title":'titl2',"body":'body2'}]
    fs.writeFileSync('notes.json',saveData)
}
const removeNote = (title)=>
{
    const notes = loadNotes()
    const notesTokeep = notes.filter((note)=>
    {
        return note.title !==title
    })
    console.log(notesTokeep)
    saveNotes(notesTokeep)
    console.log('Removed')
}
//////////////////////////////////////////////////////////////
// read
const readNote =(title)=>
{
    const notes = loadNotes()
    const note =notes.find((note)=>
    {
        return note.title === title
    })
    console.log(note)
    if(note)
    {
        console.log(note.body)
    }
    else
    {
       console.log('Not founded')
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// list

const  listNote =()=>
{
    const notes = loadNotes()
    notes.forEach((notes) =>
     {
        console.log(notes.title)
    })
}


module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


