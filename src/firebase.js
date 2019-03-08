import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDA30w3-2P0GnLSSOQIYUzT0QomMkoA3u8',
  authDomain: 'pupies-7294e.firebaseapp.com',
  databaseURL: 'https://pupies-7294e.firebaseio.com',
  projectId: 'pupies-7294e',
  storageBucket: 'pupies-7294e.appspot.com',
  messagingSenderId: '271283523396'
};
firebase.initializeApp(config);

var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/userinfo.email'
);
firebase.auth().useDeviceLanguage();
var facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.addScope('email');
export { googleAuthProvider, facebookAuthProvider };
