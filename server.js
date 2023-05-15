const express = require('express');
const app = express();
app.get('/working', (req, res) => {
    console.log('working');
    return res.status(200).json({
        sucess: true,
        output: 'Working hai'
    });
});
app.listen(5000, () => {
    console.log('This server is running on port http://127.0.0.1:5000');
});
