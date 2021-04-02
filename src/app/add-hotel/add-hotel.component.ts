import { Component, OnInit } from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../model/hotel';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  et = ['1', '2', '3', '4', '5'];
  hotel: Hotel;
  // tslint:disable-next-line:ban-types
  listHotel: Object;
  constructor(private hotelService: HotelService,
              private modalService: NgbModal) {
    this.hotelService.getHotel().subscribe(
      (data) => this.getLatestHotel());
  }

  ngOnInit(): void {
    this.hotel = new Hotel();
  }
  /*showmyform(test){
    console.log(test.value);
  }*/

  getLatestHotel(){
    this.hotelService.getHotel().subscribe((response) => {
      this.listHotel = response ;
    });
  }

  add(){
    this.hotelService.addHotel(this.hotel).subscribe(() => {
      console.log('user added');
      this.getLatestHotel();
    });
  }

}
