import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export default class CardListComponent {
  @Input()
  public gifs: Gif[] = [];

}
