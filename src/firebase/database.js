import { getDatabase, ref } from "firebase/database";
import { gymData } from "../gymdata";

const database = getDatabase(firebaseApp);
const databaseRef = ref(database);
const GYMS_KEY = "Gyms";
