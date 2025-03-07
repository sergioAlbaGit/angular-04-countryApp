import { switchMap, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
   ){}

ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.seaerchCountryByAlphaCode( id ) )
    )
    .subscribe( ( country ) => {
      if(!country) return this.router.navigateByUrl('');

      return this.country = country;

      });
}



}
