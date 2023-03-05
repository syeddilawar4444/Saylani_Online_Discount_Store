const express = require("express")
const router = express.Router()


router.get("/login", () => {
    console.log("loginApi")
})
module.exports = router