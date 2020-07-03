import { Component, OnInit } from '@angular/core';
import { IBusiness } from '../models/ibusiness';
import { BizdireService } from '../services/bizdire.service';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-biz-directory',
  templateUrl: './biz-directory.component.html',
  styleUrls: ['./biz-directory.component.css']
})
export class BizDirectoryComponent implements OnInit {
listOfBusinesses: IBusiness[] = [];
onFlyBusinessList = null;
showLoading = false;

  constructor(private busService: BizdireService, private spinner: NgxSpinnerService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.getAllBusinesses();
  }

  getAllBusinesses() {
    return this.busService.getAllBusinesses()
    .subscribe(res => {
      this.spinner.hide();
      this.listOfBusinesses = res;
    },
    error => {
      if (error.statusText === 'Unknown Error') {
        this.spinner.hide();
        this.toast.error('Unable to connect', 'RustlerX');
      }
    });
  }
}
