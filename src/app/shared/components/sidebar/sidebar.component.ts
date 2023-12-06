import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gisfs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //private GifsService

  constructor (  private gifsService:GifsService ) {}

  get tags (){
    return this.gifsService.tagsHistory;
  }

  searchTag (tag: string) {
    this.gifsService.searchTag(tag);
  }

}
