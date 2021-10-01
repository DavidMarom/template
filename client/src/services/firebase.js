import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";



initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
});

const db = getFirestore();
const provider = new GoogleAuthProvider();

async function addToDB(coll, data) {
	let res = await addDoc(collection(db, coll), data);
	return (res.id);
}

const getAllDocs = (coll) => {
	return new Promise((resolve) => {
		let allDocs = [];
		getDocs(collection(db, coll)).then(res => {
			res.forEach((doc) => {
				let prepare = { id: doc.id }
				let resData = doc.data();
				prepare = { ...prepare, ...resData }
				allDocs.push(prepare);
			});
			resolve(allDocs)
		}
		)
	});
}

const RemoveDoc = (coll, id) => deleteDoc(doc(db, coll, id));

const UpdateDB = (coll, id, data) => { updateDoc(doc(db, coll, id), data) }

export const fbdb = {
	addToDB,
	getAllDocs,
	RemoveDoc,
	UpdateDB,
	provider
	
}