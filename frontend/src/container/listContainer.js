import React, { Component } from 'react';
import searchSong from '../components/searchSong';
import SongDetail from '../components/songDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class ListContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={searchSong} />
				<Route path="/detail/:rank" component={SongDetail} />
			</BrowserRouter>
		);
	}
}

export default ListContainer;
