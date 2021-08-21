import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// PAGES
import { Books } from "./pages/Books";
import { Authors } from "./pages/Authors";
import { Tasks } from "./pages/Tasks";

// COMPS
import { SideBar } from "./cmps/SideBar";

function _App() {
	return (
		<div className="outter-container">
			<div className="inner-container">
				<div className="ra">
					<div className="side-bar"><SideBar /></div>
					<div className="content-container">
						<Switch>
							<Route exact component={Books} path={"/"} />
							<Route exact component={Authors} path={"/authors"} />
							<Route exact component={Tasks} path={"/tasks"} />

						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));