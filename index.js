require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/GCP_API', (req, res) => {
	res.status(200).json({ msg: process.env.GCP_API_KEY });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started at port ' + PORT));
