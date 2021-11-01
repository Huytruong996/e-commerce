import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./config";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  signInWithPopup(auth, GoogleProvider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const { displayName, email } = user;
      const timestamp = new Date();
      const docRef = doc(db, "Account", `${user.uid}`);
      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) {
        console.log("add");
        try {
          await setDoc(docRef, {
            DisplayName: displayName,
            Email: email,
            CreateDate: timestamp,
          });
        } catch (e) {
          console.log(e);
        }
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error : ", errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
