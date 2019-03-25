import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './shared/offers.model';
import { URL_API } from './app.api';

@Injectable()
export class OffersService {

    constructor(private http: HttpClient) { }

    public getOffers(): Promise<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}?destaque=true`)
            .toPromise()
            .then((data) => data);
    }

    public getOffersByCategory(category: string): Promise<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}?categoria=${category}`)
            .toPromise()
            .then((data) => data);
    }

    public getOfferById(id: number): Promise<Offer> {
        return this.http.get<Offer>(`${URL_API}/${id}`)
            .toPromise()
            .then((data) => data);
    }
}
