// testFirebase.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// --- your real Firebase project config ---
const firebaseConfig = {
  apiKey: "AIzaSyBB3ITad6IYprc-8j5fpHnhjVRq0UFotdo",
  authDomain: "yourmood-e4e10.firebaseapp.com",
  projectId: "yourmood-e4e10",
  storageBucket: "yourmood-e4e10.firebasestorage.app",
  messagingSenderId: "895278921175",
  appId: "1:895278921175:web:21ec3a33d5b5d17ca44792"
};
// -----------------------------------------

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  try {
    const snap = await getDocs(collection(db, "questionBank"));
    console.log(`✅ Connected! Found ${snap.size} documents in "questionBank".`);
    for (const doc of snap.docs) {
      const d = doc.data();
      console.log(`• ${doc.id} | ko="${d.text_ko ?? ""}" | en="${d.text_en ?? ""}"`);
    }
    if (snap.empty) {
      console.log("ℹ️ No docs yet — add one in Firestore → questionBank and rerun.");
    }
  } catch (err) {
    console.error("❌ Firestore read failed:", err);
  }
}

run();

