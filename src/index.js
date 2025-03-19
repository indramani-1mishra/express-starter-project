const express = require('express');
const serverConfig = require('./config/serverconfig.js');
const  {connectdb}  = require('./config/dbconfig.js');
const { apirouter } = require('./routes/apiroutes.js');

const { PORT } = serverConfig;  

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apirouter)


app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT}`);
    connectdb();
});
