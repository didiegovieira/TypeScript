

type User = {
    idUser: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    idUser: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}