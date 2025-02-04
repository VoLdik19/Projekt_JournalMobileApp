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

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.deleteAll();
      }
    },
  ];

  constructor(private appStorageService: AppStorageService) {}

  async ionViewDidEnter() {
    const a = await this.appStorageService.get(entryStorage);
    if(Array.isArray(a)){
      this.entries = a;
    }
  }

  deleteAll(){
    this.appStorageService.clear();
    this.entries = [];
  }

  async pinEntry(entry: Entry){
    var data = await this.appStorageService.get(entryStorage);
    if(Array.isArray(data)){
      for (var e of data){
        if(e.DateTime.toString() == entry.DateTime.toString() && e.Description == entry.Description){
          e.pinned = true;
          await this.appStorageService.set(entryStorage, data);
          this.entries = data;
          break;
        }
      }
    }
  }

  async unpinEntry(entry: Entry){
    var data = await this.appStorageService.get(entryStorage);
    if(Array.isArray(data)){
      for (var e of data){
        if(e.DateTime.toString() == entry.DateTime.toString() && e.Description == entry.Description){
          e.pinned = false;
          await this.appStorageService.set(entryStorage, data);
          this.entries = data;
          break;
        }
      }
    }
  }

  async deleteEntry(entry: Entry){
    var data = await this.appStorageService.get(entryStorage);
    if(Array.isArray(data)){
      for (var e of data){
        if(e.DateTime.toString() == entry.DateTime.toString() && e.Description == entry.Description){
          data.splice(data.indexOf(e), 1);
          await this.appStorageService.set(entryStorage, data);
          this.entries = data;
          break;

        }

      }

    }

  }

}
