import { Component, OnInit } from '@angular/core';
import { IBusiness } from '../models/ibusiness';
import { BizdireService } from '../services/bizdire.service';

@Component({
  selector: 'app-biz-directory',
  templateUrl: './biz-directory.component.html',
  styleUrls: ['./biz-directory.component.css']
})
export class BizDirectoryComponent implements OnInit {
listOfBusinesses: IBusiness[] = [];
onFlyBusinessList = null;
  constructor(private busService: BizdireService) { }

  ngOnInit() {
    this.getAllBusinesses();
  }

  getAllBusinesses() {
    return this.busService.getAllBusinesses()
    .subscribe(res => {
      console.log(res, 'List Of Items');
      this.listOfBusinesses = res;
    },
    error => {
      console.log(error);
    });
  }
}
