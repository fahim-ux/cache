import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as path from "path";

// 🔹 Check if running locally (Emulator)
if (process.env.FUNCTIONS_EMULATOR) {
  const serviceAccount = require(path.resolve(__dirname, "../serviceAccountKey.json"));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "your-project-id.appspot.com",
  });
} else {
  admin.initializeApp();
}

export const db = admin.firestore();
export const bucket = admin.storage().bucket();
