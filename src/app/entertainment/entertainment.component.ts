import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.services';
import { Offer } from '../shared/offers.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  providers: [OffersService]
})
export class EntertainmentComponent implements OnInit {

  private offers: Offer[];

  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.offerService.getOffersByCategory('diversao')
      .then((offers: Offer[]) => { this.offers = offers; })
      .catch((status: any) => { console.log(status); });
  }

}
