import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})


export class LazyImageComponent implements OnInit {


  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  // Propiedad para saber si ya cargo la imagen
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  // Metodo para cambiar la propieda hasLoaded
  onLoad():void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);


  }


}
