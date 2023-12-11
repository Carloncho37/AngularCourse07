import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { HydrationFeatureKind } from '@angular/platform-browser';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { SearchBoxComponent } from './components/search-box/shearch-box.component';
import { SharedModule } from '../shared/shared.module';
import CardListCoponent from './components/Card-List/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponent, SearchBoxComponent, CardListCoponent, CardComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }




