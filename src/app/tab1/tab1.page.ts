import { Component } from '@angular/core';
import { AppStorageService } from '../appStorage/appStorage.service';
import { Entry } from '../model/entry';
import { entryStorage } from 'src/app.constants';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private appStorageService: AppStorageService) {}

  journalDateTime: string|undefined;

  journalDescription: string="";

  async saveData() {

    if (this.journalDateTime != undefined) {
      const datum: number = Date.parse(this.journalDateTime);
      var entry = new Entry(new Date(datum), this.journalDescription);

      const value = await this.appStorageService.get(entryStorage);
        if(Array.isArray(value)){
          value.push(entry);
          this.appStorageService.set(entryStorage, value);
        } else {
          this.appStorageService.set(entryStorage, [entry]);
        }
    }
    else{
      
    }
    
  }

}
