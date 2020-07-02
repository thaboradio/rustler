import { Component, OnInit } from '@angular/core';
import { BizdireService } from 'src/app/services/bizdire.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IBusiness } from 'src/app/models/ibusiness';
import { Bizcategory } from 'src/app/interfaces/bizcategory';
import { BizcategoryService } from 'src/app/services/bizcategory.service';

function preventFormRefresh() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}
@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {
  listOfCategories: Bizcategory[] = [];
  fileToUpload: File = null;
  imageUrl = '/assets/img/placeholder.png';

  businessForm = new FormGroup({
  Logo: new FormControl(''),
  Name: new FormControl(''),
  Description: new FormControl(''),
  Category: new FormControl(20),
  PhoneNumber: new FormControl(''),
  AlternativePhoneNumber: new FormControl(''),
  EmailAddress: new FormControl('', Validators.email),
  Website: new FormControl(''),
  FacebookLink: new FormControl(''),
  TwitterLink: new FormControl('')
});


  constructor(private businessService: BizdireService, private bizCatService: BizcategoryService) { }

  ngOnInit() {
    preventFormRefresh();
    this.getCategories();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(Image) {
    if (this.fileToUpload === null) {
      alert('Please select a logo');
    } else {
    const data: IBusiness = {
      Name: this.businessForm.value.Name,
      Description: this.businessForm.value.Description,
      Category: this.businessForm.value.Category,
      PhoneNumber: this.businessForm.value.PhoneNumber,
      AlternativePhoneNumber: this.businessForm.value.AlternativePhoneNumber,
      EmailAddress: this.businessForm.value.EmailAddress,
      Website: this.businessForm.value.Website,
      FacebookLink: this.businessForm.value.FacebookLink,
      TwitterLink: this.businessForm.value.TwitterLink,
      Logo: this.businessForm.value.Logo
    };
    this.businessService.addNewBusiness(this.fileToUpload, data)
    .subscribe(res => {
      this.businessForm.reset();
      alert('data saved');
      Image = null;
      this.imageUrl = '/assets/img/placeholder.png';
    },
    error => {
      console.log(error);
    });
  }
  }

  getCategories() {
    return this.bizCatService.getCategories()
    .subscribe(res => {
      this.listOfCategories = res;
    },
    error => {
      console.log(error);
    });
  }
}
