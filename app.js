// Import 3rd-party modules
const express = require('express');
const { engine } = require('express-handlebars');

// Import custom modules from library
const handlers = require('./lib/handlers');

const app = express();

// `req.body` is now accessible
app.use(express.urlencoded({ extended: true }));
// JSON payloads are now available for further processing
app.use(express.json());

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

app.get('/about', handlers.about);

app.get('/signup', handlers.signup);

app.get('/signin', handlers.signin);

app.get('/quiz', handlers.quiz);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});