import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './shared/offers.model';

@Injectable()
export class OffersService {

    constructor(private http: HttpClient) { }

    private status = true;

    public getOffers(): Promise<Offer[]> {
        return this.http.get<Offer[]>('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((data) => data);
    }

    public getOffersByCategory(category: string): Promise<Offer[]> {
        return this.http.get<Offer[]>(`http://localhost:3000/ofertas?categoria=${category}`)
            .toPromise()
            .then((data) => data);
    }

    public getOfferById(id: number): Promise<Offer> {
        return this.http.get<Offer>(`http://localhost:3000/ofertas/${id}`)
            .toPromise()
            .then((data) => data);
    }
}
