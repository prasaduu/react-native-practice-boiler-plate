import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  PRACTICE_SCENE,
  SIGNUP_SCENE,
  COUNTRIES_LIST_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import PracticeScene from './PracticeScene';
import {SignUpScene} from './SignUpScene';
import {CountriesListScene} from './CountriesListScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene key={PRACTICE_SCENE} component={PracticeScene} />,
  <Scene key={SIGNUP_SCENE} component={SignUpScene} />,
  <Scene initial key={COUNTRIES_LIST_SCENE} component={CountriesListScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
