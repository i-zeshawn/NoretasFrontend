import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CmsServiceService {

  constructor(private http: HttpClient) {
  }

  getHeaderMenu() {
    return this.http.get(`${environment.api_url}cms/nav`);
  }

  getFeaturedCards() {
    return this.http.get(`${environment.api_url}cms/featured_cards`);

  }

  getEventServices() {
    return this.http.get(`${environment.api_url}cms/event_services`);
  }

  getClients() {
    return this.http.get(`${environment.api_url}cms/clients`);
  }

  submitContactForm(contact_form: any) {
    return this.http.post(`${environment.api_url}cms/contact_form`, contact_form);
  }
}
