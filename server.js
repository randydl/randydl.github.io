import express from 'express';

const app = express();
const port = process.argv[2] || 8000;

app.use(express.static(__dirname));
app.listen(port, () => { console.log(`Server started on port ${port}`); });
