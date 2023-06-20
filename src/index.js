const express = require('express')
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
// const sass = require('node-sass');
// const fs = require('fs');

// sass.render({
//   file: __dirname + '/resources/scss/app.scss',
//   outputStyle: 'compressed'
// }, (err, result) => {
//   if (err) throw err;
//   fs.writeFileSync(__dirname + '/public/css/styles.css', result.css);
// });

const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')));

// Http logger middleware
app.use(morgan('combined')); 

// Template engine setup
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})