import { Component, OnInit } from '@angular/core';
import {AppService } from './app.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Region';

  countryControl: FormControl= new FormControl();
  cityControl: FormControl = new FormControl();
  countries: string[];
  cities: string[];
  country: string;
  city: string;
  cityj: string;

  constructor(private appService: AppService){
    this.countryControl.valueChanges.subscribe(data =>
      this.appService.getData(data).subscribe(response =>{
      this.countries = response;
      })
    )
    }

  getCities(selectedCountry: MatAutocompleteSelectedEvent): void{
    if(selectedCountry === null) this.cities = []; 
    this.country = selectedCountry.option.value;
    this.cities = this.appService.getCities(selectedCountry);
  }

  onSelectionChanged(selectedCity) {
    this.city = selectedCity.value;
  }
}
