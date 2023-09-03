import { initializeApp } from "firebase-admin";
import { getAuth } from "firebase/auth";
// import verifyIdToken from "firebase-admin/auth";

// Initialize Firebase Admin SDK
initializeApp({
  // credential: getAuth(),
  // other config options
});

// Verify the authentication token
export async function verifyAuthToken(token:any) {
  try {
    const decodedToken = await verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw error;
  }
}

// You can add more Firebase Admin methods here as needed

// Example:
// export async function getUserByEmail(email) {
//   try {
//     const userRecord = await admin.auth().getUserByEmail(email);
//     return userRecord;
//   } catch (error) {
//     throw error;
//   }