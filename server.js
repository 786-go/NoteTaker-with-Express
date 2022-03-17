const { notesdb } = require('./Develop/db/db.json');
const express = require('express');
const app = express();










app.listen(3500, () => {
    console.log(`API server now on!`);
});