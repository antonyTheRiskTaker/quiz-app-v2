// Import 3rd-party modules
const express = require('express');
const { engine } = require('express-handlebars');

// Import custom modules from library
const handlers = require('./lib/handlers');

const app = express();

// Configure handlebars view engine
app.engine('.hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Route handlers
app.get('/', handlers.home);

app.get('/signup', handlers.signup);

app.get('/signin', handlers.signin);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});