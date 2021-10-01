import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { setUser } from '../store/actions/fbActions'
import { fbdb } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const Login = () => {
	const dispatch = useDispatch()
	const stateUser = useSelector((state) => state.fb.user);

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
				// Add the user to the store (redux)
				dispatch(setUser(tmp));

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
			console.log("out");
			dispatch(setUser(null));


		}).catch((error) => {
			console.log(error);
		});
	}

	useEffect(() => {
		dispatch(setPageName('login'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		
		console.log("state",stateUser);
	}, [stateUser])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<h1>Profile / Login</h1>

			{(stateUser ? <button onClick={doSignOut}>Signout</button> : <button onClick={doSignup}>Login with google</button>)}

			{(stateUser ?
				<div>
					<p>{stateUser.name}</p>
					<img src={stateUser.photoURL} />
				</div>
				:
				<p>Not Logged In</p>

			)}
		</div>
	)
}