import { firebaseApp } from "./config";
import { getDatabase, ref } from "firebase/database";
import { fetchGyms } from "../gymdata";

export const database = getDatabase(firebaseApp);

export const usersRef = ref(database, "users/");
