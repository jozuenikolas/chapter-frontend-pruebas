export class Personaje {
    _id?: string;
    title: string;
    body: string;
    image: string;
    category: string;
    idAuthor: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor() {
        this.title = "";
        this.body = "";
        this.image = "";
        this.category = "main";
        this.idAuthor = "31";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}