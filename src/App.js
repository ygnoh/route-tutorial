import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Posts from "./routes/Posts";
import Search from "./routes/Search";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/about/:username" component={About} />
				<Route path="/posts" component={Posts} />
				<Route path="/search" component={Search} />
				<Route path="/login" component={Login} />
				<Route path="/me" component={MyPage} />
			</div>
		</Router>
	);
};

export default App