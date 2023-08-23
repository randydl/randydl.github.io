const express = require('express');
const app = express();

const port = process.argv[2] || 6006;

app.use(express.static(__dirname));
app.listen(port, () => { console.log(`Server started on port ${port}`); });
