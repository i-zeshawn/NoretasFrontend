import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent implements OnInit {

  constructor(private cmsService: CmsServiceService, private toaster: ToastrService) {
  }

  ngOnInit(): void {
  }


}
