import { create } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import route from './routes/index.js';
import connectDB from './config/db/index.js';
import methodOverride from 'method-override';

//connect to database
connectDB();

const app = express();

app.use(methodOverride('_method'));
// static file middleware
app.use(express.static(path.join(import.meta.dirname, 'public')));
// http logger middleware
app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());




// template engine
const hbs = create({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(import.meta.dirname, 'resources', 'views'));

// route init
route(app);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})