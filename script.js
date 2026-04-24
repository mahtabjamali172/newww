import { initializeApp } from "[gstatic.com](https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js)";
import { getDatabase, ref, set, get, onValue, remove } from "[gstatic.com](https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js)";

const firebaseConfig = {
  apiKey: "AIzaSyAqfguS1ucAtklcl06eB1JIWQr46XMpe7g",
  authDomain: "safe-chat-c0b9c.firebaseapp.com",
  databaseURL: "[safe-chat-c0b9c-default-rtdb.asia-southeast1.firebasedatabase.app](https://safe-chat-c0b9c-default-rtdb.asia-southeast1.firebasedatabase.app)",
  projectId: "safe-chat-c0b9c",
  storageBucket: "safe-chat-c0b9c.appspot.com",
  messagingSenderId: "119640275300",
  appId: "1:119640275300:web:20ae984f4af1ffe6a62271"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
