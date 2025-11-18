import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_APIKEY",
  authDomain: "SEU_AUTHDOMAIN",
  projectId: "SEU_PROJECTID",
  appId: "SEU_APPID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
