import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  test(){return console.log("Injecting Service in Angular 18")}
}
