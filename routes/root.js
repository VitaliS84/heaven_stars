const express = require('express')
const router = express.Router()
const path = require('path')

// '^/$' it means that route is only a slash
// so it could request just the slash or maybe just the slash index without the dot html or the user could request the full index.hlml which would also work
router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router