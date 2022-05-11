const express = require('express');
const router = require('./router');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(router);
app.listen(PORT, () => {
	console.log(`Aplicação está ouvindo na porta${PORT}`);
});