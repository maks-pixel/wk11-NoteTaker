const fs =  require('fs');
const path = require('path');
const {v4 : uuidv4} = require('uuid')

//creating a note with a unique iD that is using npm package UUID 
function newNote(body, notesArray){
    const note = body;
    note.id = uuidv4()
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//making sure that the notes are formatted correctly before being pushed into the array
function validateNote(note){
    if(!note.title || typeof note.title !== 'string'){
        return false;
    }
    if(!note.text || typeof note.text !== 'string'){
        return false;
    }
    return true;
}

module.exports = {
    newNote,
    validateNote
};