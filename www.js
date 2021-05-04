require('./commons'); // to load .env
const app = require('./router');

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`App listening to port ${port}`);
});