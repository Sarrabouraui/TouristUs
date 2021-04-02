import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../model/hotel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url = 'http://localhost:3000/hotels';

  constructor(private http: HttpClient) {
  }

  getHotel() {
    return this.http.get(this.url);
  }

  addHotel(h: Hotel) {
    return this.http.post(this.url, h);
  }

  delete(h){
    return this.http.delete('http://localhost:3000/hotels/' + h.id);
  }

  updateh(hotel) {
    return this.http.put('http://localhost:3000/hotels/', hotel.id, hotel);
  }


}
