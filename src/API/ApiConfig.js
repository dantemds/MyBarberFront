import axios from "axios";

const Api = () => {
    return axios.create({
        // baseURL: 'http://apibarber.vps-kinghost.net:443/api/v1'
        //https://api.minha-barbearia.online
        baseURL: 'https://api.minha-barbearia.online/api/v1'
    })
}

export const Temporario = () => {
    return axios.create({
        // baseURL: 'http://apibarber.vps-kinghost.net:443'
        //https://api.minha-barbearia.online
        baseURL: 'https://api.minha-barbearia.online'
    })
}

// const token = window.localStorage.getItem('token')

// if (token) {
//     console.log(token)
//     Api.defaults.headers.authorization = `Bearer ${token}`
// }

export default Api