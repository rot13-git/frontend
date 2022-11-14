import { Libro } from "./libro";
import { Utente } from "./utente";

export class Contenuto{
    id:BigInteger;
    tag:String[];
    titolo:String;
    contenuto:string;
    userEntity:Utente;
    libroEntity:Libro;

    getContenuto(){
        return this.contenuto;
    }
}