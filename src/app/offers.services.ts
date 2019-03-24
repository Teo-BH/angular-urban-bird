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
}
