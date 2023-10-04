import express from 'express'
const router = express.Router()

router.get('/router', (req,res)=>{
    res.send('oi')
})

module.exports = router