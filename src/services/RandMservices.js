import { API_RM } from "../constants/Api.constatns";

// Servicio capa para comunicacion con API
// Se puede hacer en el Main pero es desprolijo

class RickAndMortyService{
//Estas funciones se comunican con API
async getAllCharacters(){
    const response = await fetch(API_RM.CHARACTERS());
    //Interceptor
    return response.json();
}

async getCharactersById(id){
    const response = await fetch(API_RM.CHARACTER_BY_ID(id));
    //Interceptor
    return response.json();
}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RickAndMortyService();