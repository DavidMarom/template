import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = () => {
	const pageName = useSelector((state) => state.user.pageName);

	return (
		<div className="cbl2 inner-side-bar">
			{/* <p className="title">Side Bar</p> */}

			<div className={(pageName === 'lobby' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/"> Lobby</NavLink>
			</div>

			<div className={(pageName === 'books' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/books"> Books</NavLink>
			</div>

			<div className={(pageName === 'authors' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/authors"> Authors</NavLink>
			</div>

			<div className={(pageName === 'fbdb' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/firebase"> Firebase test</NavLink>
			</div>

			<div className={(pageName === 'login' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/login"> Login</NavLink>
			</div>
			
			<div className={(pageName === 'debounce' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/debounce"> Debounce</NavLink>
			</div>
		
			<div className={(pageName === 'validation' ? "active-cell" : "inactive-cell")}>
				<NavLink to="/validation"> Validation</NavLink>
			</div>

		</div>
	);
};