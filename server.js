const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/proxy', async (req, res) => {
    const { url } = req.query;
    try {
        const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching content');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
