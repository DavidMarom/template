import React, { useEffect ,useContext} from 'react'
import { useDispatch } from 'react-redux'

// Redux store
import { setPageName } from '../store/actions/userActions'

import { fbdb } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { UserContext } from '../UserContext';

export const Login = () => {
	const { user, setLoggedUser } = useContext(UserContext);

	const dispatch = useDispatch()

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
					uid: user.uid,
					token: token
				}

				// PUT THE USER IN CONTEXT
				setLoggedUser(tmp);
			}).catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// The email of the user's account used.
				// const email = error.email;
				// The AuthCredential type that was used.
				// const credential = GoogleAuthProvider.credentialFromError(error);
			});
	}

	const doSignOut = () => {
		const auth = getAuth();
		signOut(auth).then(() => {
			// Remove user from context
			setLoggedUser(null);
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

			{(user ? <button onClick={doSignOut}>Signout</button> : <button onClick={doSignup}>Login with google</button>)}

			<div className="h-space"></div>

			{(user ?
				<div>
					<p>{user.name}</p>
					<p>{user.mail}</p>
					<img src={user.photoURL} alt="" />
				</div>
				:
				<p>Not Logged In</p>

			)}
		</div>
	)
}