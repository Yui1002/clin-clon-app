const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/test', (req, res) => {
  console.log('invoking')
  res.send('Hello from server');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
