const express = require('express')
const path = require('path');

const app = express()
const port = 3001

app.use(express.static(path.join(__dirname)));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`App is live on port ${port}!`))
