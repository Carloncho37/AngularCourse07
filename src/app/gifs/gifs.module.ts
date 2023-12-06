import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/shearch-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { HydrationFeatureKind } from '@angular/platform-browser';
import CardListCoponent from './components/Card-List/card-list.component/card-list.component';


@NgModule({
  declarations: [
    HomePageComponent, SearchBoxComponent, CardListCoponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }



