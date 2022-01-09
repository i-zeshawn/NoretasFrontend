import {Component, OnInit} from '@angular/core';
import {CmsServiceService} from "../../service/cms-service.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nav_menus: any;
  is_home: boolean = true;
  current_route: string = '';

  constructor(private cmsService: CmsServiceService, private toastr: ToastrService, private router: Router) {
    this.current_route = router.url;
    if (router.url == '/') {
      this.is_home = true;
    } else {
      this.is_home = false;
    }
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
