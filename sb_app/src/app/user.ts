import { Addresses } from "./addresses";

export class User {
    id: number;
    name: string;
    surname: string;
    gender: string;
    birthdate: string;
    addresses: Addresses;

    constructor(id: number, name: string, surname: string, gender: string, birthdate: string, addresses: Addresses) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.addresses = addresses;
      }

}