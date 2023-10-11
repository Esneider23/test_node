const express = require('express');
const config = require('./conf');
const app = express()

app.set('port', config.port);
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(app.get('port'), () =>{
    console.log(`Server on http://localhost:${app.get('port')}`)
})