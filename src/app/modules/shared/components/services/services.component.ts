import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  events: any;
  environment = environment.api_url;

  constructor(private cmsService: CmsServiceService, private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.getEventServices();
  }


  private getEventServices() {
    this.cmsService.getEventServices().subscribe((data: any) => {
      if (data.success) {
        this.events = data.data;
      } else {
        this.toaster.error(data.message)
      }
    })
  }
}
