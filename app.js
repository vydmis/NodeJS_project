const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Serveris veikia adresu http://localhost:${PORT}`);
});