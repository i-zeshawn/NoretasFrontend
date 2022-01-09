import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.css']
})
export class PagesHeaderComponent implements OnInit {
  @Input('current_route') route_name: string = '';
  page_title: string = 'Page';

  constructor() {
  }

  ngOnInit(): void {
    this.checkRoutes();
  }

  private checkRoutes() {
    if (this.route_name == '/about') {
      this.page_title = 'About Us';
    }
  }
}
