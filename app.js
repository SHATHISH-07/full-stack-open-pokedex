const express = require('express')
const app = express()
const path = require('path')

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
