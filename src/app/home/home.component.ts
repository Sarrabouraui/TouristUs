import { Component, OnInit } from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../model/hotel';
import {observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  listHotel: Object;
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotel().subscribe(
      (data) => this.listHotel = data);
  }

}
