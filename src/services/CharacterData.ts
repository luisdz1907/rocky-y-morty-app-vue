import type { CharacterModel } from "@/models/CharacterModel";


export async function getAllCharacter(): Promise<CharacterModel[]> {
    return fetch('https://rickandmortyapi.com/api/character/').then(_resp => _resp.json()).then(_data => _data.results)
}

export async function getFilterCharacter(filter: string, status: string): Promise<CharacterModel[]> {
    return fetch(`https://rickandmortyapi.com/api/character/?${filter}=${status}`).then(_resp => _resp.json()).then(_data => _data.results)
}
export async function getSingleCharacter(id:any): Promise<CharacterModel> {
   const data =  fetch(`https://rickandmortyapi.com/api/character/${id}`).then(_resp => _resp.json())
    return data
}