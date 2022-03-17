
const express = require('express');
const app = express();
const PORT = proces.env.PORT || 3333


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))





app.listen(PORT, () => {
    console.log(`API server now on!`);
});