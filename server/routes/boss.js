import express from 'express'
import path from 'path'

const bossRouter = express.Router()

bossRouter.get('/:id', (req, res) => {
    // console.log('in boss router')
    res.status(200).sendFile(path.resolve('../', 'public', 'boss.html'))
})

export default bossRouter