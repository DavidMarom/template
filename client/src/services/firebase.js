import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";

initializeApp({
	apiKey: "AIzaSyC_RmkY3D3A_TtSxbx4l8m-IrdZgmv4ioY",
	authDomain: "e2e-fb.firebaseapp.com",
	projectId: "e2e-fb",
	storageBucket: "e2e-fb.appspot.com",
	messagingSenderId: "127510841946",
	appId: "1:127510841946:web:eacf2b32d0ef6b302c2663"
});

const db = getFirestore();

const addToDB = (coll, data) => addDoc(collection(db, coll), data)

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
	UpdateDB
}