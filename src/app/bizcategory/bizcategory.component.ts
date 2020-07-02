import { Component, OnInit } from '@angular/core';
import { BizcategoryService } from '../services/bizcategory.service';
import { Bizcategory } from '../interfaces/bizcategory';

@Component({
  selector: 'app-bizcategory',
  templateUrl: './bizcategory.component.html',
  styleUrls: ['./bizcategory.component.css']
})
export class BizcategoryComponent implements OnInit {
  categories: Bizcategory[] = null;
  constructor(private bizCatService: BizcategoryService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    return this.bizCatService.getCategories()
    .subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    },
    error => {
      console.error(error);
    });
  }

}
