import axios from 'axios'
import config from '../public/config'

export function fundAccount(destination, signedAttemptObject) {
  return axios.post(`${process.env.BASE_URL}actors/stellar_faucet/transfer`, { args: { destination, signed_attempt_object: signedAttemptObject } })
}

export function getUserData (doubleName) {
  return axios.get(`${config.botBackend}/api/users/${doubleName}`)
}