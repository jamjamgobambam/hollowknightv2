import { request } from '../utilities/api'

const bossURL = '/api/bosses'

const getAllBosses = () => request('GET', bossURL)
const getBoss = (id) => request('GET', `${bossURL}/${id}`)

export default {
    getAllBosses,
    getBoss
}