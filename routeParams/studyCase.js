import express from 'express'

const app = express()

app.get('/' , (req, res) =>  {
  res.json({
    pesan : "Welcome to brum brum"
  })
})

app.get('/articles', (req, res) => {
  res.json({
    pesan : "You open all article"
  })
})

app.get('/articles/:slug', (req,res) => {
  const slug = req.params.slug
  res.json({
    pesan : `Detail Article dengan Subjudul : ${slug}`
  })
})

app.get('/users', (req, res) => {
  res.json({
    pesan : "Data User sedang di ambil"
  })
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  res.json({
    pesan : `Kamu adalah user dengan ID : ${id}`
  })
})

app.delete("/users/:id" , (req, res) => {
  const id = req.params.id
  res.json({
    pesan : `kamu telah berhasil menghapus user ID : ${id}`
  })
})

app.listen(4, () => console.log("begat"))