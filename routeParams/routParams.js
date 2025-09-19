import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("Selamat")
})

// route params
app.get('/users/:id', (req, res) => {
  res.send('user ID:' + req.params.id)
})

// Multiple Route Params
app.get('/users/:id/books/:bookId', (req, res) => {
  res.send('user ID : ' + req.params.id + ', Book Id :'+ req.params.bookId)
})

app.listen(2015, () => console.log("hashiru"))