const { calculateComplexity } = require("./PasswordComplexity")
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.post('/check-complexity', (req, res) => {
    const body = req.body.password;
  res.send(calculateComplexity(body));
})

app.listen(port, () => {
  console.log(`App escuchando en ${port}`)
})