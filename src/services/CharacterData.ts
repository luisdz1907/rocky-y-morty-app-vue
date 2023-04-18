import type { ResponseCharacterModel } from "@/models/ResponseCharacterModel";


export async function getAllCharacter(): Promise<ResponseCharacterModel> {
    return fetch('https://rickandmortyapi.com/api/character/').then(_resp => _resp.json())
}

export async function getFilterCharacter(filter: string, status: string): Promise<ResponseCharacterModel> {
    return fetch(`https://rickandmortyapi.com/api/character/?${filter}=${status}`).then(_resp => _resp.json())
}