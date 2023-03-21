import express from 'express'
import pool from './database.js'

const router = express.Router()

const getBosses = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM bosses ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

const getBossById = async (req, res) => {
    try {
        const bossId = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM bosses WHERE id=$1', [bossId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

router.get('/bosses', getBosses)
router.get('/bosses/:id', getBossById)

export default router