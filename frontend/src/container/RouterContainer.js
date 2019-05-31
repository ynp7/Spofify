import React, { Component } from 'react';
import FetchSong from './fetchSong';
import SongDetail from '../components/songDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class RouterContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={FetchSong} />
				<Route path="/detail/:rank" component={SongDetail} />
			</BrowserRouter>
		);
	}
}

export default RouterContainer;
