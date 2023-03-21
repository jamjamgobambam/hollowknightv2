import express from 'express'
import path from 'path'

const bossRouter = express.Router()

bossRouter.get('/bosses/:id', (req, res) => {
    res.status(200).sendFile(path.resolve('public', 'boss.html'))
})

export default bossRouter