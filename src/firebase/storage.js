import { storage } from "./config";
import { getStorage } from "firebase/storage";

export const storage = getStorage(firebaseApp);
