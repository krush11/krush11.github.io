const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;

app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log(`Error:\n ${err}`);
        return;
    }
    console.log(`Server up and running successfully.\nListening to port ${port}`);
});
