import express from 'express'

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
  res.json({
    pesan : "data berhasil diambil",
    data : [ 
      {id : 1, name : "Mehroo"},
      {id : 2, name : "Jermro"}
    ]
  })
})

app.post('/users', (req, res) => {
  const {name} = req.body
  res.json({
    pesan : "Data Berhasil ditambahkan ",
    data : {id : Date.now() , name : name}
  })
})

app.put('/users:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  res.json({
    pesan : "Update data .....",
    data : {id, name}
  })
})

app.delete('/users:id', (req, res) => {
  const {id} = req.params
  res.json({
    message : `User id : ${id} berhasil dihapus`
  })
})

app.listen(4000, () => console.log("Server Running"))