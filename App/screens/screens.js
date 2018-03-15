import { Navigation } from 'react-native-navigation';

// import LoginScreen from './LoginScreen';
import Temp from '../index';
import SplashScreen from './SplashScreen';
// import LandingPage from './LandingPage';
// import QueryScreen from './Search/QueryScreen';
// import ResultScreen from './Search/Result';
// import FavoriteScreen from './FavoriteScreen';
// import PlayBookScreen from './PlayBookScreen';
// import ContentScreen from './ContentScreen';
// import DownloadScreen from './DownloadScreen';
// import PlayBookListScreen from './PlayBookListScreen';
// import CommunicatonScreen from './CommunicatonScreen';
// import VideoScreen from './Media/VideoScreen';
// import AudioScreen from './Media/AudioScreen';
// import PDFScreen from './Media/PDFScreen';

import configureStore from '../configureStore';
import { Provider } from 'react-redux';

const confStore = configureStore();

export function registerScreens() {

//    Navigation.registerComponent('MPLO.LOGIN_SCREEN', () => LoginScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.TEMP', () => Temp, confStore.store, Provider);
    Navigation.registerComponent('MPLO.SPLASH_SCREEN', () => SplashScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.LANDING_PAGE', () => LandingPage, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.QUERY_SCREEN', () => QueryScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.RESULT_SCREEN', () => ResultScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.FAVORITE_SCREEN', () => FavoriteScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.PLAYBOOK_SCREEN', () => PlayBookScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.CONTENT_SCREEN', () => ContentScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.DOWNLOAD_SCREEN', () => DownloadScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.PLAYBOOKLIST_SCREEN', () => PlayBookListScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.COMMUNICATON_SCREEN', () => CommunicatonScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.VIDEO_SCREEN', () => VideoScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.AUDIO_SCREEN', () => AudioScreen, confStore.store, Provider);
    // Navigation.registerComponent('MPLO.PDF_SCREEN', () => PDFScreen, confStore.store, Provider);

}
