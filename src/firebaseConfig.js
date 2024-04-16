import { initializeApp } from "firebase/app";
import {getDatabase,ref, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkuTGwGdgfoB3wpe7y-ue2oGs1g1riazI",
  authDomain: "vehicletracking-4f6f7.firebaseapp.com",
  projectId: "vehicletracking-4f6f7",
  databaseURL:"https://vehicletracking-4f6f7-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "vehicletracking-4f6f7.appspot.com",
  messagingSenderId: "181871931451",
  appId: "1:181871931451:web:76889e9d71b12b8b2cac1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
export {database,ref,onValue};