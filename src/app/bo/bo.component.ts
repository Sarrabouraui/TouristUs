import { Component, OnInit } from '@angular/core';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../model/hotel';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-bo',
  templateUrl: './bo.component.html',
  styleUrls: ['./bo.component.css']
})
export class BOComponent implements OnInit {

  et = ['1', '2', '3', '4', '5'];
  closeResult = '';
  // tslint:disable-next-line:ban-types
  listHotel: Hotel[];
  hotelObj = {
    id: '',
    title: '',
    desc: '',
    nbetoile: '',
    nblike: ''
  };
  constructor(private hotelService: HotelService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    /*this.hotelService.getHotel().subscribe(
      (data) => this.listHotel = data);*/
    this.hotelService.getHotel().subscribe(
      (data) => this.getLatestHotel());
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2(content, h) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.hotelObj = h;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  getLatestHotel(){
    this.hotelService.getHotel().subscribe((response) => {
      // @ts-ignore
      this.listHotel = response ;
    });
  }
  editHotel(h){
    this.hotelService.updateh(h).subscribe(() => {
      this.getLatestHotel();
    });
  }
  deleteHotel(h) {
    this.hotelService.delete(h).subscribe(() => {
      this.getLatestHotel();
    });
  }

}


