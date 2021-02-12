require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/GCP_API', (req, res) => {
	res.status(200).json({ msg: process.env.SECRET_MSG });
});

app.listen(3000, () => console.log('uber-ui-clone-backend'));
