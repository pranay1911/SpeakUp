import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAGSheP2sjx0EISf9c8I3JQqR1wiqhniDQ",
  authDomain: "speakupapp-1e117.firebaseapp.com",
  databaseURL: "https://speakupapp-1e117-default-rtdb.firebaseio.com",
  projectId: "speakupapp-1e117",
  storageBucket: "speakupapp-1e117.appspot.com",
  messagingSenderId: "44307447966",
  appId: "1:44307447966:web:8daa60ad308de2b06c7b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };                                                    