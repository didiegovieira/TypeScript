

type Useer = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: Useer = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}