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
    return this.http.get(`${environment.api_url}nav`);
  }

}
