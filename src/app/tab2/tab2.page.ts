import { Component } from '@angular/core';
import { entryStorage } from 'src/app.constants';
import { AppStorageService } from '../appStorage/appStorage.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  entries: Array<Entry> = [];

  constructor(private appStorageService: AppStorageService) {}

  async ionViewDidEnter() {
    this.entries = await this.appStorageService.get(entryStorage);
  }
  

}
