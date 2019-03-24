export class Offer {
    public id: number;
    public categoria: string;
    public titulo: string;
    // tslint:disable-next-line:variable-name
    public descricao_oferta: string;
    public anunciante: string;
    public valor: number;
    public destaque: boolean;
    imagens: Array<object>;
}
