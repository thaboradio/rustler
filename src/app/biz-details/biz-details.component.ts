import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BizdireService } from '../services/bizdire.service';
import { IBusiness } from '../models/ibusiness';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-biz-details',
  templateUrl: './biz-details.component.html',
  styleUrls: ['./biz-details.component.css']
})
export class BizDetailsComponent implements OnInit {
id;
business: IBusiness =  new IBusiness();

  constructor(private route: ActivatedRoute, private bizService: BizdireService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.route.paramMap
    .subscribe(params => {
      this.id = params.get('id');
      this.getDetails(this.id);
    },
    error => {
      console.error(error);
    });
  }

  getDetails(id) {
    this.bizService.getBusinessDetails(id)
    .subscribe(res => {
      this.spinner.hide();
      this.business = res;
      console.log(JSON.stringify(this.business));
    },
    error => {
      console.log(error);
    });
  }

}
