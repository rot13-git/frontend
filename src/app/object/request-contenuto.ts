export class RequestContenuto{
    private libro_isbn:BigInteger;
    private tag:string;
    private titolo:string;
    private contenuto:string;

    public getLibroisbn(): BigInteger
 {
        return this.libro_isbn;
    }

    public setLibroisbn(libroisbn: BigInteger
) {
        this.libro_isbn = libroisbn;
    }

    public getTag(): string
 {
        return this.tag;
    }

    public setTag(tag: string
) {
        this.tag = tag;
    }

    public getTitolo(): string
 {
        return this.titolo;
    }

    public setTitolo(titolo: string
) {
        this.titolo = titolo;
    }

    public getContenuto(): string {
        return this.contenuto;
    }

    public setContenuto(contenuto: string) {
        this.contenuto = contenuto;
    }




}