import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  linkWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseConfig } from "./config";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
export const auth = getAuth();

export const db = getFirestore();
const timestamp = new Date();

GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async (userAuth) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = doc(db, "Account", `${uid}`);
  const snapshot = await getDoc(userRef);

  return snapshot;
};

export const signInWithGoogle = () => {
  linkWithPopup(auth.currentUser, GoogleProvider)
    .then((result) => {
      console.log(result);
      // Accounts successfully linked.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      // ...
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      // ...
    });
};

export const RegisterAccount = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  return result;
};

export const AddAccount = async (user, rest) => {
  const docRef = doc(db, "Account", `${user.uid}`);
  await setDoc(docRef, {
    DisplayName: rest.register_FirstName + rest.register_LastName,
    Email: user.email,
    CreateDate: new Date(),
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
