import { Component, OnInit } from '@angular/core';
import { AssetCatService } from '../services/asset-cat.service';
import { AssetCat } from '../models/asset-cat';

@Component({
  selector: 'app-asset-main',
  templateUrl: './asset-main.component.html',
  styleUrls: ['./asset-main.component.css']
})
export class AssetMainComponent implements OnInit {
categories: AssetCat[] = [];
  constructor(private assetCatService: AssetCatService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    return this.assetCatService.GetAllCategories()
    .subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    },
    error => {
      console.log(error);
    });
  }
}
