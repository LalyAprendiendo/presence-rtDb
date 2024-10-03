import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";

const secret = require("./secret.json");

initializeApp({
  credential: cert(secret),
  databaseURL: "https://proteo-39cde-default-rtdb.firebaseio.com",
});

const fs = getFirestore();
const rtDb = getDatabase();

export { fs, rtDb };
