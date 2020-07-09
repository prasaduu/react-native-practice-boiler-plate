import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  PRACTICE_SCENE,
  SIGNUP_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import PracticeScene from './PracticeScene';
import {SignUpScene} from './SignUpScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene key={PRACTICE_SCENE} component={PracticeScene} />,
  <Scene initial key={SIGNUP_SCENE} component={SignUpScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
