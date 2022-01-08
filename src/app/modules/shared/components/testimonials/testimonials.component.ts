import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  clients: any;
  environment = environment.api_url;

  constructor(private cmsService: CmsServiceService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.cmsService.getClients().subscribe((data: any) => {
      if (data.success) {
        this.clients = data.data;
      } else {
        this.toastr.error(data.message);
      }
    })
  }
}
