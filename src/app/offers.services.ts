import { Offer } from './shared/offers.model';

export class OffersService {

    private offers: Offer[] = [
        {
            id: 1,
            categoria: 'restaurante',
            titulo: 'Super Burger',
            descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
            anunciante: 'Original Burger',
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/1/img1.jpg'},
                {url: '/assets/ofertas/1/img2.jpg'},
                {url: '/assets/ofertas/1/img3.jpg'},
                {url: '/assets/ofertas/1/img4.jpg'}
            ]
        },
        {
            id: 2,
            categoria: 'restaurante',
            titulo: 'Cozinha Mexicana',
            descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
            anunciante: 'Mexicana',
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/2/img1.jpg'},
                {url: '/assets/ofertas/2/img2.jpg'},
                {url: '/assets/ofertas/2/img3.jpg'},
                {url: '/assets/ofertas/2/img4.jpg'}
            ]
        },
        {
            id: 4,
            categoria: 'diversao',
            titulo: 'Estância das águas',
            descricao_oferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
            anunciante: 'Estância das águas',
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/3/img1.jpg'},
                {url: '/assets/ofertas/3/img2.jpg'},
                {url: '/assets/ofertas/3/img3.jpg'},
                {url: '/assets/ofertas/3/img4.jpg'},
                {url: '/assets/ofertas/3/img5.jpg'},
                {url: '/assets/ofertas/3/img6.jpg'}
            ]
        }
    ];

    private status = true;

    public getOffers(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            if (this.status) {
                resolve(this.offers);
            } else {
                reject({ statusCode: 404, message: 'not found' });
            }
        });
    }
}