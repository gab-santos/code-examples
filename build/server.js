const express = require('express')
const { resolve } = require('path')

const app = express()

const baseDir = resolve(__dirname, 'build')

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }))

const port = 4000

app.listen(port, () => console.log(`Server started on port ${port}`))
