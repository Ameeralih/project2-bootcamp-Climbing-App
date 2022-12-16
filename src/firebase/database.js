import { firebaseApp } from "./config";
import { getDatabase, ref } from "firebase/database";

export const database = getDatabase(firebaseApp);

export const usersRef = ref(database, "users/");
