

type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}