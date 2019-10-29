const express = require('express')
const router = express.Router()

router.get('/greeting', async (req, res) => {
  res.json({ greeting: 'Hello from shared api route!' })
})

module.exports = router
