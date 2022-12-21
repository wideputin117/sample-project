// we have made an register route
const express = require('express')
const { route } = require('../app')
const router = express.Router()

router.post('/user', (req, res)=>{
    const body = req.body

res.json({
    confirmation: "success",
    route: "register",
    data: body
});
})

module.exports = router