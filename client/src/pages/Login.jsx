import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { fbdb } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export const Login = () => {
	const dispatch = useDispatch()


	const doSignup = () => {
		const auth = getAuth();
		signInWithRedirect(auth, fbdb.provider);

	}


	useEffect(() => {
		dispatch(setPageName('login'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps

	return (



		<div>
			<h1>Profile / Login</h1>
			<p>Signup:</p>

			<button onClick={doSignup}>Signup</button>


		</div>
	)
}
