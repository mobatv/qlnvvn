


// config.js

// Import Firebase (Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Cấu hình từ dự án Firebase của bạn
window.APP_CONFIG = {
   const firebaseConfig = {
  apiKey: "AIzaSyB82JABeqIWdQm1842qnnWIvuaeyRNgyog",
  authDomain: "vpsvn-8ebd6.firebaseapp.com",
  databaseURL: "https://vpsvn-8ebd6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vpsvn-8ebd6",
  storageBucket: "vpsvn-8ebd6.firebasestorage.app",
  messagingSenderId: "947319716277",
  appId: "1:947319716277:web:5ed25aae69ec7f5e0501fc",
  measurementId: "G-RWKZQDVVR5"
};
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Gắn vào window để Alpine.js (trong index.html) có thể gọi được
window.db = db;
window.fbRef = ref;
window.fbSet = set;
window.fbOnValue = onValue;
window.fbUpdate = update;

console.log("Firebase đã được khởi tạo thành công từ config.js");
