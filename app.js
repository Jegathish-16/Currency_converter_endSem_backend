const express = require('express')
const app = express()
const PORT = 3500

app.get('/',(response, require) => {
    response.send("Its working...")
})

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`)) 