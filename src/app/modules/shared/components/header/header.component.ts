import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nav_menus: any;

  constructor(private cmsService: CmsServiceService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getHeader();
  }

  private getHeader() {
    this.cmsService.getHeaderMenu().subscribe((data: any) => {
      if (data.success) {
        this.nav_menus = data.data;
      } else {
        this.toastr.error(data.message);
      }
    })
  }
}
