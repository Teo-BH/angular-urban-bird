import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.services';
import { Offer } from '../shared/offers.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [OffersService]
})
export class RestaurantComponent implements OnInit {

  private offers: Offer[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory('restaurante')
      .then((offers: Offer[]) => { this.offers = offers; })
      .catch((status: any) => { console.log(status); });
  }

}
