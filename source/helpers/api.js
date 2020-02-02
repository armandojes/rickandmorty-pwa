// archivo de conexion al API
// aqui se definen todos los metodos disponibles

import axios from 'axios'
const urlApi = 'https://rickandmortyapi.com/api'

async function connect (config) {
  config.url = `${urlApi}${config.url}`
  config.method = config.method || 'GET'
  try {
    var response = await axios(config)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const api = {
  characters: {
    getSingle (idCharacter) {
      return connect({ url: `character/${idCharacter}` })
    }
  }
}

export default api
