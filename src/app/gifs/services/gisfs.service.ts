import { HttpClient, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
  private _tagsHistory: string [] = [];
  private ghipyApiKey = 'SsmmduvSG7GuOQe8gZs9OLfNXZjNAC2z';
  private serviceUrl = 'http://api.giphy.com/v1/gifs'
  public gifsList: Gif[] = [];

  constructor ( private http: HttpClient) {
  this.loadLocalStorage();
  }

  
get tagsHistory() {
  return [...this._tagsHistory];
}


// Metodo para organizar la grilla del historial de busqueda de Gifs
private organizeHistory (tag: string){
  tag = tag.toLowerCase();
  if ( this._tagsHistory.includes(tag) ) {
    this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
  }
  this._tagsHistory.unshift( tag );
  // Limito el total del historial a 10 elementos
  this._tagsHistory = this._tagsHistory.splice(0,10);
  this.SaveLocalStorage();
}

// Metodo para almacenar en LocalStorage
private SaveLocalStorage():void {
  localStorage.setItem( 'history', JSON.stringify( this._tagsHistory) )
}

// Metodo para leer desde el local storage
private loadLocalStorage(){
  if (!localStorage.getItem('history')) return;
  this._tagsHistory = JSON.parse(localStorage.getItem('history')! );

  if (this._tagsHistory.length ===0 ) return;
  this.searchTag(this._tagsHistory[0])

}

// Metodo para buscar
public searchTag ( tag: string ) : void {
  if (tag.length === 0) return;
  this.organizeHistory(tag);

  // Defino los parametros del metodo GET
  const params = new HttpParams()
    .set('api_key', this.ghipyApiKey)
    .set('limit','10')
    .set('q', tag)

  // Invoco al metodo GET a traves de observers
  this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe( resp => {
      this.gifsList = resp.data;
      }
    )
}
}

