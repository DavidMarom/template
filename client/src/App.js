import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { UserContext } from "./UserContext";

// PAGES
import { Books } from "./pages/Books";
import { Authors } from "./pages/Authors";
import { Tasks } from "./pages/Tasks";
import { Fbdb } from "./pages/Fbdb";
import { Login } from "./pages/Login";

// COMPS
import { SideBar } from "./cmps/SideBar";

function _App() {
	const [user, setLoggedUser] = useState('aaaa');

	return (
		<div className="outter-container">
			<div className="inner-container">
				<div className="ra">
					<UserContext.Provider value={{ user, setLoggedUser }}>
						<div className="side-bar"><SideBar /></div>
						<div className="content-container">
							<Switch>
								<Route exact component={Books} path={"/"} />
								<Route exact component={Authors} path={"/authors"} />
								<Route exact component={Tasks} path={"/tasks"} />
								<Route exact component={Fbdb} path={"/firebase"} />
								<Route exact component={Login} path={"/login"} />
							</Switch>
						</div>
					</ UserContext.Provider>
				</div>
			</div>
		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));