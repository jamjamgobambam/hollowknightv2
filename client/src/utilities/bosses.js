import BossAPI from '../services/BossAPI'

const fetchBosses = async () => {
    return await BossAPI.getAllBosses()
}

const fetchBossById = async (id) => {
    return await BossAPI.getBoss(id)
}

export default {
    fetchBosses,
    fetchBossById
}