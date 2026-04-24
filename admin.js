import { db } from "./script.js";
import { ref, set, onValue, push, remove } from "[gstatic.com](https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js)";

// Generate special code with expiry
function generateCode(days) {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const expiry = Date.now() + days * 24 * 60 * 60 * 1000;
  set(ref(db, `codes/${code}`), { expiry });
  alert(`Code: ${code} valid for ${days} days`);
}

// Add post with auto-delete after 24h
function addPost(message) {
  const postRef = push(ref(db, "posts"), {
    message,
    createdAt: Date.now()
  });
  setTimeout(() => {
    remove(postRef);
    set(postRef, { message: "Signal coming soon..." });
  }, 24 * 60 * 60 * 1000);
}

// Active user log system
function trackActiveUsers() {
  const usersRef = ref(db, "users");
  onValue(usersRef, (snapshot) => {
    const users = snapshot.val() || {};
    const list = Object.entries(users).map(([uid, data]) => {
      const diff = Math.floor((Date.now() - data.lastActive) / 60000);
      return `${uid} — active ${diff} mins ago`;
    });
    document.getElementById("activeList").innerHTML = list.join("<br>");
  });
}

window.generateCode = generateCode;
window.addPost = addPost;
window.trackActiveUsers = trackActiveUsers;
