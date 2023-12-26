const express = require('express')
const app = express()
const port = 3000
//route arrow function
app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
// 127.0.0.1 - localhost
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.get("/test", (req, res) => {
    res.send(`Test on ${port}`)
})

app.listen(port, () => {
    console.log(`Testing in port: ${port}`)
})