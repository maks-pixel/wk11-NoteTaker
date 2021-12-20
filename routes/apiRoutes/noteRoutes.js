const router = require('express').Router();
const { findById, newNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {

});

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