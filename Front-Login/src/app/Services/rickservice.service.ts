import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickserviceService {

  url = 'https://rickandmortyapi.com/api';
  vals = [0];
  @Input() valor: any 
  val= ""

  constructor(private http: HttpClient) { }



  obtenerPersonajes() {
    for(let x = 0; x <= 300; x++){
      this.vals.push(x);
    }
    return this.http.get(`${this.url}/character/${this.vals.toString()}`).toPromise();
    }
}
