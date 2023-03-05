const express = require("express")
const app = express()
const cors = require("cors")

console.log("server")


app.use(cors())
const port = process.env.PORT || 4001
app.listen(port, () => {
    console.log("server is running", port)
    // console.log("server is running", port)
})

app.use("/", require("./routes/index.js"))


