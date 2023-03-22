import express from 'express'
import path from 'path'

const bossRouter = express.Router()

bossRouter.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve('public', 'index.html'))
})

export default bossRouter