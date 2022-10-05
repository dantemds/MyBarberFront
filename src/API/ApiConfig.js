import axios from "axios";

const Api = () => {
    return axios.create({
        // baseURL: 'http://apibarber.vps-kinghost.net:443/api/v1'
        baseURL: 'https://api.minha-barbearia.online'
    })
}

export const Temporario = () => {
    return axios.create({
        // baseURL: 'http://apibarber.vps-kinghost.net:443'
        baseURL: 'http://75.101.213.247:443'
    })
}

// const token = window.localStorage.getItem('token')

// if (token) {
//     console.log(token)
//     Api.defaults.headers.authorization = `Bearer ${token}`
// }

export default Api