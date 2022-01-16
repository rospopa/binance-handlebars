import fetch from 'node-fetch';
import express from 'express';
import { engine } from 'express-handlebars';

const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', async (req, res) => {
  const data = await fetch("https://api.binance.com/api/v3/ticker/price").then(res => res.json())
  res.render('home', {
    items: data
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})