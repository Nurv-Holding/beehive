const express = require('express')
const path = require('path');

const app = express();

const webapp = path.resolve();
app.use(express.static(path.join(webapp, '/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(webapp, '/build/index.html'))
);

app.listen(4005, () => {
  console.log('listening on port 4005');
});