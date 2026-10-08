import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
	return (
		<BrowserRouter>
			<main>
				<nav aria-label="Form sections">
					<ul>
						<li><Link id="form-link" to="/">Form layout</Link></li>
						<li><Link id="form-ref-link" to="/ref">useRef form</Link></li>
						<li><Link id="form-state-link" to="/state">useState form</Link></li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/" component={Form} />
					<Route exact path="/ref" component={FormRef} />
					<Route exact path="/state" component={FormState} />
					<Redirect to="/" />
				</Switch>
			</main>
		</BrowserRouter>
	);
}

