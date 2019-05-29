import React, { Component } from 'react';
import Header from '../components/header';
import SongList from '../components/songList';
import SongDetail from '../components/songDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class ListContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" component={Header} />
				<Route path="/" exact component={SongList} />
				<Route path="/detail/:id" component={SongDetail} />
			</BrowserRouter>
		);
	}
}

export default ListContainer;
