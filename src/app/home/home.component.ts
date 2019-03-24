import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.services';
import { Offer } from '../shared/offers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService]
})
export class HomeComponent implements OnInit {

  private offers: Offer[];

  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.offerService.getOffers()
      .then((offers: Offer[]) => { this.offers = offers; },
            (status: any) => { console.log(status); });
  }
}
