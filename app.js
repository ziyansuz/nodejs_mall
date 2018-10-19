require('express-async-errors');
require('./db')
let express = require('express');
let app = express();
let morgan = require('morgan');

app.use(require('./middleware/reponse_md'));
app.use(morgan('combined'))
app.use(express.json())
app.use((err, request, response, next) => {
    response.fail(err)
})
app.listen(8000)