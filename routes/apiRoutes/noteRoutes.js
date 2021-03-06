const router = require('express').Router();
const { newNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

//seeing all the notes
router.get('/notes', (req, res) => {
    console.dir(notes);
    res.json(notes);
});

//creating new notes
router.post('/notes', (req, res) => {
    req.body.id =  notes.length.toString();

    if(!validateNote(req.body)){
        res.status(400).send('AYY YO!!! THIS IS NOT HOW YOU FORMAT A NOTE! fix it!');
    } else{
    const  note = newNote(req.body, notes);
    res.json(note);
    }
});

module.exports = router;