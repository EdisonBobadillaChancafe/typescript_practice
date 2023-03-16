
import axios from "axios"
console.log('prueba')

const pokemon = async () => {
    const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${1}`)
    console.log(resp)
    return resp
}

pokemon().then((r) => { console.log(r) })