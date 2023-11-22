const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.listen(PORT, () => {`The App is running on port ${PORT}`})