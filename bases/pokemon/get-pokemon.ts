import axios, { isCancel, AxiosError } from 'axios';

const pokemon = async () => {
    const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${1}`)
    return resp
}

pokemon().then((r) => { console.log(r) })