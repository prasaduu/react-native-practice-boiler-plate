import React, {Component} from 'react';
import {FlatList} from 'react-native';

import {Country} from '../../components/Country';

import {
  CountryListSceneWrapper,
  CountriesListContainer,
} from './styledComponents';

export class CountriesListScene extends Component {
  state = {
    countriesList: [],
  };

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(jsonData => this.setState({countriesList: jsonData}));
  }

  renderCountry = ({item}) => <Country countryDetails={item} />;

  render() {
    const {
      state: {countriesList},
      renderCountry,
    } = this;
    return (
      <CountryListSceneWrapper>
        <CountriesListContainer>
          <FlatList
            data={countriesList}
            renderItem={renderCountry}
            keyExtractor={item => item.name}
          />
        </CountriesListContainer>
      </CountryListSceneWrapper>
    );
  }
}
