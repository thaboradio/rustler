import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BizdireService } from '../services/bizdire.service';
import { IBusiness } from '../models/ibusiness';
import { NgxSpinnerService } from 'ngx-spinner';
import { BizcategoryService } from '../services/bizcategory.service';
import { Bizcategory } from '../interfaces/bizcategory';


@Component({
  selector: 'app-biz-details',
  templateUrl: './biz-details.component.html',
  styleUrls: ['./biz-details.component.css']
})
export class BizDetailsComponent implements OnInit {
id;
business: IBusiness =  new IBusiness();
category;
  constructor(private route: ActivatedRoute, private bizService: BizdireService, private spinner: NgxSpinnerService,
              private catSer: BizcategoryService, private router: Router) {
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
      this.getCategory(this.business.Category);
    },
    error => {
      console.log(error);
    });
  }

  getCategory(id) {
    return this.catSer.getCategory(id)
    .subscribe(res => {
      this.category = res;
    },
    error => {
      console.log(error);
    });
  }

}
