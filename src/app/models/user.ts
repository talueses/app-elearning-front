
export interface User {
    id?: number;
    email: string;
    passwordUpdated?: boolean;
    exp?: number;
    role?: string;
    lastname: string;
    name: string;
    idNumber: number;
    phone: number;
    birthday: Date;
    address: string;
    id_empresa?: number;
}