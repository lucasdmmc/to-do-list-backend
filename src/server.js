require("express-async-errors")
const express = require('express')
const routes = require("./routes")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      statusCode: error.message
    })
  }

  console.error(error)
  return response.status(500).json({
    message: "error",
    statusCode: "Internal server error"
  })
})


const PORT = 3000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))