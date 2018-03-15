import { Navigation } from 'react-native-navigation';

// import LoginScreen from './LoginScreen';
import Temp from '../index';
// import LandingPage from './LandingPage';
// import QueryScreen from './Search/QueryScreen';
// import ResultScreen from './Search/Result';
// import FavoriteScreen from './FavoriteScreen';
// import PlayBookScreen from './PlayBookScreen';
// import ContentScreen from './ContentScreen';
// import DownloadScreen from './DownloadScreen';
// import PlayBookListScreen from './PlayBookListScreen';
// import CommunicatonScreen from './CommunicatonScreen';
// import SplashScreen from './SplashScreen';
// import VideoScreen from './Media/VideoScreen';
// import AudioScreen from './Media/AudioScreen';
// import PDFScreen from './Media/PDFScreen';

//import configureStore from '../configureStore';
//import { Provider } from 'react-redux';

//const confStore = configureStore();

export function registerScreens() {

//    Navigation.registerComponent('nuvasive.LOGIN_SCREEN', () => LoginScreen, confStore.store, Provider);
    Navigation.registerComponent('nuvasive.TEMP', () => Temp);
    // Navigation.registerComponent('nuvasive.LANDING_PAGE', () => LandingPage, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.QUERY_SCREEN', () => QueryScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.RESULT_SCREEN', () => ResultScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.FAVORITE_SCREEN', () => FavoriteScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.PLAYBOOK_SCREEN', () => PlayBookScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.CONTENT_SCREEN', () => ContentScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.DOWNLOAD_SCREEN', () => DownloadScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.PLAYBOOKLIST_SCREEN', () => PlayBookListScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.COMMUNICATON_SCREEN', () => CommunicatonScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.SPLASH_SCREEN', () => SplashScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.VIDEO_SCREEN', () => VideoScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.AUDIO_SCREEN', () => AudioScreen, confStore.store, Provider);
    // Navigation.registerComponent('nuvasive.PDF_SCREEN', () => PDFScreen, confStore.store, Provider);

}
