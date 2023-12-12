import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x8495D25A2b1d5120C206b3EC5257CF6833aA2361'
)

export default instance