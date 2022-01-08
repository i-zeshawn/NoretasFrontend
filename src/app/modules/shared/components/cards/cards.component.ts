import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  featured_cards: any;
  right_featured_card: any;

  constructor(private cmsService: CmsServiceService, private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cmsService.getFeaturedCards().subscribe((data: any) => {
      if (data.success) {
        this.featured_cards = data.data.FeaturedCard;
        this.right_featured_card = data.data.RightFeaturedCard;
      } else {
        this.toaster.error(data.message);
      }
    })
  }
}
