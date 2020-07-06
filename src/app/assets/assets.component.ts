import { Component, OnInit } from '@angular/core';
import { Assets } from '../models/assets';
import { AssetsService } from '../services/assets.service';
import { ActivatedRoute } from '@angular/router';

function showAboutAsset() {
  const aboutAsset = document.getElementById('about-asset');
  const placeholder = document.getElementById('placeholder');
  aboutAsset.classList.add('active');
  placeholder.style.margin = '20%';
}
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
assets: Assets[] = [];
assetCat;
selectedAsset: Assets = null;
  constructor(private assetService: AssetsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.assetCat = params.get('id');
      this.getAssetsByCat(this.assetCat);
    },
    error => {
      console.log(error);
    });
  }


  getAssetsByCat(id) {
    this.assetService.getItemsByCategory(id)
    .subscribe(res => {
      this.assets = res;
    },
    error => {
      console.log(error);
    });
  }

  getSelected(id) {
    this.assetService.getAssetById(id)
    .subscribe(res => {
      this.selectedAsset = res;
      showAboutAsset();
      // alert(JSON.stringify(this.selectedAsset));
    },
    error => {
      console.log(error);
    });
  }
}
