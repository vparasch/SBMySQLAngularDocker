export class Addresses {
    id: number;
    workAddress?: string;
    homeAddress?: string;

    constructor(id: number, workAddress?: string, homeAddress?: string){
        this.id = id;
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
    }
}
