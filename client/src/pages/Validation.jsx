import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

export const Validation = () => {
	const dispatch = useDispatch()

	const [name_err, setName_err] = useState('');
	const [company_err, setComp_err] = useState('');
	const [phone_err, setPhone_err] = useState('');
	const [email_err, setEmail_err] = useState('');
	const [check_err, setCheck_err] = useState(false);
	const [check_stts, setCheck_stts] = useState(false);

	const toggleCheck = () => {
		setCheck_stts(!check_stts);
	}


	const doSend = async ev => {
		ev.preventDefault();
		let valid = true;

		if (!(/^[a-z ,.'-]+$/i.test(ev.target.name.value))) {
			setName_err('Invalid, please try again'); valid = false
		} else { setName_err('') }

		if (!(/^[a-z ,.'-]+$/i.test(ev.target.company.value))) {
			setComp_err('Invalid, please try again'); valid = false
		} else { setComp_err('') }

		if (!(/^[0-9]+$/i.test(ev.target.phone.value))) {
			setPhone_err('Invalid, please try again'); valid = false
		} else { setPhone_err('') }

		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ev.target.email.value))) {
			setEmail_err('Invalid, please try again'); valid = false
		} else { setEmail_err('') }

		if (!check_stts) {
			setCheck_err('You must agree to the terms'); valid = false
		}
		else { setCheck_err('') }
	};

	// On mount
	useEffect(() => {
		dispatch(setPageName('validation'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps


	return (
		<div>
			<h1>Form Validation</h1>

			<h4>The fields below are validated using regex (see code on gitHub)</h4>

			<form onSubmit={doSend}>
				<div className="input-container">
					<input name="name" type="text" placeholder="Full Name" />
					<div className="err-msg">{name_err}</div>
				</div>

				<div className="input-container">
					<input name="company" type="text" placeholder="Company Name" />
					<div className="err-msg">{company_err}</div>
				</div>

				<div className="input-container">
					<input name="phone" type="text" placeholder="Phone" />
					<div className="err-msg">{phone_err}</div>
				</div>

				<div className="input-container">
					<input name="email" type="text" placeholder="Email" />
					<div className="err-msg">{email_err}</div>
				</div>

				<div className="ra w400">
					<div className="cb">
					<input type="checkbox" name="check" className="w20" onClick={toggleCheck} />
						<p>I agree</p>
					</div>
					<div>
						<div className="err-msg" >{check_err}</div>
					</div>
				</div>

				<div className="ra"><button className="submit-btn">Submit</button></div>
			</form>
		</div>
	)
}