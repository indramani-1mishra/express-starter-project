const express = require('express');
const serverConfig = require('./config/serverconfig.js');

const { PORT } = serverConfig;  

const app = express();

app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT}`);
});
