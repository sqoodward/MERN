const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect to databases
connectDB();

//init middleware (bodyparser for http POST req)
app.use(express.json({ extended: false }));

//standard http routing (.get)
app.get('/', (req, res) => res.send('API running'));

//what is this routes thing? this is an express middleware to allow you to modularize the routing (aka have it in a different file/folder)
//that makes it way cleaner. This is the reason of using app.use instead of app.get, app.get is a default routing method, unless
//your route is in a different folder, then you'd want to use the route middleware. therefore import it via app.use
//define routes (you may put url route all here, or in the routes folder..., you may also split it)
//if you split it...the route here goes first, then the routes folder
//like /api/ HERE, then /users/ THERE.

app.use('/api/users/', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/test', require('./routes/api/test'));
app.use('/api/display', require('./routes/api/display'));
app.use('/api/data', require('./routes/api/data'));
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
