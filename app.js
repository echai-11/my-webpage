const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT
const publicPath = path.resolve(__dirname, "public");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => {
console.log('Server is up on port 3000.')
})