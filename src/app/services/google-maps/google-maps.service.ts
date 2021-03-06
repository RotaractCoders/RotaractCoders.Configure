import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GoogleMapsService {

  constructor(private http: Http) { }

  pesquisar(endereco: string) {

    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + endereco + '&key=AIzaSyBPBrFEfACP3kpKHNbIptv1YnXk6S4sl8E')
      .map(res => res.json());
  }


}
