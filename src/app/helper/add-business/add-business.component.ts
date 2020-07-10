import { Component, OnInit } from '@angular/core';
import { BizdireService } from 'src/app/services/bizdire.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBusiness } from 'src/app/models/ibusiness';
import { Bizcategory } from 'src/app/interfaces/bizcategory';
import { BizcategoryService } from 'src/app/services/bizcategory.service';
import { ToastrService } from 'ngx-toastr';
import { elementStart } from '@angular/core/src/render3';
import { NgxSpinnerService } from 'ngx-spinner';

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
  message;

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
  letters = 0;
  hideTotalChars = true;
  constructor(private businessService: BizdireService, private bizCatService: BizcategoryService,
              private toast: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    preventFormRefresh();
    this.getCategories();

  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    if (this.fileToUpload.size > 1300000) {
      alert('selected file exceeds the limit of 1.3Mb');
    } else if (this.fileToUpload.size < 0) {
      alert('no file selected');
    } else {
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  }

  onSubmit(Image) {
    if (this.fileToUpload === null) {
      this.message = 'logo required';
      this.showToast(this.message);
    } else {
      const data = {
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
      this.spinner.show();
      this.businessService.addNewBusiness(this.fileToUpload, data)
        .subscribe(res => {
          this.spinner.hide();
          this.message = 'data saved';
          this.showToast(this.message);
          Image = null;
          this.businessForm.reset();
          this.imageUrl = '/assets/img/placeholder.png';
        },
          error => {
            this.toast.error(JSON.stringify(error), 'RustlerX');
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

  showToast(message) {
    this.toast.success(message, 'RustlerX');
  }

  countChars() {

    this.letters += 1;
    if (this.letters === 500) {
      this.showToast('Only 500 Charaters Allowed!');
      this.hideTotalChars = false;
    }
  }
}
