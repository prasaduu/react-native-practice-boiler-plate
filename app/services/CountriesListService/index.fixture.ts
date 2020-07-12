import countriesList from '../../fixtures/countriesList.json';

import {CountriesListService} from './';

export default class CountriesListFixture implements CountriesListService {
  getCountries() {
    return Promise.resolve(countriesList);
  }
}
