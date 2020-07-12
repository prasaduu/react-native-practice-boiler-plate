import {Actions} from 'react-native-router-flux';
import {
  APP_LAUNCH_SCENE,
  SIGNUP_SCENE,
  COUNTRIES_LIST_SCENE,
} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToSignUpScene(props = {}) {
  Actions.push(SIGNUP_SCENE, props);
}

export function goToCountryListScene(props = {}) {
  Actions.push(COUNTRIES_LIST_SCENE, props);
}
