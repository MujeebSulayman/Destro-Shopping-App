import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: 'AIzaSyCr4kwjcvQnnrgRGMChyEkSCL9fjPE5294',
	authDomain: 'hemdestro.firebaseapp.com',
	databaseURL: 'https://hemdestro-default-rtdb.firebaseio.com',
	projectId: 'hemdestro',
	storageBucket: 'hemdestro.appspot.com',
	messagingSenderId: '285876951599',
	appId: '1:285876951599:web:c346f39b4b507bb226c4da',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
