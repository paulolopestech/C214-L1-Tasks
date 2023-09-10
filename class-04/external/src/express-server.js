import express from 'express';
import path from 'path';

const app = express();
const port = 8081;

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public/')));
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});