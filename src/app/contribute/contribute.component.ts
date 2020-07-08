import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContributeService } from '../services/contribute.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
ContributionsForm = new FormGroup({
  Name: new FormControl(''),
  Email: new FormControl(''),
  Cellphone: new FormControl(''),
  ContributeOption: new FormControl(''),
  Remarks: new FormControl('')
});
showLoading = false;
  constructor(private cont: ContributeService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  sendEmail() {
    this.spinner.show();
    this.cont.sendMessage(this.ContributionsForm.value)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/confirm');
      this.spinner.hide();
    },
    error => {
      console.log(error);
    });
  }
}
