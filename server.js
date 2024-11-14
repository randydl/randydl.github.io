import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.argv[2] || 8000;

app.use(express.static(__dirname));
app.listen(port, () => { console.log(`Server started on port ${port}`); });
