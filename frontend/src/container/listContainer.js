import React, { Component } from 'react';
import SongList from '../components/songList';
import SongDetail from '../components/songDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class ListContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={SongList} />
				<Route path="/detail/:rank" component={SongDetail} />
			</BrowserRouter>
		);
	}
}

export default ListContainer;
