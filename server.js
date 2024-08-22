const express = require('express')
const { ConnectDb } = require("./db.config")
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

ConnectDb()

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  date: String
})

const EmpModel = mongoose.model("user", Schema)

app.post("/register", async (req, res) => {
  if (!req || !req.body) {
    return res.status(400).send({
      error: "Please send data "
    })
  }

  const { name, email, role, date } = req?.body;
  if (!name || !email || !role || !date) {
    return res.status(400).send({
      error: "All Filed are required"
    })
  }
  await EmpModel.create({
    name, email, role, date
  })
  return res.status(201).send({
    msg: "Employee register successfully"
  })
})

app.listen(PORT, () => {
  console.log(`The app listening on port ${PORT}`)
})