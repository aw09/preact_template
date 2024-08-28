import { db } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const readData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error reading data from Firestore: ", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export default readData;