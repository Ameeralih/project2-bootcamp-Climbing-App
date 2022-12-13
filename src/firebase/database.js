import { firebaseApp } from "./config";
import { getDatabase, ref, set } from "firebase/database";
import { fetchGyms } from "../gymdata";

const GYMS_KEY = "gyms";
const database = getDatabase(firebaseApp);
