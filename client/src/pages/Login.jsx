import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { setUser } from '../store/actions/fbActions'
import { fbdb } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


export const Login = () => {
	const dispatch = useDispatch()
	const [loggedUser, SetLoggedUser] = useState(null);

	async function doSignup() {
		const auth = getAuth();
		signInWithPopup(auth, fbdb.provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				let tmp = {
					name: user.displayName,
					mail: user.email,
					photoURL: user.photoURL,
					uid: user.uid
				}

				dispatch(setUser(tmp));
				SetLoggedUser(tmp);


				console.log("loggedUser:", loggedUser);


			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	}

	const doSignOut = () => {
		const auth = getAuth();
		signOut(auth).then(() => {
			console.log("out");
			SetLoggedUser(null);

		}).catch((error) => {
			console.log(error);
		});
	}


	useEffect(() => {
		dispatch(setPageName('login'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<h1>Profile / Login</h1>

			{(loggedUser ? <button onClick={doSignOut}>Signout</button> : <button onClick={doSignup}>Login with google</button>)}

			{(loggedUser ?
				<div>
					<p>{loggedUser.name}</p>
					<img src={loggedUser.photoURL} />
				</div>
				:
				<p>Not Logged In</p>

			)}

		</div>
	)
}