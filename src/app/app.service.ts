import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url: string;

  
  constructor(private http: HttpClient,private appService: AppService) {

    this.url= 'https://raw.githubusercontent.com/Abhijith-Nagaraja/all-countries-and-cities-json/master/countries.json';

   }

  fullData: {};
  cities: string[];

  getData(word){
    return this.http.get(this.url).pipe(
    map(
      (res:any) => {
        this.fullData = res;
        var x = Object.keys(this.fullData);
        var pattern = new RegExp(word.toLowerCase());
        return x.filter((v)=> {
          return pattern.test(v.toLowerCase())
        });
        })
    )};

    getCities(selectCountry){
      this.cities = this.fullData[selectCountry.option.value];
      return this.cities;
    }
}
