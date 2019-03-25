import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../offers.services';
import { Offer } from '../shared/offers.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {

  private offer: Offer;

  constructor(private route: ActivatedRoute, private service: OffersService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.service.getOfferById(id)
      .then((offer: Offer) => { this.offer = offer; })
      .catch((status: any) => { console.log(status); });
  }

}
